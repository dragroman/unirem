import { PageHero } from "@/components/shared/PageHero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createPageMetadata, getPageContent } from "@/data/pageContent"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateMetadata() {
  return createPageMetadata("helpManual")
}
export default function Page() {
  const pageContent = getPageContent("helpManual")
  if (!pageContent) {
    notFound()
  }
  return (
    <div className="max-w-none">
      <PageHero
        title={pageContent.title}
        description={pageContent.description}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>
                <Link
                  href="/help/manual/anti-corrosion"
                  className="hover:text-primary transition-colors"
                >
                  Антикоррозийная обработка винтов
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Пошаговое руководство по антикоррозийной обработке винтов и
                последующим этапам работы
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Link
                  href="/help/manual/ceiling-installation"
                  className="hover:text-primary transition-colors"
                >
                  Установка потолков
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Пошаговое руководство по установке потолков с использованием
                профессиональных инструментов
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Link
                  href="/help/manual/plumbing-electrical"
                  className="hover:text-primary transition-colors"
                >
                  Сантехнические и электромонтажные работы
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Руководство по проведению сантехнических и электромонтажных
                работ
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Link
                  href="/help/manual/tile-laying"
                  className="hover:text-primary transition-colors"
                >
                  Укладка плитки
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Инструкция по правильной укладке плитки</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
