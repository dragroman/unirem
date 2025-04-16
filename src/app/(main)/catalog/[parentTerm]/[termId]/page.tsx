// src/app/(main)/catalog/[parentTerm]/[termId]/page.tsx
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { CategoryTemplate } from "@/components/catalog/templates/CategoryTemplate"
import { getAllCategoryTerms, getCategoryById } from "@/lib/api/taxonomy"
import { getMaterialsByCategory } from "@/lib/api/material"
import { generateCategoryBreadcrumbs } from "@/lib/utils/catalog-helpers"

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ parentTerm: string; termId: string }>
}) {
  const { parentTerm, termId } = await params
  return (
    <Suspense fallback={<CategoryPageSkeleton />}>
      <SubcategoryPageContent parentTermId={parentTerm} termId={termId} />
    </Suspense>
  )
}

async function SubcategoryPageContent({
  parentTermId,
  termId,
}: {
  parentTermId: string
  termId: string
}) {
  const allTerms = await getAllCategoryTerms()
  const category = getCategoryById(allTerms, termId)
  const parentCategory = getCategoryById(allTerms, parentTermId)

  if (!category || !parentCategory) {
    notFound()
  }

  // Получаем материалы текущей категории
  const materials = await getMaterialsByCategory(termId)

  // Формируем хлебные крошки с учетом всех уровней иерархии
  const breadcrumbs = generateCategoryBreadcrumbs(category, parentCategory)

  return (
    <CategoryTemplate
      category={category}
      materials={materials}
      breadcrumbs={breadcrumbs}
    />
  )
}

function CategoryPageSkeleton() {
  return (
    <div className="container mx-auto py-8">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow">
            <div className="bg-gray-200 h-[200px] w-full"></div>
            <div className="p-2">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
