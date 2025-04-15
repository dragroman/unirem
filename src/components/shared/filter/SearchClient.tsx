"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import { Search, Filter as FilterIcon, Loader2 } from "lucide-react"
import { Category } from "@/types/term"
import { FilterGroup } from "./filter-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import CatalogItemTeaser from "../catalog/CatalogItemTeaser"
import { CatalogItem } from "../catalog/types"

interface SearchClientProps {
  initialCategories: Category[]
  initialSubCategories: Category[]
}

interface SearchMeta {
  count?: number
  next?: string | null
  previous?: string | null
}

// Функция debounce
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default function SearchClient({
  initialCategories = [],
  initialSubCategories = [],
}: SearchClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  )
  const [results, setResults] = useState<CatalogItem[]>([])
  const [meta, setMeta] = useState<SearchMeta>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)

  // Применение debounce к поисковому запросу
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const performSearch = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchTerm: debouncedSearchTerm,
          categories: selectedCategories,
          subcategories: selectedSubCategories,
          page,
          limit: 10,
        }),
      })

      if (!response.ok) {
        throw new Error("Ошибка при выполнении поиска")
      }

      const data = await response.json()
      setResults(data.results)
      setMeta(data.meta)
    } catch (err) {
      setError((err as Error).message || "Произошла неизвестная ошибка")
      setResults([])
      setMeta({})
    } finally {
      setLoading(false)
    }
  }, [debouncedSearchTerm, selectedCategories, selectedSubCategories, page])

  // Эффект для выполнения поиска при изменении debounced-значений
  useEffect(() => {
    if (
      debouncedSearchTerm ||
      selectedCategories.length > 0 ||
      selectedSubCategories.length > 0
    ) {
      performSearch()
    }
  }, [
    debouncedSearchTerm,
    performSearch,
    selectedCategories.length,
    selectedSubCategories.length,
  ])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(1)
    // Поиск запустится автоматически через useEffect
  }

  const handleCategoryChange = (value: string, checked: boolean) => {
    setPage(1) // Сбрасываем страницу при изменении фильтров
    if (checked) {
      setSelectedCategories((prev) => [...prev, value])
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== value))
    }
  }

  const handleSubCategoryChange = (value: string, checked: boolean) => {
    setPage(1) // Сбрасываем страницу при изменении фильтров
    if (checked) {
      setSelectedSubCategories((prev) => [...prev, value])
    } else {
      setSelectedSubCategories((prev) =>
        prev.filter((subcategory) => subcategory !== value)
      )
    }
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategories([])
    setSelectedSubCategories([])
    setPage(1)
    setResults([])
    setMeta({})
  }

  const loadMoreResults = () => {
    setPage((prevPage) => prevPage + 1)
  }

  // Определяем, показывать ли сообщение о загрузке или пустых результатах
  const showEmptyMessage =
    searchTerm ||
    selectedCategories.length > 0 ||
    selectedSubCategories.length > 0

  return (
    <div className="w-full space-y-6">
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <form onSubmit={handleSearch} className="space-y-3">
            <div className="relative">
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск статей..."
                className="pl-10"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={18}
              />
            </div>

            <div className="flex items-center justify-between">
              <Button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                variant="ghost"
                size="sm"
                className="text-sm"
              >
                <FilterIcon size={16} className="mr-1.5" />
                {showFilters ? "Скрыть фильтры" : "Показать фильтры"}
              </Button>

              <Button type="submit" size="sm" disabled={loading}>
                {loading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Search className="w-4 h-4 mr-2" />
                )}
                Поиск
              </Button>
            </div>
          </form>
        </CardHeader>
      </Card>

      {/* New layout structure */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left sidebar with filters */}
        <div className="md:col-span-1">
          <div>
            <Button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              variant="ghost"
              size="sm"
              className="text-sm md:hidden"
            >
              <FilterIcon size={16} className="mr-1.5" />
              {showFilters ? "Скрыть фильтры" : "Показать фильтры"}
            </Button>
          </div>
          <div className={showFilters ? "block" : "hidden md:block"}>
            <FilterGroup
              categories={initialCategories}
              subCategories={initialSubCategories}
              selectedCategories={selectedCategories}
              selectedSubCategories={selectedSubCategories}
              onCategoryChange={handleCategoryChange}
              onSubCategoryChange={handleSubCategoryChange}
              onClearFilters={clearFilters}
            />
          </div>
        </div>

        {/* Right side with results */}
        <div className="md:col-span-3">
          <div className="space-y-4">
            {error && (
              <div className="p-4 bg-red-50 text-red-800 rounded-md border border-red-200">
                {error}
              </div>
            )}

            {results.length > 0 ? (
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Найдено результатов: {meta.count || results.length}
                </p>

                <div className="grid grid-cols-4 gap-4">
                  {results.map((item) => (
                    <CatalogItemTeaser key={item.id} item={item} />
                  ))}
                </div>

                {meta.next && (
                  <div className="flex justify-center mt-6">
                    <Button
                      onClick={loadMoreResults}
                      disabled={loading}
                      variant="outline"
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Загрузка...
                        </span>
                      ) : (
                        "Загрузить еще"
                      )}
                    </Button>
                  </div>
                )}
              </div>
            ) : showEmptyMessage ? (
              loading ? (
                <div className="flex justify-center items-center p-8">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  <span className="ml-2">Поиск...</span>
                </div>
              ) : (
                <Card className="bg-muted/40">
                  <CardContent className="p-8 text-center">
                    <p className="text-lg text-muted-foreground">
                      Ничего не найдено. Попробуйте изменить параметры поиска.
                    </p>
                  </CardContent>
                </Card>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
