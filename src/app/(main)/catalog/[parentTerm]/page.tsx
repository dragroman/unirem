import { notFound, redirect } from "next/navigation"
import { Suspense } from "react"
import { CategoryTemplate } from "@/components/catalog/templates/CategoryTemplate"
import {
  getAllCategoryTerms,
  getCategoryById,
  getChildCategoriesByParentId,
} from "@/lib/api/taxonomy"
import { getMaterialsByCategory } from "@/lib/api/material"
import { generateCategoryBreadcrumbs } from "@/lib/utils/catalog-helpers"

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ parentTerm: string }>
}) {
  const { parentTerm } = await params
  return (
    <Suspense fallback={<CategoryPageSkeleton />}>
      <CategoryPageContent termId={parentTerm} />
    </Suspense>
  )
}

async function CategoryPageContent({ termId }: { termId: string }) {
  const allTerms = await getAllCategoryTerms()
  const category = getCategoryById(allTerms, termId)

  if (!category) {
    notFound()
  }

  // Проверяем, есть ли у термина родитель
  const hasParent =
    category.parent &&
    category.parent[0]?.id !== "virtual" &&
    category.parent.length > 0

  // Если у термина есть родитель, это значит, что доступ должен быть через путь с родителем
  if (hasParent) {
    notFound()
  }

  // Получаем дочерние категории
  const childCategories = getChildCategoriesByParentId(allTerms, termId)

  // Получаем материалы только если нет дочерних категорий
  const materials =
    childCategories.length === 0 ? await getMaterialsByCategory(termId) : []

  // Формируем хлебные крошки
  const breadcrumbs = generateCategoryBreadcrumbs(category)

  return (
    <CategoryTemplate
      category={category}
      childCategories={childCategories}
      materials={materials}
      breadcrumbs={breadcrumbs}
    />
  )
}

function CategoryPageSkeleton() {
  return (
    <div className="container mx-auto py-8">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg border border-gray-200"
          >
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
