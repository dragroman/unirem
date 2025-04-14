import CatalogList from "@/components/shared/catalog/CatalogList"
import { drupal } from "@/lib/drupal"
import { DrupalNode } from "next-drupal"

export default async function CatalogPage() {
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
    <div>
      <h1>Каталог</h1>
      <p>Список товаров</p>
      <CatalogList items={materials} />
    </div>
  )
}
