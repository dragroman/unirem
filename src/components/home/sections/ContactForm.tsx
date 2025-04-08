// components/sections/ContactForm.tsx
"use client"

import { useState } from "react"
import { Phone, MapPin, Mail, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RequestForm } from "@/components/shared/forms/RequestForm"
import { CONTACTS } from "@/lib/constants"

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    setIsSubmitted(true)

    // Сбросить статус через 5 секунд
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-gray-600">
            Оставьте заявку на консультацию или расчет стоимости проекта, и наши
            специалисты свяжутся с вами в ближайшее время
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Контактная информация
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 text-emerald-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Телефон</h4>
                  <p className="text-gray-600 mt-1">{CONTACTS.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 text-emerald-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600 mt-1">{CONTACTS.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 text-emerald-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Адрес</h4>
                  <p className="text-gray-600 mt-1">{CONTACTS.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-4 text-emerald-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Время работы</h4>
                  <p className="text-gray-600 mt-1">{CONTACTS.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
