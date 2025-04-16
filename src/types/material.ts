import { JsonApiResource } from "next-drupal"

// src/types/material.ts
export interface Material extends JsonApiResource {
  id: string
  drupal_internal__nid: number
  title: string
  field_vendor_code?: string
  field_preview_text?: string
  field_image?: {
    uri: {
      url: string
    }
  }[]
  field_category?: {
    drupal_internal__tid: number
    name: string
  }
  field_technical_description?: string
  field_color?: string
  field_length?: string
  field_thickness?: string
  field_width?: string
  field_material?: string
  field_surface?: string
  field_texture?: string
  field_price?: string
  field_price_m2?: string
  field_size?: string
  field_delivery_time?: string
  field_inventory?: string
  body?: {
    processed: string
  }
}
