// components/sections/Services.tsx
import { Home, Paintbrush, Sofa, Lightbulb, HomeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const serviceItems = [
  {
    title: "Ремонт квартир",
    description: '"Под ключ"',
    icon: Home,
  },
  {
    title: "Ремонт домов и строительство",
    description:
      "Ремонт и строительство коттеджей и частных домов с улучшением планировочных решений",
    icon: HomeIcon,
  },
  {
    title: "Отделочные работы",
    description:
      "Профессиональная отделка жилых помещений с использованием высококачественных материалов",
    icon: Paintbrush,
  },
  {
    title: "Поставки материалов",
    description:
      "Импортные строительные материалы высокого качества напрямую от производителей",
    icon: Sofa,
  },
  {
    title: "Поставки мебели",
    description:
      "Мебель из Китая с прямыми поставками от производителей без посредников",
    icon: Sofa,
  },
  {
    title: "Электромонтажные работы",
    description:
      "Полный спектр электромонтажных работ с гарантией безопасности и надежности",
    icon: Lightbulb,
  },
]

const Services = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Основные направления деятельности
          </h2>
          <p className="text-lg text-gray-600">
            Предоставляем полный комплекс услуг от разработки дизайн-проекта до
            финальных отделочных работ.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {serviceItems.map((service, index) => (
            <Card
              key={index}
              className="border-gray-200 transition-all hover:shadow-md"
            >
              <CardHeader className="pb-2">
                {/* <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-emerald-700" />
                </div> */}
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
