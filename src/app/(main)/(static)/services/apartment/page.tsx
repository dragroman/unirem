import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageWithLightbox from "@/components/shared/ImageWithLightbox"
import { ZoomIn } from "lucide-react"
import { createPageMetadata, getPageContent } from "@/data/pageContent"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/shared/PageHero"
import ReactMarkdown from "react-markdown"

const designStyles = [
  {
    id: "italian",
    name: "Итальянский",
    images: [
      "/images/services/apartment/italian_1.jpeg",
      "/images/services/apartment/italian_2.jpeg",
      "/images/services/apartment/italian_3.jpeg",
      "/images/services/apartment/italian_4.jpeg",
      "/images/services/apartment/italian_5.jpeg",
      "/images/services/apartment/italian_6.jpeg",
      "/images/services/apartment/italian_7.jpeg",
      "/images/services/apartment/italian_8.jpeg",
      "/images/services/apartment/italian_9.jpeg",
      "/images/services/apartment/italian_10.jpeg",
      "/images/services/apartment/italian_11.jpeg",
      "/images/services/apartment/italian_12.jpeg",
      "/images/services/apartment/italian_13.jpeg",
      "/images/services/apartment/italian_14.jpeg",
      "/images/services/apartment/italian_15.jpeg",
      "/images/services/apartment/italian_16.jpeg",
      "/images/services/apartment/italian_17.jpeg",
      "/images/services/apartment/italian_18.jpeg",
      "/images/services/apartment/italian_19.jpeg",
      "/images/services/apartment/italian_20.jpeg",
      "/images/services/apartment/italian_21.jpeg",
      "/images/services/apartment/italian_22.jpeg",
      "/images/services/apartment/italian_23.jpeg",
    ],
    description:
      "**Итальянский стиль** сочетает в себе элегантность, роскошь и комфорт. Характерные черты: натуральные материалы, теплые оттенки, изящная мебель и декоративные элементы.",
  },
  {
    id: "american",
    name: "Американский",
    images: [
      "/images/services/apartment/American_1.jpg",
      "/images/services/apartment/American_2.jpg",
      "/images/services/apartment/American_3.jpg",
      "/images/services/apartment/American_4.jpg",
      "/images/services/apartment/American_5.jpg",
      "/images/services/apartment/American_6.jpg",
      "/images/services/apartment/American_7.jpg",
      "/images/services/apartment/American_8.jpg",
    ],
    description:
      "**Американский стиль** отличается практичностью, просторностью и функциональностью. Открытые планировки, большие окна и сочетание классических и современных элементов создают уютную атмосферу.",
  },
  {
    id: "modern",
    name: "Современный",
    images: [
      "/images/services/apartment/Modern_1.jpg",
      "/images/services/apartment/Modern_2.jpg",
      "/images/services/apartment/Modern_3.jpg",
      "/images/services/apartment/Modern_4.jpg",
      "/images/services/apartment/Modern_5.jpg",
      "/images/services/apartment/Modern_6.jpg",
      "/images/services/apartment/Modern_7.jpg",
      "/images/services/apartment/Modern_8.jpg",
    ],
    description:
      "**Современный стиль** характеризуется минимализмом, чистыми линиями и функциональностью. Нейтральные цвета, открытые пространства и инновационные материалы создают стильный и комфортный интерьер.",
  },
  {
    id: "european",
    name: "Европейский",
    images: [
      "/images/services/apartment/Eu_1.jpg",
      "/images/services/apartment/Eu_2.jpg",
      "/images/services/apartment/Eu_3.jpg",
      "/images/services/apartment/Eu_4.jpg",
      "/images/services/apartment/Eu_5.jpg",
      "/images/services/apartment/Eu_6.jpg",
      "/images/services/apartment/Eu_7.jpg",
      "/images/services/apartment/Eu_8.jpg",
      "/images/services/apartment/Eu_9.jpg",
      "/images/services/apartment/Eu_10.jpg",
      "/images/services/apartment/Eu_11.jpg",
    ],
    description:
      "**Европейский стиль** сочетает в себе элегантность и функциональность. Светлые тона, качественные материалы и продуманные детали создают гармоничное пространство с особым шармом.",
  },
  {
    id: "japanese",
    name: "Японский",
    images: [
      "/images/services/apartment/Jp_1.jpg",
      "/images/services/apartment/Jp_2.jpg",
      "/images/services/apartment/Jp_3.jpg",
      "/images/services/apartment/Jp_4.jpg",
      "/images/services/apartment/Jp_5.jpg",
      "/images/services/apartment/Jp_6.jpg",
      "/images/services/apartment/Jp_7.jpg",
      "/images/services/apartment/Jp_8.jpg",
      "/images/services/apartment/Jp_9.jpg",
    ],
    description:
      "**Японский стиль** отличается минимализмом, гармонией и близостью к природе. Натуральные материалы, нейтральные цвета и функциональные решения создают спокойную и уравновешенную атмосферу.",
  },
  {
    id: "french",
    name: "Французский",
    images: [
      "/images/services/apartment/France_1.jpg",
      "/images/services/apartment/France_2.jpg",
      "/images/services/apartment/France_3.jpg",
      "/images/services/apartment/France_4.jpg",
      "/images/services/apartment/France_5.jpg",
      "/images/services/apartment/France_6.jpg",
      "/images/services/apartment/France_7.jpg",
      "/images/services/apartment/France_8.jpg",
      "/images/services/apartment/France_9.jpg",
      "/images/services/apartment/France_10.jpg",
    ],
    description:
      "**Французский стиль** воплощает элегантность и изысканность. Пастельные тона, антикварная мебель, декоративные элементы и внимание к деталям создают роскошный и утонченный интерьер.",
  },
  {
    id: "chinese",
    name: "Китайский",
    images: [
      "/images/services/apartment/Cn_1.jpg",
      "/images/services/apartment/Cn_2.jpg",
      "/images/services/apartment/Cn_3.jpg",
      "/images/services/apartment/Cn_4.jpg",
      "/images/services/apartment/Cn_5.jpg",
      "/images/services/apartment/Cn_6.jpg",
      "/images/services/apartment/Cn_7.jpg",
      "/images/services/apartment/Cn_8.jpg",
      "/images/services/apartment/Cn_9.jpg",
    ],
    description:
      "Китайский стиль характеризуется гармонией, балансом и символизмом. Яркие цвета, традиционные орнаменты, натуральные материалы и философия фэн-шуй создают уникальное пространство с особой энергетикой.",
  },
]

