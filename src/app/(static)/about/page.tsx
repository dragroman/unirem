import Image from "next/image"
import { Button } from "@/components/ui/button"
import { createPageMetadata, getPageContent } from "@/data/pageContent"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/shared/PageHero"

export function generateMetadata() {
  return createPageMetadata("about")
}

export default function AboutPage() {
  const pageContent = getPageContent("about")
  if (!pageContent) {
    notFound()
  }
  return (
    <main className="flex min-h-screen flex-col">
      <PageHero
        title={pageContent.title}
        description={pageContent.description}
      />

      {/* Информация о компании */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Компания &quot;Универсал ремстрой&quot;
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                &quot;Универсал ремстрой&quot; – это надежный партнер в сфере
                строительства и ремонта, предоставляющий полный комплекс услуг
                от разработки дизайн-проекта до финальных отделочных работ.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Мы работаем на российском рынке с особым фокусом на
                Дальневосточный регион, постепенно расширяя географию своей
                деятельности и выходя на международный уровень.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                <Button className="bg-emerald-700 hover:bg-emerald-600">
                  Наши проекты
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-700 text-emerald-700 hover:bg-emerald-50"
                >
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about/about.png"
                alt="Универсал ремстрой"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
