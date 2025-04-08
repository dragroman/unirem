// app/(static)/decoration/page.tsx
import {
  ClipboardList,
  Users,
  Hammer,
  Wrench,
  Briefcase,
  CheckSquare,
  Layers,
  Droplet,
  HardHat,
  Ruler,
  Pipette,
  Shovel,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { createPageMetadata, getPageContent } from "@/data/pageContent"
import { notFound } from "next/navigation"

export function generateMetadata() {
  return createPageMetadata("helpProcessApartment")
}

export default function DecorationPage() {
  const pageContent = getPageContent("helpProcessApartment")
  if (!pageContent) {
    notFound()
  }
  return (
    <main className="flex min-h-screen flex-col">
      {/* Баннер с заголовком */}
      <section className="relative bg-gray-900 py-24">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
          style={{ backgroundImage: "url('/images/decoration-banner.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Схема отделочных работ
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Полный процесс строительно-монтажных работ в рамках отделки квартир
          </p>
        </div>
      </section>

      {/* Введение */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Процесс отделки квартир</h2>
            <p className="text-lg text-gray-700 mb-6">
              Компания &quot;Универсал ремстрой&quot; предлагает комплексный
              подход к отделке квартир, включающий все необходимые этапы от
              подготовки документации до финальной сдачи объекта. Ниже
              представлена подробная схема процесса строительно-монтажных работ.
            </p>
          </div>
        </div>
      </section>

      {/* Этап 1: Подготовительный этап */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-emerald-700 p-3 rounded-full mr-4">
                <ClipboardList className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1. Подготовительный этап</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Подготовка документации
                  </h3>
                </div>
                <p className="text-gray-700">
                  Сбор и оформление всех необходимых документов, разрешений и
                  согласований для начала строительно-монтажных работ.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">Подбор специалистов</h3>
                </div>
                <p className="text-gray-700">
                  Формирование команды квалифицированных специалистов, подбор
                  необходимых материалов и инструментов для выполнения работ.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Ruler className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">Разработка расчетов</h3>
                </div>
                <p className="text-gray-700">
                  Создание предварительных расчетов, планирование бюджета и
                  сроков выполнения всех этапов работ.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Демонтаж и переделка
                  </h3>
                </div>
                <p className="text-gray-700">
                  Демонтаж старых конструкций и материалов, подготовка помещения
                  к проведению новых отделочных работ.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex items-center mb-4">
                <Droplet className="h-6 w-6 text-emerald-700 mr-3" />
                <h3 className="text-xl font-semibold">
                  Инженерные сети и гидроизоляция
                </h3>
              </div>
              <p className="text-gray-700">
                Подготовка и монтаж инженерных сетей, проведение
                гидроизоляционных работ в помещениях с повышенной влажностью.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <HardHat className="h-6 w-6 text-emerald-700 mr-3" />
                <h3 className="text-xl font-semibold">Инструктаж на объекте</h3>
              </div>
              <p className="text-gray-700">
                Перед началом всех работ проводятся разметка и инструктаж для
                всех задействованных специалистов. Обеспечивается безопасный
                доступ к рабочим зонам и соблюдение техники безопасности на
                объекте.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 2: Основные работы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-emerald-700 p-3 rounded-full mr-4">
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">2. Основные работы</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Shovel className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">Работы по дереву</h3>
                </div>
                <p className="text-gray-700">
                  Включает установку подвесных конструкций, обработку деревянных
                  элементов и их финальную отделку. Монтаж деревянных
                  конструкций и элементов интерьера.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Layers className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">Работы по кладке</h3>
                </div>
                <p className="text-gray-700">
                  Включает подготовку поверхностей, разметку и укладку
                  материалов, а также выравнивание швов. Кладка кирпича, блоков
                  и других строительных материалов.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Работы по сантехнике
                  </h3>
                </div>
                <p className="text-gray-700">
                  Установка трубопроводов, фитингов и других сантехнических
                  элементов с последующим тестированием. Монтаж сантехнического
                  оборудования и проверка его работоспособности.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Pipette className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Установка основных материалов
                  </h3>
                </div>
                <p className="text-gray-700">
                  Монтаж плитки, гипсокартона, панелей и других отделочных
                  элементов. Финишная отделка поверхностей в соответствии с
                  дизайн-проектом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Этап 3: Финальный этап */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-emerald-700 p-3 rounded-full mr-4">
                <CheckSquare className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">3. Финальный этап</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">Очистка и уборка</h3>
                </div>
                <p className="text-gray-700">
                  Тщательная очистка и уборка помещения после завершения всех
                  строительных и отделочных работ.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CheckSquare className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">Финальная проверка</h3>
                </div>
                <p className="text-gray-700">
                  Проверка качества выполненных работ, тестирование всех систем
                  и устранение возможных недочетов.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-emerald-700 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Подписание документации
                  </h3>
                </div>
                <p className="text-gray-700">
                  Оформление и подписание документации о сдаче объекта, передача
                  ключей и гарантийных документов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
