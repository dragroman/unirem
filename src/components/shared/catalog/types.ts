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
  field_image?: Array<{
    uri: {
      url: string
    }
  }>
}