export function generateMetadata() {
  return createPageMetadata("servicesApartment")
}

export default function DesignProjects() {
  const pageContent = getPageContent("servicesApartment")
  if (!pageContent) {
    notFound()
  }
  return (
    <div className="">
      <PageHero
        title={pageContent.title}
        description={pageContent.description}
        image={pageContent.image}
      />

      <Tabs defaultValue="italian" className="">
        <TabsList className="flex flex-wrap justify-center gap-2 py-6 md:py-10 h-auto">
          {designStyles.map((style) => (
            <TabsTrigger
              key={style.id}
              value={style.id}
              className="text-sm md:text-base whitespace-nowrap"
            >
              {style.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="max-w-screen-lg mx-auto px-4 py-8">
          {designStyles.map((style) => (
            <TabsContent key={style.id} value={style.id}>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
                  {style.name}
                </h2>
                <div className="text-gray-700 mb-6">
                  <ReactMarkdown>{style.description}</ReactMarkdown>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center my-6 text-muted-foreground">
                <ZoomIn /> нажмите на изображение чтобы приблизить
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {style.images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-[200px] sm:h-[240px] md:h-[300px] w-full">
                      <ImageWithLightbox
                        src={image}
                        slides={style.images.map((img) => ({ src: img }))}
                        slideIndex={index}
                        alt={`${style.name} дизайн интерьера ${index + 1}`}
                        className="object-cover"
                        width={300}
                        height={400}
                        sizes="100vw"
                        controller={{
                          closeOnBackdropClick: true,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
