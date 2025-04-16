// src/components/catalog/templates/CatalogTemplate.tsx
import React from "react"
import { Category } from "@/types/taxonomy"
import { Material } from "@/types/material"
import { CategoryList } from "../features/CategoryList"
import { CatalogGrid } from "../ui/CatalogGrid"
import { CatalogBreadcrumbs } from "../ui/CatalogBreadcrumbs"
import { BreadcrumbItem } from "@/types/catalog"

interface CatalogTemplateProps {
  title: string
  description?: string
  categories: Category[]
  recentMaterials: Material[]
  breadcrumbs?: BreadcrumbItem[]
}

export function CatalogTemplate({
  title,
  description,
  categories,
  recentMaterials,
  breadcrumbs,
}: CatalogTemplateProps) {
  return (
    <div className="container mx-auto py-8">
      {breadcrumbs && <CatalogBreadcrumbs items={breadcrumbs} />}

      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      {description && <p className="text-gray-600 mb-6">{description}</p>}

      {/* Родительские категории */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Категории</h2>
        <CategoryList categories={categories} />
      </section>

      {/* Последние материалы */}
      {recentMaterials.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Последние материалы</h2>
          <CatalogGrid items={recentMaterials} columns={6} />
        </section>
      )}
    </div>
  )
}
