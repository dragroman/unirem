// src/lib/api/taxonomy.ts
import { drupal } from "@/lib/drupal"
import { Category, CategoryHierarchy } from "@/types/taxonomy"

// Кеширование терминов на стороне сервера
let termsCache: Category[] | null = null

/**
 * Получить все термины категорий
 */
export async function getAllCategoryTerms() {
  // Используем уже загруженные термины, если они есть
  if (termsCache) return termsCache

  // Иначе загружаем все термины за один запрос
  const terms = await drupal.getResourceCollection<Category[]>(
    "taxonomy_term--category",
    {
      params: {
        "fields[taxonomy_term--category]":
          "name,field_teaser_text,drupal_internal__tid,parent",
        "filter[status]": "1",
        sort: "weight,name",
      },
      cache: "force-cache",
      next: {
        revalidate: 3600, // Обновляем теги каждый час
      },
    }
  )

  termsCache = terms
  return terms
}

/**
 * Получить термин по ID
 */
export function getCategoryById(terms: Category[], termId: string) {
  return terms.find((term) => term.drupal_internal__tid.toString() === termId)
}

/**
 * Получить дочерние термины по ID родителя
 */
export function getChildCategoriesByParentId(
  terms: Category[],
  parentId: string
) {
  // Проверяем, что parentId - строка
  const parentIdStr = parentId.toString()

  // Ищем термины, у которых родителем является указанный термин
  return terms.filter(
    (term) =>
      term.parent &&
      term.parent.some((p) => {
        // Проверяем несколько возможных форматов ID родителя
        const fullId = `taxonomy_term--category:${parentIdStr}`
        return (
          p.id === fullId ||
          p.id === parentIdStr ||
          (p.drupal_internal__tid &&
            p.drupal_internal__tid.toString() === parentIdStr)
        )
      })
  )
}

/**
 * Получить корневые категории (без родителя или с виртуальным родителем)
 */
export function getRootCategories(terms: Category[]) {
  return terms.filter((term) => term.parent && term.parent[0]?.id === "virtual")
}

/**
 * Получить иерархию категорий
 */
export async function getCategoryHierarchy(): Promise<CategoryHierarchy> {
  const allTerms = await getAllCategoryTerms()
  const rootCategories = getRootCategories(allTerms)

  const children: Record<string, Category[]> = {}

  // Для каждой родительской категории находим дочерние
  rootCategories.forEach((parentCategory) => {
    const categoryId = parentCategory.drupal_internal__tid.toString()
    children[categoryId] = getChildCategoriesByParentId(allTerms, categoryId)
  })

  return {
    root: rootCategories,
    children,
  }
}

/**
 * Получить информацию о родительском термине
 */
export function getParentCategoryInfo(category: Category) {
  if (
    !category.parent ||
    !category.parent.length ||
    category.parent[0]?.id === "virtual"
  ) {
    return null
  }

  // Извлекаем ID родительского термина из строки
  const parentIdMatch = category.parent[0].id.match(
    /taxonomy_term--category:(\d+)/
  )
  if (parentIdMatch && parentIdMatch[1]) {
    return {
      id: parentIdMatch[1],
      rawId: category.parent[0].id,
    }
  }

  return null
}
