"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DrawerDialog } from "@/components/shared/DrawerDialogRequest"

interface Slide {
  title: string
  description: string
  image: string
}

const slides: Slide[] = [
  {
    title: "Надежный партнер в сфере строительства и ремонта во Владивостоке",
    description:
      "Комплексный подход от разработки дизайн-проекта до финальных отделочных работ. Качество международного уровня в Дальневосточном регионе и за его пределами.",
    image: "/images/hero/hero_11.jpg",
  },
  {
    title: "Создаем уникальные интерьеры для вашего комфорта",
    description:
      "Индивидуальный подход к каждому проекту. Воплощаем ваши мечты в реальность, соблюдая сроки и бюджет.",
    image: "/images/hero/hero_12.png",
  },
  {
    title: "Профессиональный ремонт любой сложности",
    description:
      "От косметического до капитального ремонта. Работаем с квартирами, домами и коммерческими помещениями.",
    image: "/images/hero/hero_3.jpg",
  },
]

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="sm:px-4 md:px-8 md:py-4">
      <div className="text-white relative bg-gradient-to-r from-gray-950 to-gray-800 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt=""
              fill
              sizes="(100vw) 56.25vw"
              className="object-cover  opacity-40"
            />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-8 py-8 md:py-16 relative z-10">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                className="h-[400px] md:h-[380px]"
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl mb-10 font-bold">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4">
              <DrawerDialog title="Заказать проект" />
              <Link href="/services/apartment">
                <Button variant="outline" size="lg" className="w-full">
                  Наши проекты
                </Button>
              </Link>
            </div>

            <div className="hidden md:grid mt-12 grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400">10+</div>
                <div className="text-sm font-medium mt-2">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400">500+</div>
                <div className="text-sm font-medium mt-2">
                  завершенных проектов
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400">50+</div>
                <div className="text-sm font-medium mt-2">специалистов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400">98%</div>
                <div className="text-sm font-medium mt-2">
                  довольных клиентов
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
