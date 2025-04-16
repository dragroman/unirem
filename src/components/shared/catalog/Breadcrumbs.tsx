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
}: {
  parentTerm: ParentTerm
  term: Term
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
        {/* Добавляем родительский термин, если он есть */}
        {parentTerm && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/catalog/${parentTerm.drupal_internal__tid}`}
              >
                {parentTerm.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbLink
            href={`/catalog/${parentTerm.drupal_internal__tid}/${term.field_category.drupal_internal__tid}`}
          >
            {term.field_category.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
