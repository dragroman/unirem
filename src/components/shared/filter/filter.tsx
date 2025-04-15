"use client"

import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Category } from "@/types/term"

interface FilterProps {
  title: string
  items: Category[]
  selectedItems: string[]
  onChange: (value: string, checked: boolean) => void
}

export function Filter({ title, items, selectedItems, onChange }: FilterProps) {
  return (
    <div className="space-y-3 bg-blue-50 p-4 rounded-xl">
      <h3 className="font-medium text-sm">{title}</h3>
      <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox
              id={`${title.toLowerCase()}-${item.id}`}
              checked={selectedItems.includes(item.id)}
              onCheckedChange={(checked) =>
                onChange(item.id, checked as boolean)
              }
            />
            <Label
              htmlFor={`${title.toLowerCase()}-${item.id}`}
              className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.name}
            </Label>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Нет доступных {title.toLowerCase()}
          </p>
        )}
      </div>
    </div>
  )
}
