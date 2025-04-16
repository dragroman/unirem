import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ParentTerm, Term } from "./types"

export default function Breadcrumbs({
  parentTerm,
  term,
  currentPage,
}: {
  parentTerm?: ParentTerm
  term?: Term
  currentPage?: string
}) {
  return (
    <Breadcrumb className="mb-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Главная</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/catalog">Каталог</BreadcrumbLink>
        </BreadcrumbItem>
        {/* Add parent term */}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {parentTerm && (
            <BreadcrumbLink
              href={`/catalog/${parentTerm.drupal_internal__tid}`}
            >
              {parentTerm.name}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {/* Add current term if it exists */}
        {term && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/catalog/${parentTerm ? parentTerm.drupal_internal__tid : ""}/${term.field_category.drupal_internal__tid}`}
                aria-current="page"
              >
                {term.field_category.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {currentPage && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{currentPage}</BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
