import CatalogHeader from "@/components/catalog/CatalogHeader"
import type { ReactNode } from "react"

export default function CatalogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <CatalogHeader />
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
