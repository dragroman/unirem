import { absoluteUrl } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { CatalogItemTeaserProps } from "./types"

export default function CatalogItemTeaser({ item }: CatalogItemTeaserProps) {
  return (
    <Link
      href={`/catalog/${item.drupal_internal__nid}`}
      key={item.id}
      className="bg-white hover:shadow-lg transition-shadow"
    >
      <div className="relative h-[200px] w-full mb-4">
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
      <div className=" font-semibold mb-2">{item.title}</div>
      {item.field_preview_text && (
        <p className="text-gray-600 mb-4">{item.field_preview_text}</p>
      )}
    </Link>
  )
}
