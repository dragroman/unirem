import { NextDrupal, DataCache } from "next-drupal"
import Redis from "ioredis"

// Инициализируем Redis клиент с URL из переменных окружения
// Убедитесь, что в .env.local добавлена переменная REDIS_URL
const redis = new Redis(process.env.REDIS_URL || "redis:///shared-redis:6379")

// Создаем интерфейс кэша для next-drupal
export const redisCache: DataCache = {
  async set(key, value) {
    // Сохраняем значение в Redis с TTL (время жизни) 1 час (3600 секунд)
    return await redis.set(key, value, "EX", 3600)
  },

  async get(key) {
    return await redis.get(key)
  },
}

// Вспомогательные функции для управления поисковым кэшем

// Время жизни кэша поиска (20 минут)
const SEARCH_CACHE_TTL = 1200

/**
 * Генерирует ключ кэша для поискового запроса
 */
export function generateSearchCacheKey(params: Record<string, any>): string {
  // Сортируем ключи для консистентности
  const sortedParams = Object.keys(params)
    .sort()
    .reduce(
      (result, key) => {
        result[key] = params[key]
        return result
      },
      {} as Record<string, any>
    )

  // Создаем строковое представление параметров
  return `search:${JSON.stringify(sortedParams)}`
}

/**
 * Сохраняет результаты поиска в кэш
 */
export async function cacheSearchResults(
  key: string,
  results: any
): Promise<void> {
  await redis.set(key, JSON.stringify(results), "EX", SEARCH_CACHE_TTL)
}

/**
 * Получает результаты поиска из кэша
 */
export async function getCachedSearchResults(key: string): Promise<any | null> {
  const cached = await redis.get(key)
  if (!cached) return null

  try {
    return JSON.parse(cached)
  } catch (error) {
    console.error("Ошибка при парсинге кэшированных данных:", error)
    return null
  }
}

// Экспортируем redis клиент для использования в других модулях
export { redis }
