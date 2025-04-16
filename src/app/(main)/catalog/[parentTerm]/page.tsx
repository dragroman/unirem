import { Suspense } from "react"
import { drupal } from "@/lib/drupal"
import { DrupalNode, DrupalTaxonomyTerm } from "next-drupal"
import Link from "next/link"
import {
  getAllCategoryTerms,
  getParentTermById,
  getChildTermsByParentId,
} from "@/lib/taxonomy-service"
import { notFound } from "next/navigation"

export interface CatalogItem extends DrupalTaxonomyTerm {
  field_teaser_text?: string
}

async function CatalogContent({ parentTerm }: { parentTerm: string }) {
  const allTerms = await getAllCategoryTerms()
  const currentTerm = getParentTermById(allTerms, parentTerm)

  if (!currentTerm) {
    notFound()
  }

  const category = await drupal.getResourceCollection<CatalogItem[]>(
    "taxonomy_term--category",
    {
      params: {
        "fields[taxonomy_term--category]":
          "name,field_teaser_text,drupal_internal__tid,parent",
        "filter[status]": "1",
        "filter[parent.drupal_internal__tid]": parentTerm,
      },
    }
  )

  const categoryWithCount = await Promise.all(
    category.map(async (panel) => {
      const materials = await drupal.getResourceCollection<DrupalNode[]>(
        "node--material",
        {
          params: {
            "filter[status]": "1",
            "filter[field_category.drupal_internal__tid]":
              panel.drupal_internal__tid,
          },
        }
      )
      return {
        ...panel,
        hasItems: materials.length > 0,
        itemCount: materials.length,
      }
    })
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categoryWithCount.map((item) => (
        <Link
          href={`/catalog/${parentTerm}/${item.drupal_internal__tid}`}
          key={item.drupal_internal__tid}
        >
          <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>{item.field_teaser_text}</p>
            {item.hasItems ? (
              <p className="text-gray-600">Материалов: {item.itemCount}</p>
            ) : (
              <p className="text-gray-500 text-sm mt-2">Нет материалов</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default async function CatalogByParentTerm({
  params,
}: {
  params: Promise<{ parentTerm: string }>
}) {
  const { parentTerm } = await params
  const allTerms = await getAllCategoryTerms()
  const currentTerm = getParentTermById(allTerms, parentTerm)

  if (!currentTerm) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">
        {currentTerm?.name || "Категория"}
      </h1>

      <CatalogContent parentTerm={parentTerm} />
    </div>
  )
}
