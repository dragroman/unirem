import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageWithLightbox from "@/components/shared/ImageWithLightbox"
import { ZoomIn } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { createPageMetadata, getPageContent } from "@/data/pageContent"
import { notFound } from "next/navigation"

const designStyles = [
  {
    id: "italian",
    name: "Караоке Клуб (KTV)",
    images: [
      "/images/services/commercial/KTV_1.jpg",
      "/images/services/commercial/KTV_2.jpg",
      "/images/services/commercial/KTV_3.jpg",
      "/images/services/commercial/KTV_4.jpg",
      "/images/services/commercial/KTV_5.jpg",
      "/images/services/commercial/KTV_6.jpg",
      "/images/services/commercial/KTV_7.jpg",
      "/images/services/commercial/KTV_8.jpg",
      "/images/services/commercial/KTV_9.jpg",
    ],
    description:
      "Караоке клубы (KTV) - это современные развлекательные заведения, где каждая деталь интерьера создает атмосферу роскоши и комфорта. Профессиональное звуковое оборудование, стильная мебель, продуманное освещение и акустические решения делают пространство идеальным для отдыха и развлечений. Особое внимание уделяется дизайну VIP-комнат и общих зон, созданию правильной атмосферы с помощью современных материалов и технологий.",
  },
  {
    id: "american",
    name: "Японский стиль",
    images: [
      "/images/services/commercial/Jp_commercial_1.jpg",
      "/images/services/commercial/Jp_commercial_2.jpg",
      "/images/services/commercial/Jp_commercial_3.jpg",
      "/images/services/commercial/Jp_commercial_4.jpg",
      "/images/services/commercial/Jp_commercial_5.jpg",
      "/images/services/commercial/Jp_commercial_6.jpg",
      "/images/services/commercial/Jp_commercial_7.jpg",
      "/images/services/commercial/Jp_commercial_8.jpg",
    ],
    description:
      "Американский стиль отличается практичностью, просторностью и функциональностью. Открытые планировки, большие окна и сочетание классических и современных элементов создают уютную атмосферу.",
  },
]

export function generateMetadata() {
  return createPageMetadata("servicesCommercial")
}

export default function DesignProjects() {
  const pageContent = getPageContent("servicesCommercial")
  if (!pageContent) {
    return notFound()
  }
  return (
    <div>
      <PageHero
        title={pageContent.title}
        description={pageContent.description}
      />

      <Tabs defaultValue="italian" className="w-full">
        <TabsList className="w-full flex justify-center mb-8">
          {designStyles.map((style) => (
            <TabsTrigger key={style.id} value={style.id} className="">
              {style.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="max-w-screen-lg mx-auto">
          {designStyles.map((style) => (
            <TabsContent key={style.id} value={style.id} className="mt-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
                  {style.name}
                </h2>
                <p className="text-gray-700 mb-6">{style.description}</p>
              </div>
              <div className="flex flex-row items-center justify-center my-6 text-muted-foreground">
                <ZoomIn className="mr-2" /> нажмите на изображение чтобы
                приблизить
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {style.images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[2/1]"
                  >
                    <ImageWithLightbox
                      src={image}
                      alt={`${style.name} дизайн интерьера ${index + 1}`}
                      width={600}
                      height={450}
                      slides={style.images.map((img) => ({ src: img }))}
                      slideIndex={index}
                      controller={{
                        closeOnBackdropClick: true,
                      }}
                    />
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
