// app/advanced-search/page.tsx
import { drupal } from "@/lib/drupal"
import type { DrupalNode } from "next-drupal"
import SearchClient from "@/components/shared/filter/SearchClient"

async function fetchCategories() {
  const categories = await drupal.getResourceCollection<DrupalNode[]>(
    "taxonomy_term--category",
    {
      params: {
        "fields[taxonomy_term--category]": "name,drupal_internal__tid",
        sort: "name",
      },
      cache: "force-cache",
      next: {
        revalidate: 3600, // Обновляем категории каждый час
      },
    }
  )

  return (
    categories?.map((category) => ({
      id: category.drupal_internal__tid.toString(),
      name: category.name,
    })) || []
  )
}

async function fetchSubCategories() {
  const subcategories = await drupal.getResourceCollection<DrupalNode[]>(
    "taxonomy_term--tags",
    {
      params: {
        "fields[taxonomy_term--tags]": "name,drupal_internal__tid",
        sort: "name",
      },
      cache: "force-cache",
      next: {
        revalidate: 3600, // Обновляем теги каждый час
      },
    }
  )

  return (
    subcategories?.map((subcategory) => ({
      id: subcategory.drupal_internal__tid.toString(),
      name: subcategory.name,
    })) || []
  )
}

export default async function AdvancedSearchPage() {
  // Параллельно получаем категории и теги
  const [categories, subcategories] = await Promise.all([
    fetchCategories(),
    fetchSubCategories(),
  ])

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-2">Расширенный поиск</h1>
      <p className="text-gray-600 mb-8">
        Поиск и фильтрация контента с поддержкой тегов и категорий
      </p>

      <SearchClient
        initialCategories={categories}
        initialSubCategories={subcategories}
      />
    </div>
  )
}
