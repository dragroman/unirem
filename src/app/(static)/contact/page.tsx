import { CONTACTS, socialLinks } from "@/lib/constants"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHero } from "@/components/shared/PageHero"
import { createPageMetadata, getPageContent } from "@/data/pageContent"
import { notFound } from "next/navigation"

export function generateMetadata() {
  return createPageMetadata("contact")
}

export default function ContactsPage() {
  const pageContent = getPageContent("contact")
  if (!pageContent) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Баннер с заголовком */}
      <PageHero
        title={pageContent.title}
        description={pageContent.description}
      />

      {/* Контакты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                Наши контакты
              </h2>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-emerald-700" />
                  Главный офис во Владивостоке
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-4 text-emerald-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Адрес</h4>
                      <p className="text-gray-600 mt-1">{CONTACTS.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-4 text-emerald-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Телефон</h4>
                      <p className="text-gray-600 mt-1">{CONTACTS.phone}</p>
                      <p className="text-gray-600">
                        WhatsApp: {CONTACTS.whatsapp}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-4 text-emerald-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600 mt-1">{CONTACTS.email}</p>
                    </div>
                  </div>

                  {/* ... working hours section remains the same ... */}
                </div>
              </div>

              {/* Update Tabs section */}
              <h3 className="text-xl font-bold mb-4">Наши представительства</h3>

              <Tabs defaultValue="vladivostok" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="vladivostok">Владивосток</TabsTrigger>
                  <TabsTrigger value="china">Харбин</TabsTrigger>
                </TabsList>

                <TabsContent
                  value="vladivostok"
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-emerald-700 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{CONTACTS.address}</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-emerald-700 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-600">{CONTACTS.evgenii.name}</p>
                        <p className="text-gray-600">
                          {CONTACTS.evgenii.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-emerald-700 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{CONTACTS.email}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent
                  value="china"
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-emerald-700 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{CONTACTS.chinaAddress}</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-emerald-700 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-600">{CONTACTS.victor.name}</p>
                        {CONTACTS.victor.phone.map((phone, index) => (
                          <p key={index} className="text-gray-600">
                            {phone}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Как нас найти
            </h2>
            <p className="text-lg text-gray-600">
              Наш главный офис расположен в центре Хабаровска с удобной
              транспортной доступностью
            </p>
          </div>

          <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.0964359657186!2d135.0616729160556!3d48.48030973678701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efaed2ea1ea6733%3A0x949b3e3b81db9ece!2z0JrRgNCw0YHQvdCw0Y8g0J_Qu9C-0YnQsNCx0Yw!5e0!3m2!1sru!2sru!4v1633349908165!5m2!1sru!2sru"
              className="w-full h-full border-0"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Как добраться</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="font-medium mr-2">На автомобиле:</span>
                <span>Удобная парковка доступна рядом со зданием офиса</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">
                  На общественном транспорте:
                </span>
                <span>
                  Автобусы №1, №10, №25 до остановки Площадь Ленина, далее 5
                  минут пешком
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Такси:</span>
                <span>
                  Укажите адрес ул. Примерная, 123, ориентир — бизнес-центр
                  Панорама
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Форма подписки на новости */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Подпишитесь на наши новости
            </h2>
            <p className="text-lg mb-8 text-white text-opacity-90">
              Будьте в курсе наших акций, новых услуг и полезных статей о
              ремонте и строительстве
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <Button className="bg-amber-950 hover:bg-amber-900 text-white py-3 px-6">
                Подписаться
              </Button>
            </div>

            <p className="text-sm mt-4 text-white text-opacity-80">
              Подписываясь, вы соглашаетесь с нашей
              <a href="#" className="underline ml-1 hover:text-white">
                политикой конфиденциальности
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
