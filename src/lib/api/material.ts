// src/lib/api/material.ts
import { drupal } from "@/lib/drupal"
import { Material } from "@/types/material"

/**
 * Получить список материалов по ID категории
 */
export async function getMaterialsByCategory(categoryId: string) {
  return await drupal.getResourceCollection<Material[]>("node--material", {
    params: {
      "fields[node--material]":
        "title,field_image,field_category,drupal_internal__nid,field_vendor_code,field_preview_text",
      "filter[status]": "1",
      "filter[field_category.drupal_internal__tid]": categoryId,
      include: "field_image",
    },
  })
}

/**
 * Получить информацию о материале по ID
 */
export async function getMaterialById(materialId: string) {
  return await drupal.getResourceByPath<Material>(`/item/${materialId}`, {
    params: {
      "fields[node--material]":
        "title,field_image,field_vendor_code,field_brand,field_color,field_image,field_category,field_technical_description,field_length,field_thickness,field_width,field_material,field_surface,field_texture,body",
      include: "field_image,uid,field_category,field_category.parent",
    },
  })
}

/**
 * Получить последние материалы
 */
export async function getRecentMaterials(limit: number = 6) {
  return await drupal.getResourceCollection<Material[]>("node--material", {
    params: {
      "filter[status]": "1",
      sort: "-created",
      "page[limit]": limit.toString(),
      "fields[node--material]":
        "title,path,field_image,created,body,drupal_internal__nid,field_vendor_code",
      include: "field_image",
    },
  })
}
