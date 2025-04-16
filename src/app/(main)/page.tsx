// app/page.tsx
import { Metadata } from "next"

import HeroBanner from "@/components/home/sections/HeroBanner"
import Services from "@/components/home/sections/Services"
import DesignPreview from "@/components/home/sections/DesignPreview"
import Advantages from "@/components/home/sections/Advantages"
import ContactForm from "@/components/home/sections/ContactForm"

export const metadata: Metadata = {
  title: "Универсал ремстрой - Строительно-ремонтная компания",
  description:
    'Профессиональные услуги ремонта и строительства в Дальневосточном регионе. Комплексный подход от разработки дизайн-проекта до сдачи объекта "под ключ".',
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroBanner />
      <Services />
      <DesignPreview />
      <Advantages />
      <ContactForm />
    </main>
  )
}
