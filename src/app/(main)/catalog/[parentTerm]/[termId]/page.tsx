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
  return <SubcategoryPageContent parentTermId={parentTerm} termId={termId} />
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
