import CatalogHeader from "@/components/shared/catalog/CatalogHeader"
import { getAllCategoryTerms, getRootTerms } from "@/lib/taxonomy-service"
import { ReactNode } from "react"

export default async function CatalogLayout({
  children,
}: {
  children: ReactNode
}) {
  const allTerms = await getAllCategoryTerms()
  const rootCategories = getRootTerms(allTerms)

  return (
    <div>
      <CatalogHeader items={rootCategories} />
      <main className="mx-4">{children}</main>
    </div>
  )
}
