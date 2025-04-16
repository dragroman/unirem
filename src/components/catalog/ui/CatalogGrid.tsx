// src/components/catalog/ui/CatalogGrid.tsx
import React from "react"
import { Material } from "@/types/material"
import { CatalogCard } from "./CatalogCard"

interface CatalogGridProps {
  items: Material[]
  columns?: 2 | 3 | 4 | 5 | 6
  className?: string
  emptyMessage?: string
}

export function CatalogGrid({
  items,
  columns = 6,
  className = "",
  emptyMessage = "Материалы не найдены",
}: CatalogGridProps) {
  const columnsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  }[columns]

  if (!items?.length) {
    return <p className="py-4">{emptyMessage}</p>
  }

  return (
    <div className={`grid ${columnsClass} gap-4 ${className}`}>
      {items.map((item) => (
        <CatalogCard key={item.id} item={item} />
      ))}
    </div>
  )
}
