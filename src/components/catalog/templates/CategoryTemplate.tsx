// src/components/catalog/templates/CategoryTemplate.tsx
import React from "react"
import { Category } from "@/types/taxonomy"
import { Material } from "@/types/material"
import { CategoryList } from "../features/CategoryList"
import { CatalogGrid } from "../ui/CatalogGrid"
import { CatalogBreadcrumbs } from "../ui/CatalogBreadcrumbs"
import { BreadcrumbItem } from "@/types/catalog"

interface CategoryTemplateProps {
  category: Category
  childCategories?: Category[]
  parentCategoryId?: string | number
  materials?: Material[]
  breadcrumbs: BreadcrumbItem[]
}

export function CategoryTemplate({
  category,
  childCategories = [],
  parentCategoryId,
  materials = [],
  breadcrumbs,
}: CategoryTemplateProps) {
  const hasChildCategories = childCategories && childCategories.length > 0

  return (
    <div className="container mx-auto py-8">
      <CatalogBreadcrumbs items={breadcrumbs} />

      <h1 className="text-2xl font-bold mb-6">{category.name}</h1>

      {category.field_teaser_text && (
        <p className="text-gray-600 mb-6">{category.field_teaser_text}</p>
      )}

      {hasChildCategories ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Подкатегории</h2>
          <CategoryList
            categories={childCategories}
            parentCategoryId={category.drupal_internal__tid} // Передаем ID текущей категории как родительской для дочерних
            columns={3}
          />
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">Материалы</h2>
          <CatalogGrid
            items={materials}
            columns={6}
            emptyMessage="В данной категории материалы не найдены"
          />
        </>
      )}
    </div>
  )
}
