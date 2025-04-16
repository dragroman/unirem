// src/types/catalog.ts
import { Category } from "./taxonomy"
import { Material } from "./material"

export interface CatalogSearchParams {
  searchTerm?: string
  categories?: string[]
  subcategories?: string[]
  page?: number
  limit?: number
}

export interface CatalogSearchResponse {
  results: Material[]
  meta: {
    count?: number
    next?: boolean
    total?: number
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
  isCurrentPage?: boolean
}

export interface FilterOption {
  id: string
  name: string
  count?: number
}
