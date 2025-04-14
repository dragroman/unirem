import CatalogItemTeaser from "./CatalogItemTeaser"
import { CatalogListProps } from "./types"

export default function CatalogList({ items }: CatalogListProps) {
  return (
    <>
      {items?.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item) => (
            <CatalogItemTeaser key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="py-4">Материалы не найдены</p>
      )}
    </>
  )
}
