// src/components/catalog/ui/CatalogCard.tsx
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Material } from "@/types/material"
import { absoluteUrl } from "@/lib/utils"

interface CatalogCardProps {
  item: Material
  className?: string
}

export function CatalogCard({ item, className = "" }: CatalogCardProps) {
  return (
    <Link
      href={`/catalog/item/${item.drupal_internal__nid}`}
      className={`bg-white hover:shadow-lg transition-shadow space-y-2 active:shadow-none block ${className}`}
    >
      <div className="relative h-[200px] w-full">
        {item.field_image ? (
          <Image
            src={absoluteUrl(item.field_image[0].uri.url)}
            alt={item.title || "Изображение материала"}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
          />
        ) : (
          <div className="bg-gray-200 h-full w-full"></div>
        )}
      </div>
      <div className="p-2 pt-0">
        <div className="text-sm font-semibold">{item.title}</div>
        {item.field_vendor_code && (
          <p className="text-gray-600 text-xs">{item.field_vendor_code}</p>
        )}
      </div>
    </Link>
  )
}
