"use client"
import Link from "next/link"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const catalogMenu = [
  {
    title: "Фасадные панели",
    href: "/catalog/panels",
  },
  {
    title: "Кровля",
    href: "/catalog/roof",
  },
  {
    title: "Напольные покрытия",
    href: "/catalog/",
  },
  {
    title: "Плиты",
    href: "/catalog/tiles",
  },
  {
    title: "Тепло и звукоизоляция",
    href: "/catalog/tiles",
  },
  {
    title: "Шпаклевочные материалы",
    href: "/catalog/tiles",
  },
]

export default function CatalogHeader() {
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

  return (
    <div className="border-b" ref={containerRef}>
      <ScrollArea
        className={cn(
          "container mx-auto whitespace-nowrap relative pr-8",
          canScrollLeft && "pl-8",
          canScrollRight && "pr-8"
        )}
        onScrollCapture={checkScroll}
      >
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-sm p-2 rounded-full hover:bg-gray-50 z-10"
          >
            <ChevronLeft size={12} className="text-primary" />
          </button>
        )}
        <div className="flex flex-row space-x-4">
          {catalogMenu.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm uppercase text-gray-800 hover:text-slate-400 font-semibold"
            >
              {item.title}
            </Link>
          ))}
        </div>
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-sm p-2 rounded-full hover:bg-gray-50 z-10"
          >
            <ChevronRight size={12} className="text-primary" />
          </button>
        )}
      </ScrollArea>
    </div>
  )
}
