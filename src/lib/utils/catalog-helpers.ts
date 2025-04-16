// src/lib/utils/catalog-helpers.ts
import { BreadcrumbItem } from "@/types/catalog"
import { Category } from "@/types/taxonomy"
import { Material } from "@/types/material"

/**
 * Формирование хлебных крошек для страницы каталога
 */
export function generateCatalogBreadcrumbs(): BreadcrumbItem[] {
  return [
    { name: "Главная", url: "/" },
    { name: "Каталог", url: "/catalog", isCurrentPage: true },
  ]
}

/**
 * Формирование хлебных крошек для страницы категории
 */
export function generateCategoryBreadcrumbs(
  category: Category,
  parentCategory?: Category
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Главная", url: "/" },
    { name: "Каталог", url: "/catalog" },
  ]

  if (parentCategory) {
    breadcrumbs.push({
      name: parentCategory.name,
      url: `/catalog/${parentCategory.drupal_internal__tid}`,
    })

    // Для подкатегории добавляем URL с обоими ID
    breadcrumbs.push({
      name: category.name,
      url: `/catalog/${parentCategory.drupal_internal__tid}/${category.drupal_internal__tid}`,
      isCurrentPage: true,
    })
  } else {
    // Для корневой категории
    breadcrumbs.push({
      name: category.name,
      url: `/catalog/${category.drupal_internal__tid}`,
      isCurrentPage: true,
    })
  }

  return breadcrumbs
}

/**
 * Формирование хлебных крошек для страницы материала
 */
export function generateMaterialBreadcrumbs(
  material: Material,
  category?: Category,
  parentCategory?: Category
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Главная", url: "/" },
    { name: "Каталог", url: "/catalog" },
  ]

  // Добавляем родительскую категорию, если она есть
  if (parentCategory) {
    breadcrumbs.push({
      name: parentCategory.name,
      url: `/catalog/${parentCategory.drupal_internal__tid}`,
    })
  }

  // Добавляем текущую категорию, если она есть
  if (category) {
    const url = parentCategory
      ? `/catalog/${parentCategory.drupal_internal__tid}/${category.drupal_internal__tid}`
      : `/catalog/${category.drupal_internal__tid}`

    breadcrumbs.push({
      name: category.name,
      url: url,
    })
  }

  breadcrumbs.push({
    name: material.title,
    url: `/catalog/item/${material.drupal_internal__nid}`,
    isCurrentPage: true,
  })

  return breadcrumbs
}
