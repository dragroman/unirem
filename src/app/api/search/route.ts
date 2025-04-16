import { NextResponse } from "next/server"
import { drupal } from "@/lib/drupal"
import {
  generateSearchCacheKey,
  getCachedSearchResults,
  cacheSearchResults,
} from "@/lib/redis"
import type { DrupalNode } from "next-drupal"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { searchTerm, categories, subcategories, page = 1, limit = 10 } = body

    // Базовые параметры запроса
    const params: Record<string, any> = {
      "page[limit]": limit,
      "page[offset]": (page - 1) * limit,
    }

    // Добавляем поисковый запрос, если он есть
    if (searchTerm) {
      params["filter[fulltext]"] = searchTerm
    }

    // Добавляем фильтры по категории
    if (categories?.length) {
      params["filter[category][condition][path]"] = "field_category"
      params["filter[category][condition][operator]"] = "IN"
      params["filter[category][condition][value]"] = categories
    }

    // Добавляем фильтры по тегам/подкатегориям
    if (subcategories?.length) {
      params["filter[tags][condition][path]"] = "field_category_ext"
      params["filter[tags][condition][operator]"] = "IN"
      params["filter[tags][condition][value]"] = subcategories
    }

    // Генерируем ключ кэша на основе всех параметров запроса
    const cacheKey = generateSearchCacheKey({
      searchTerm,
      categories,
      subcategories,
      page,
      limit,
    })

    // Проверяем наличие результатов в кэше
    const cachedResults = await getCachedSearchResults(cacheKey)
    if (cachedResults) {
      return NextResponse.json(cachedResults)
    }

    // Получаем результаты из Search API
    const rawResults = await drupal.getSearchIndex<DrupalNode>("default", {
      params,
      deserialize: false,
      cache: "force-cache",
      next: {
        revalidate: 1200,
      },
    })

    // Создаем словарь включенных ресурсов для более легкого доступа
    const includedMap = new Map()
    if (rawResults.included) {
      rawResults.included.forEach((item: any) => {
        includedMap.set(`${item.type}:${item.id}`, item)
      })
    }

    const results =
      rawResults.data?.map((item: any) => {
        // Получаем данные из категории
        const category = item.relationships?.field_category?.data

        return {
          id: item.id,
          drupal_internal__nid: item.attributes?.drupal_internal__nid,
          title: item.attributes?.title,
          path: item.attributes?.path,
          created: item.attributes?.created,
          field_image: item.attributes?.field_image || null,
          field_category: category
            ? {
                category_id: category.meta?.drupal_internal__target_id,
              }
            : null,
        }
      }) || []

    const responseData = {
      results: results || [],
      meta: {
        count: rawResults.meta?.count,
        next: rawResults.links?.next ? true : false,
        total: rawResults.meta?.count || results.length,
      },
    }

    // Сохраняем результаты в Redis кэше
    await cacheSearchResults(cacheKey, responseData)

    // Возвращаем результаты
    return NextResponse.json(responseData)
  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json(
      { error: "Ошибка при выполнении поиска" },
      { status: 500 }
    )
  }
}
