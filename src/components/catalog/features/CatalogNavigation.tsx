// src/components/catalog/features/CatalogNavigation.tsx
"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Category } from "@/types/taxonomy"

interface CatalogNavigationProps {
  categories: Category[]
  className?: string
}

export function CatalogNavigation({
  categories,
  className = "",
}: CatalogNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    if (containerRef.current) {
      const scrollArea = containerRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      ) as HTMLElement

      if (scrollArea) {
        setCanScrollLeft(scrollArea.scrollLeft > 0)
        setCanScrollRight(
          scrollArea.scrollLeft <
            scrollArea.scrollWidth - scrollArea.clientWidth
        )
      }
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scrollRight = () => {
    if (containerRef.current) {
      const scrollArea = containerRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      )
      if (scrollArea) {
        scrollArea.scrollBy({ left: 200, behavior: "smooth" })
        setTimeout(checkScroll, 100)
      }
    }
  }

  const scrollLeft = () => {
    if (containerRef.current) {
      const scrollArea = containerRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      )
      if (scrollArea) {
        scrollArea.scrollBy({ left: -200, behavior: "smooth" })
        setTimeout(checkScroll, 100)
      }
    }
  }

  const scrollButtonClasses =
    "absolute top-1/2 -translate-y-1/2 bg-primary/5 shadow-md p-2 rounded-full hover:bg-gray-50 z-10"

  return (
    <div className={`border-b relative ${className}`} ref={containerRef}>
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className={`${scrollButtonClasses} left-2`}
          aria-label="Прокрутить влево"
        >
          <ChevronLeft size={12} className="text-primary" />
        </button>
      )}
      <ScrollArea
        className={cn(
          "container mx-auto whitespace-nowrap",
          canScrollLeft && "pl-10",
          canScrollRight && "pr-10"
        )}
        onScrollCapture={checkScroll}
      >
        <div className="flex flex-row space-x-2">
          {categories.map((category) => (
            <Link
              key={category.drupal_internal__tid}
              href={`/catalog/${category.drupal_internal__tid.toString()}`}
              className="px-2 py-2 text-sm uppercase text-gray-800 hover:text-slate-400 font-semibold"
            >
              {category.name}
            </Link>
          ))}
        </div>
        <ScrollBar className="hidden" orientation="horizontal" />
      </ScrollArea>
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className={`${scrollButtonClasses} right-2`}
          aria-label="Прокрутить вправо"
        >
          <ChevronRight size={12} className="text-primary" />
        </button>
      )}
    </div>
  )
}
