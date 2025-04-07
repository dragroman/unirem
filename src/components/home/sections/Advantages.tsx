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

        <Tabs defaultValue="quality" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-3xl grid-cols-1 md:grid-cols-3">
              <TabsTrigger
                value="quality"
                className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
              >
                Международные стандарты
              </TabsTrigger>
              <TabsTrigger
                value="timing"
                className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
              >
                Гарантированные сроки
              </TabsTrigger>
              <TabsTrigger
                value="approach"
                className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
              >
                Комплексный подход
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="quality" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
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
                        Наши сотрудники имеют опыт работы в международных
                        компаниях и применяют лучшие мировые практики
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
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                    <div>
                      <span className="font-medium">
                        Использование высококачественных импортных материалов
                      </span>
                      <p className="text-gray-600 mt-1">
                        Мы работаем только с проверенными поставщиками
                        качественных материалов из разных стран
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="order-1 md:order-2 relative h-72 md:h-96">
                <Image
                  src="/images/quality.jpg"
                  alt="Международные стандарты качества"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="timing" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
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
                        Стандартный ремонт квартиры не превышает 90 дней с
                        момента начала работ
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                    <div>
                      <span className="font-medium">
                        Четкое соблюдение графика
                      </span>
                      <p className="text-gray-600 mt-1">
                        Мы разрабатываем подробный график работ и строго
                        придерживаемся его на всех этапах
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                    <div>
                      <span className="font-medium">
                        Прозрачная система контроля
                      </span>
                      <p className="text-gray-600 mt-1">
                        Вы всегда можете отслеживать ход выполнения работ через
                        нашу онлайн-систему
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="order-1 md:order-2 relative h-72 md:h-96">
                <Image
                  src="/images/timing.jpg"
                  alt="Гарантированные сроки"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="approach" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <CheckCheck className="mr-3 h-8 w-8 text-emerald-700" />
                  Комплексный подход
                </h3>

                <ul className="space-y-4">
                  <li className="flex">
                    <FileText className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                    <div>
                      <span className="font-medium">
                        Разработка дизайн-проекта
                      </span>
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
                  <li className="flex">
                    <Brush className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                    <div>
                      <span className="font-medium">
                        Все виды строительных работ
                      </span>
                      <p className="text-gray-600 mt-1">
                        Выполняем весь спектр строительных и отделочных работ
                        собственными силами
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Home className="h-6 w-6 mr-3 text-emerald-700 flex-shrink-0" />
                    <div>
                      <span className="font-medium">
                        Сдача объекта под &quot;ключ&quot;
                      </span>
                      <p className="text-gray-600 mt-1">
                        Полностью готовое к использованию помещение без
                        необходимости дополнительных доработок
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="order-1 md:order-2 relative h-72 md:h-96">
                <Image
                  src="/images/approach.jpg"
                  alt="Комплексный подход"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Advantages
