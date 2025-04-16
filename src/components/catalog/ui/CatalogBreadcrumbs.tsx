import React from "react"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BreadcrumbItem as BreadcrumbItemType } from "@/types/catalog"

interface CatalogBreadcrumbsProps {
  items: BreadcrumbItemType[]
  className?: string
}

export function CatalogBreadcrumbs({
  items,
  className = "",
}: CatalogBreadcrumbsProps) {
  return (
    <Breadcrumb className={`mb-4 text-sm ${className}`}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {item.isCurrentPage ? (
                <span className="font-medium text-foreground">{item.name}</span>
              ) : (
                <BreadcrumbLink href={item.url}>{item.name}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
