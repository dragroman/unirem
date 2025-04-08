"use client"
import { defaultValues, requestFormSchema } from "@/schemas/formSchema"
import { useRequestForm } from "@/hooks/useDrupalForm"
import { z } from "zod"
import {
  FormMessage,
  FormField,
  FormControl,
  FormLabel,
  FormItem,
  Form,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CONTACTS } from "@/lib/constants"
import { PhoneInput } from "@/components/ui/phone-input"
import { sendGTMEvent } from "@next/third-parties/google"

export function RequestForm() {
  const { submitForm } = useRequestForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof requestFormSchema>>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: defaultValues,
  })

  async function onSubmit(values: z.infer<typeof requestFormSchema>) {
    try {
      setIsSubmitting(true)
      await submitForm(values)
      setIsSuccess(true)
      form.reset()
      sendGTMEvent({
        event: "calculate_application",
        form_name: "requestForm",
      })
    } catch (error) {
      console.error("Ошибка при отправке формы:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="bg-green-100 rounded-full p-3 mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-medium text-green-600 mb-2">
            Заявка успешно отправлена!
          </h3>
          <p className="text-gray-600 text-center">
            Наши специалисты свяжутся с вами в ближайшее время
          </p>
          <Button className="mt-6" onClick={() => setIsSuccess(false)}>
            Отправить еще одну заявку
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Ваше имя</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Иван Иванов" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="hidden md:block">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Название компании</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="ООО «Компания»" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Телефон (обязательно)</FormLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        placeholder="+7 (999) 999-99-99"
                        defaultCountry="RU"
                        international
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Email (обязательно)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="example@mail.ru"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Сообщение</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Укажите детали вашего запроса или интересующие вопросы"
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      )}
    </>
  )
}
