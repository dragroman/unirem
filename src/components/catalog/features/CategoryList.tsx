// src/components/catalog/features/CategoryList.tsx
import React from "react"
import { Category } from "@/types/taxonomy"
import { CategoryCard } from "../ui/CategoryCard"

interface CategoryListProps {
  categories: Category[]
  parentCategoryId?: string | number
  className?: string
  columns?: 2 | 3 | 4
  emptyMessage?: string
}

export function CategoryList({
  categories,
  parentCategoryId,
  className = "",
  columns = 3,
  emptyMessage = "Категории не найдены",
}: CategoryListProps) {
  const columnsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns]

  if (!categories?.length) {
    return <p className="py-4">{emptyMessage}</p>
  }

  return (
    <div className={`grid ${columnsClass} gap-6 ${className}`}>
      {categories.map((category) => (
        <CategoryCard
          key={category.drupal_internal__tid}
          category={category}
          parentCategoryId={parentCategoryId}
        />
      ))}
    </div>
  )
}
