// components/home/sections/DesignPreview.tsx
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const designStyles = [
  {
    title: "Современный стиль",
    description:
      "Минималистичный дизайн с чистыми линиями и функциональными решениями",
    image: "/images/services/apartment/Modern_1.jpg",
  },
  {
    title: "Европейский стиль",
    description:
      "Элегантное сочетание классики и современности с особым вниманием к деталям",
    image: "/images/services/apartment/Eu_1.jpg",
  },
  {
    title: "Итальянский стиль",
    description:
      "Роскошный интерьер с изысканной мебелью и декоративными элементами",
    image: "/images/services/apartment/italian_1.jpeg",
  },
]

const DesignPreview = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Стили ремонта квартир
          </h2>
          <p className="text-lg text-gray-600">
            Выберите свой идеальный стиль из множества вариантов дизайна
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designStyles.map((style, index) => (
            <Card
              key={index}
              className="border-gray-200 transition-all hover:shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {style.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {style.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/services/apartment" className="w-full">
                  <Button
                    variant="default"
                    className="w-full group-hover:bg-emerald-600"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services/apartment">
            <Button
              variant="outline"
              className="text-lg px-8 hover:bg-emerald-50"
            >
              Смотреть все варианты
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DesignPreview
