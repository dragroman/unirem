import Image from "next/image"
import { Button } from "@/components/ui/button"
import { createPageMetadata, getPageContent } from "@/data/pageContent"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/shared/PageHero"
import Link from "next/link"
import { DrawerDialog } from "@/components/shared/DrawerDialogCallback"

export function generateMetadata() {
  return createPageMetadata("about")
}

const JourneyCard = ({
  title,
  content,
  isList = false,
}: {
  title: string
  content: string | string[]
  isList?: boolean
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4 text-emerald-700">{title}</h3>
    {isList ? (
      <ul className="space-y-3 text-gray-700">
        {(content as string[]).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-700">{content as string}</p>
    )}
  </div>
)

const journeyData = [
  {
    title: "30 лет опыта",
    content:
      "Более 30 лет мы успешно сотрудничаем с российскими партнерами, предоставляя качественные услуги и решения в сфере строительства и ремонта. За это время мы накопили богатый опыт и заслужили доверие сотен клиентов.",
  },
  {
    title: "Развитие и рост",
    content:
      "От локального рынка до присутствия по всей России! Сегодня мы активно осваиваем международные горизонты, открывая новые возможности для наших клиентов.",
  },
  {
    title: "Ключевые достижения",
    content:
      "Сотни реализованных проектов, надежная сеть международных поставщиков и эффективная логистическая система – лишь малая часть нашего опыта.",
  },
  {
    title: "Глобальная сеть складов",
    content: [
      "• Склады в Китае для оптимизации поставок",
      "• Распределительные центры и логистические центры в ЮВА",
    ],
    isList: true,
  },
  {
    title: "Логистические возможности",
    content:
      "Развитая логистическая сеть обеспечивает быструю и надежную доставку оборудования и материалов в любую точку России и СНГ.",
  },
  {
    title: "Преимущества международного сотрудничества",
    content: [
      "• Прямые поставки от производителей",
      "• Оптимальные цены благодаря отлаженной логистике",
      "• Контроль качества на всех этапах",
    ],
    isList: true,
  },
]

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
                Компания «Универсал Ремстрой»
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                «Универсал Ремстрой» – ваш надежный помощник в строительстве и
                ремонте. Мы возьмем на себя все этапы: от создания
                дизайн-проекта до финальной отделки.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Работая на российском рынке с акцентом на Дальневосточный
                регион, мы постоянно расширяем горизонты и стремимся к
                международному развитию.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                <Link href="/services/apartment">
                  <Button className="bg-emerald-700 hover:bg-emerald-600">
                    Наши проекты
                  </Button>
                </Link>
                <DrawerDialog />
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

      {/* Наш путь */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Наш путь</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {journeyData.map((item, index) => (
              <JourneyCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
