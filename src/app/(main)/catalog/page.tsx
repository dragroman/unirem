// src/app/(main)/catalog/page.tsx
import { Suspense } from "react"
import { CatalogTemplate } from "@/components/catalog/templates/CatalogTemplate"
import { getRootCategories, getAllCategoryTerms } from "@/lib/api/taxonomy"
import { getRecentMaterials } from "@/lib/api/material"
import { generateCatalogBreadcrumbs } from "@/lib/utils/catalog-helpers"

export default function CatalogPage() {
  return (
    <Suspense fallback={<CatalogPageSkeleton />}>
      <CatalogPageContent />
    </Suspense>
  )
}

async function CatalogPageContent() {
  const allTerms = await getAllCategoryTerms()
  const rootCategories = getRootCategories(allTerms)
  const recentMaterials = await getRecentMaterials(6)
  const breadcrumbs = generateCatalogBreadcrumbs()

  return (
    <CatalogTemplate
      title="Каталог"
      description="Выберите категорию материала или воспользуйтесь поиском"
      categories={rootCategories}
      recentMaterials={recentMaterials}
      breadcrumbs={breadcrumbs}
    />
  )
}

function CatalogPageSkeleton() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Каталог</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Категории</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg border border-gray-200 animate-pulse"
            >
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Последние материалы</h2>
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
      </section>
    </div>
  )
}
