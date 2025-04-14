// components/sections/Footer.tsx
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react"
import { Youtube } from "../icons/Youtube"
import { Whatsapp } from "../icons/Whatsapp"
import { Telegram } from "../icons/Telegram"
import { Vk } from "../icons/Vk"
import { Instagram } from "../icons/Instagram"
import { COMPANY, CONTACTS, SOCIAL } from "@/lib/constants"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Основной контент футера */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О компании */}
          <div className="flex">
            <Image
              src="/logo-white.svg"
              alt="Универсал ремстрой"
              width={100}
              height={100}
              className="h-16 w-auto mr-3"
            />
            <p className="text-sm mb-6">
              Надежный партнер в сфере строительства и ремонта, предоставляющий
              полный комплекс услуг от разработки дизайн-проекта до финальных
              отделочных работ.
            </p>
          </div>

          {/* Контакты */}
          <div className="hidden md:block">
            <h3 className="text-xl font-bold mb-6 text-white">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <a href={`tel:${CONTACTS.phoneLink}`} className="">
                    {CONTACTS.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <a href={`mailto:${CONTACTS.email}`} className="">
                    {CONTACTS.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h3 className="text-xl font-bold mb-6 text-white">Адрес</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="">{CONTACTS.address}</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="">{CONTACTS.workingHours}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h3 className="text-xl font-bold mb-6 text-white">
              Социальные сети
            </h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL.youtube.url}
                target="_blank"
                className=" hover:text-white transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL.whatsapp.url}
                target="_blank"
                className=" hover:text-white transition-colors"
              >
                <Whatsapp className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL.telegram.url}
                target="_blank"
                className=" hover:text-white transition-colors"
              >
                <Telegram className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL.vk.url}
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Vk className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL.instagram.url}
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2025 &quot;Универсал ремстрой&quot;. Все права защищены.
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-white text-sm">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="hover:text-white text-sm">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
