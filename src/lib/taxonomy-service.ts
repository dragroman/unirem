// lib/taxonomy-service.ts
import { drupal } from "@/lib/drupal"
import { DrupalTaxonomyTerm } from "next-drupal"

interface CatalogTerm extends DrupalTaxonomyTerm {
  parent: { id: string }[]
  field_teaser_text?: string
}

// Кеширование терминов на стороне сервера
let termsCache: CatalogTerm[] | null = null

export async function getAllCategoryTerms() {
  // Используем уже загруженные термины, если они есть
  if (termsCache) return termsCache

  // Иначе загружаем все термины за один запрос
  const terms = await drupal.getResourceCollection<CatalogTerm[]>(
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

// Получить родительский термин по ID
export function getParentTermById(terms: CatalogTerm[], termId: string) {
  return terms.find((term) => term.drupal_internal__tid.toString() === termId)
}

// Получить дочерние термины по ID родителя
export function getChildTermsByParentId(
  terms: CatalogTerm[],
  parentId: string
) {
  return terms.filter(
    (term) =>
      term.parent &&
      term.parent.some(
        (p) =>
          p.id === `taxonomy_term--category:${parentId}` || p.id === parentId
      )
  )
}

// Получить главные родительские термины
export function getRootTerms(terms: CatalogTerm[]) {
  return terms.filter((term) => term.parent && term.parent[0]?.id === "virtual")
}
