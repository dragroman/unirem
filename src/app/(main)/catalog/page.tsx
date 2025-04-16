import CatalogList from "@/components/shared/catalog/CatalogList"
import { drupal } from "@/lib/drupal"
import { DrupalNode, DrupalTaxonomyTerm } from "next-drupal"
import Link from "next/link"

interface CategoryItem extends DrupalTaxonomyTerm {
  field_teaser_text?: string
}

export default async function CatalogPage() {
  // Получаем родительские категории (без родителя)
  const parentCategories = await drupal.getResourceCollection<CategoryItem[]>(
    "taxonomy_term--category",
    {
      params: {
        "fields[taxonomy_term--category]": "name,drupal_internal__tid,parent",
        "filter[status]": "1",
        sort: "weight",
      },
    }
  )

  const filteredCategories = parentCategories.filter(
    (category) => category.parent && category.parent[0]?.id === "virtual"
  )

  // Получаем последние материалы для отображения
  const materials = await drupal.getResourceCollection<DrupalNode[]>(
    "node--material",
    {
      params: {
        "filter[status]": "1",
        sort: "-created",
        "page[limit]": "6",
        "fields[node--material]":
          "title,path,field_image,created,body,drupal_internal__nid",
        include: "field_image",
      },
    }
  )

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Каталог</h1>

      {/* Родительские категории */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Категории</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <Link
              href={`/catalog/${category.drupal_internal__tid}`}
              key={category.drupal_internal__tid}
              className="bg-white hover:shadow-lg transition-shadow p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              {category.field_teaser_text && (
                <p className="text-gray-600 mb-3">
                  {category.field_teaser_text}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Последние материалы */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Последние материалы</h2>
        <CatalogList items={materials} />
      </section>
    </div>
  )
}
