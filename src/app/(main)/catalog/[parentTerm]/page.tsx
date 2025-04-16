import { drupal } from "@/lib/drupal"
import { DrupalNode, DrupalTaxonomyTerm } from "next-drupal"
import Link from "next/link"
import {
  getAllCategoryTerms,
  getParentTermById,
  getChildTermsByParentId,
} from "@/lib/taxonomy-service"
import { notFound } from "next/navigation"
import CatalogItemTeaser from "@/components/shared/catalog/CatalogItemTeaser"
import CatalogList from "@/components/shared/catalog/CatalogList"

export interface CatalogItem extends DrupalTaxonomyTerm {
  field_teaser_text?: string
}

async function CatalogContent({ parentTerm }: { parentTerm: string }) {
  const allTerms = await getAllCategoryTerms()
  const currentTerm = getParentTermById(allTerms, parentTerm)

  if (!currentTerm) {
    notFound()
  }

  // Get child categories
  const childCategories = await drupal.getResourceCollection<CatalogItem[]>(
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

  // If there are child categories, display them
  if (childCategories && childCategories.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {childCategories.map((item) => (
          <Link
            href={`/catalog/${parentTerm}/${item.drupal_internal__tid}`}
            key={item.drupal_internal__tid}
          >
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              {item.field_teaser_text && (
                <p className="text-gray-600 mt-2">{item.field_teaser_text}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    )
  }

  // If no child categories, display materials for this category
  const materials = await drupal.getResourceCollection<DrupalNode[]>(
    "node--material",
    {
      params: {
        "fields[node--material]":
          "title,field_image,field_category,drupal_internal__nid,field_vendor_code",
        "filter[status]": "1",
        "filter[field_category.drupal_internal__tid]": parentTerm,
        include: "field_image",
      },
    }
  )

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Материалы</h2>
      {materials.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {materials.map((item) => (
            <CatalogItemTeaser key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="py-4">Материалов не найдено</p>
      )}
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
