// src/components/catalog/ui/CatalogCard.tsx
import React, { Suspense } from "react"
import Link from "next/link"
import { Material } from "@/types/material"
import CatalogCardImage from "./CatalogCardImage"

interface CatalogCardProps {
  item: Material
  className?: string
}

export default function CardSkeleton() {
  return (
    <div className="animate-pulse bg-gray-200 h-full w-full rounded-t-lg"></div>
  )
}

export function CatalogCard({ item }: CatalogCardProps) {
  return (
    <Link href={`/catalog/item/${item.drupal_internal__nid}`}>
      <div className="overflow-hidden w-full max-w-sm transition-all hover:shadow-lg active:shadow-sm border border-gray-100">
        <div className="relative aspect-[16/9] w-full">
          {item.field_image ? (
            <Suspense fallback={<CardSkeleton />}>
              <CatalogCardImage
                src={item.field_image[0].uri.url}
                alt={item.title}
              />
            </Suspense>
          ) : (
            <div className="bg-gray-200 h-full w-full"></div>
          )}
        </div>
        <div className="p-2">
          <div>
            <div className="text-sm font-semibold">{item.title}</div>
          </div>
          <div>
            {item.field_vendor_code && (
              <p className="text-gray-600 text-xs">{item.field_vendor_code}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
