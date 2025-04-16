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

  return (
    <Suspense fallback={<MaterialPageSkeleton />}>
      <MaterialPageContent materialId={id} />
    </Suspense>
  )
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

function MaterialPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>

          <div className="space-y-4 animate-pulse">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-8 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>

        <div className="animate-pulse">
          <div className="bg-gray-200 h-[300px] w-full"></div>
        </div>
      </div>
    </div>
  )
}
