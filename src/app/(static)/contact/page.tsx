import { CONTACTS } from "@/lib/constants"
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
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div>
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
                  src={CONTACTS.googleMaps}
                  className="w-full h-full border-0"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
