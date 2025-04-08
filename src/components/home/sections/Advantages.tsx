// components/sections/Advantages.tsx
import Image from "next/image"
import {
  Award,
  Clock,
  CheckCircle2,
  FileText,
  ShoppingBag,
  Brush,
  Home,
  CheckCheck,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Advantages = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Наши преимущества
          </h2>
          <p className="text-lg text-gray-600">
            Почему клиенты выбирают &quot;Универсал ремстрой&quot; и остаются с
            нами на долгие годы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Award className="mr-3 h-8 w-8 text-emerald-700" />
              Международные стандарты качества
            </h3>

            <ul className="space-y-4">
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                <div>
                  <span className="font-medium">
                    Команда специалистов с зарубежным опытом работы
                  </span>
                  <p className="text-gray-600 mt-1">
                    Наши сотрудники имеют опыт работы в международных компаниях
                    и применяют лучшие мировые практики
                  </p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                <div>
                  <span className="font-medium">
                    Мастера с международными сертификатами
                  </span>
                  <p className="text-gray-600 mt-1">
                    Все наши мастера регулярно проходят обучение и имеют
                    сертификаты международного образца
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Clock className="mr-3 h-8 w-8 text-emerald-700" />
              Гарантированные сроки
            </h3>

            <ul className="space-y-4">
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                <div>
                  <span className="font-medium">
                    Выполнение работ не более 90 дней
                  </span>
                  <p className="text-gray-600 mt-1">
                    Стандартный ремонт квартиры не превышает 90 дней с момента
                    начала работ
                  </p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                <div>
                  <span className="font-medium">Четкое соблюдение графика</span>
                  <p className="text-gray-600 mt-1">
                    Мы разрабатываем подробный график работ и строго
                    придерживаемся его на всех этапах
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <CheckCheck className="mr-3 h-8 w-8 text-emerald-700" />
              Комплексный подход
            </h3>

            <ul className="space-y-4">
              <li className="flex">
                <FileText className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                <div>
                  <span className="font-medium">Разработка дизайн-проекта</span>
                  <p className="text-gray-600 mt-1">
                    Создаем уникальный дизайн-проект с учетом всех ваших
                    пожеланий и требований
                  </p>
                </div>
              </li>
              <li className="flex">
                <ShoppingBag className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                <div>
                  <span className="font-medium">
                    Помощь в выборе материалов
                  </span>
                  <p className="text-gray-600 mt-1">
                    Помогаем подобрать и закупить качественные строительные
                    материалы по оптимальным ценам
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages
