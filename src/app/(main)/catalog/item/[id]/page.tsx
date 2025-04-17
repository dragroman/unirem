// src/app/(main)/catalog/item/[id]/page.tsx
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { MaterialTemplate } from "@/components/catalog/templates/MaterialTemplate"
import { getAllCategoryTerms, getCategoryById } from "@/lib/api/taxonomy"
import { getMaterialById } from "@/lib/api/material"
import { generateMaterialBreadcrumbs } from "@/lib/utils/catalog-helpers"

export default async function MaterialPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return <MaterialPageContent materialId={id} />
}

async function MaterialPageContent({ materialId }: { materialId: string }) {
  try {
    const material = await getMaterialById(materialId)

    if (!material) {
      notFound()
    }

    // Получение информации о категории материала
    const allTerms = await getAllCategoryTerms()
    let category = null
    let parentCategory = null

    if (material.field_category) {
      const categoryId = material.field_category.drupal_internal__tid.toString()
      category = getCategoryById(allTerms, categoryId)

      // Если у категории есть родитель, получаем его
      if (category && category.parent && category.parent[0]?.id !== "virtual") {
        // Извлекаем ID родительского термина из строки вида "taxonomy_term--category:123"

        parentCategory = getCategoryById(
          allTerms,
          category.parent[0].drupal_internal__tid.toString()
        )
      }
    }

    // Формируем хлебные крошки с учетом всех уровней
    const breadcrumbs = generateMaterialBreadcrumbs(
      material,
      category || undefined,
      parentCategory || undefined
    )

    return <MaterialTemplate material={material} breadcrumbs={breadcrumbs} />
  } catch (error) {
    console.error("Error fetching material:", error)
    notFound()
  }
}
