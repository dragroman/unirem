import CatalogItemTeaser from "@/components/shared/catalog/CatalogItemTeaser"
import { drupal } from "@/lib/drupal"
import { DrupalNode } from "next-drupal"
import Breadcrumbs from "@/components/shared/catalog/Breadcrumbs"
import { getAllCategoryTerms, getParentTermById } from "@/lib/taxonomy-service"
import { notFound } from "next/navigation"

export default async function TermCategoryPage({
  params,
}: {
  params: Promise<{ termId: string; parentTerm: string }>
}) {
  const { termId, parentTerm } = await params

  const allTerms = await getAllCategoryTerms()
  const currentTerm = getParentTermById(allTerms, termId)
  const parentTermInfo = getParentTermById(allTerms, parentTerm)

  // Check if either term doesn't exist
  if (!currentTerm || !parentTermInfo) {
    notFound()
  }

  const materials = await drupal.getResourceCollection<DrupalNode[]>(
    "node--material",
    {
      params: {
        "fields[node--material]":
          "title,field_image,field_category,drupal_internal__nid,field_vendor_code",
        "filter[status]": "1",
        "filter[field_category.drupal_internal__tid]": termId,
        include: "field_image",
      },
    }
  )

  // Prepare the term data in the format expected by Breadcrumbs
  const termData = {
    field_category: {
      name: currentTerm.name,
      drupal_internal__tid: currentTerm.drupal_internal__tid.toString(),
    },
  }

  return (
    <div className="container mx-auto py-8">
      <Breadcrumbs
        parentTerm={{
          name: parentTermInfo.name,
          drupal_internal__tid: parentTermInfo.drupal_internal__tid.toString(),
        }}
        term={termData}
      />
      <h1 className="text-2xl font-bold mb-6">{currentTerm.name}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {materials.length > 0 ? (
          materials.map((item) => (
            <CatalogItemTeaser key={item.id} item={item} />
          ))
        ) : (
          <p>Материалов не найдено</p>
        )}
      </div>
    </div>
  )
}
