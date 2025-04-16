// src/types/taxonomy.ts
export interface Category {
  id: string
  drupal_internal__tid: number
  name: string
  parent?: {
    drupal_internal__tid: any
    id: string
  }[]
  field_teaser_text?: string
}

export interface CategoryHierarchy {
  root: Category[]
  children: Record<string, Category[]>
}
