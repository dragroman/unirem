// src/components/shared/catalog/types.ts
export interface CatalogItemTeaserProps {
  item: CatalogItem
}

export interface CatalogListProps {
  items: CatalogItem[]
}

export interface CatalogItem {
  id: string
  drupal_internal__nid: number
  title: string
  field_preview_text?: string
  field_category?: {
    drupal_internal__tid: number
    name: string
  }
  field_image?: Array<{
    uri: {
      url: string
    }
  }>
}
