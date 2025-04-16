// src/components/catalog/ui/CategoryCard.tsx
import React from "react"
import Link from "next/link"
import { Category } from "@/types/taxonomy"

interface CategoryCardProps {
  category: Category
  parentCategoryId?: string | number
  className?: string
}

export function CategoryCard({
  category,
  parentCategoryId,
  className = "",
}: CategoryCardProps) {
  // Формируем URL с учетом родительской категории, если она есть
  const url = parentCategoryId
    ? `/catalog/${parentCategoryId}/${category.drupal_internal__tid}`
    : `/catalog/${category.drupal_internal__tid}`

  return (
    <Link
      href={url}
      className={`bg-white hover:shadow-lg transition-shadow p-6 rounded-lg border border-gray-200 block ${className}`}
    >
      <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
      {category.field_teaser_text && (
        <p className="text-gray-600 text-sm">{category.field_teaser_text}</p>
      )}
    </Link>
  )
}
