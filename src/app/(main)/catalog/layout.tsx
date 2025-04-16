// src/app/(main)/catalog/layout.tsx
import { Suspense } from "react"
import { CatalogNavigation } from "@/components/catalog/features/CatalogNavigation"
import { getAllCategoryTerms, getRootCategories } from "@/lib/api/taxonomy"

export default async function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Suspense fallback={<NavigationSkeleton />}>
        <CatalogNavigationWrapper />
      </Suspense>
      <main className="mx-4">{children}</main>
    </div>
  )
}

async function CatalogNavigationWrapper() {
  const allTerms = await getAllCategoryTerms()
  const rootCategories = getRootCategories(allTerms)

  return <CatalogNavigation categories={rootCategories} />
}

function NavigationSkeleton() {
  return (
    <div className="border-b">
      <div className="container mx-auto whitespace-nowrap py-2 overflow-hidden">
        <div className="flex space-x-4 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-6 bg-gray-200 rounded w-24"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
