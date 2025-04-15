"use client"

import React from "react"
import { Filter } from "./filter"
import { Category } from "@/types/term"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FilterGroupProps {
  categories: Category[]
  subCategories: Category[]
  selectedCategories: string[]
  selectedSubCategories: string[]
  onCategoryChange: (value: string, checked: boolean) => void
  onSubCategoryChange: (value: string, checked: boolean) => void
  onClearFilters: () => void
}

export function FilterGroup({
  categories,
  subCategories,
  selectedCategories,
  selectedSubCategories,
  onCategoryChange,
  onSubCategoryChange,
  onClearFilters,
}: FilterGroupProps) {
  const hasFilters =
    selectedCategories.length > 0 || selectedSubCategories.length > 0

  return (
    <div className=" dark:bg-gray-800/40 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Фильтры</h2>
        {hasFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            className="h-8 text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <X className="h-3.5 w-3.5 mr-1.5" />
            Сбросить
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <Filter
          title="Категории"
          items={categories}
          selectedItems={selectedCategories}
          onChange={onCategoryChange}
        />
        <Filter
          title="Теги"
          items={subCategories}
          selectedItems={selectedSubCategories}
          onChange={onSubCategoryChange}
        />
      </div>
    </div>
  )
}
