"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MenuDesktop } from "@/components/shared/navigation/MenuDesktop"
import { MenuMobile } from "@/components/shared/navigation/MenuMobile"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Отслеживаем скролл страницы
  useEffect(() => {
    const handleScroll = () => {
      // Можете изменить значение (например, 50px) в зависимости от того,
      // как быстро должен появляться фон
      const isScrolled = window.scrollY > 60
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Добавляем слушатель события прокрутки
    window.addEventListener("scroll", handleScroll)

    // Проверяем начальное состояние
    handleScroll()

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled ? "bg-emerald-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {scrolled ? (
                <Image
                  src="/logo-horizontal-white.svg"
                  alt="Универсал ремстрой"
                  width={160}
                  height={60}
                  className="w-[160px] h-[60px]"
                  priority
                />
              ) : (
                <Image
                  src="/logo-horizontal.svg"
                  alt="Универсал ремстрой"
                  width={160}
                  height={60}
                  className="w-[160px] h-[60px]"
                  priority
                />
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <MenuDesktop />

          {/* Contact Button and Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              className="hidden md:flex bg-emerald-700 hover:bg-emerald-600"
            >
              <Phone className="mr-2 h-4 w-4" /> Связаться с нами
            </Button>

            {/* Mobile Navigation */}
            <MenuMobile />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
