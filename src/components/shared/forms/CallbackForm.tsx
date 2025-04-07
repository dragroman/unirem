"use client"
import {
  callbackFormDefaultValues,
  callbackFormSchema,
} from "@/schemas/formSchema"
import { useCallbackForm } from "@/hooks/useDrupalForm"
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
import { Check, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { PhoneInput } from "@/components/ui/phone-input"
import { sendGTMEvent } from "@next/third-parties/google"

export function CallbackForm() {
  const { submitForm } = useCallbackForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof callbackFormSchema>>({
    resolver: zodResolver(callbackFormSchema),
    defaultValues: callbackFormDefaultValues,
  })

  async function onSubmit(values: z.infer<typeof callbackFormSchema>) {
    try {
      setIsSubmitting(true)
      await submitForm(values)
      setIsSuccess(true)
      sendGTMEvent({
        event: "form_submit_success",
        form_name: "callbackForm",
      })
      form.reset()
    } catch (error) {
      console.error("Ошибка при отправке формы:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="p-4 md:p-0">
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
          <Button
            className="mt-6 bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsSuccess(false)}
          >
            Отправить еще одну заявку
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 md:space-y-4"
          >
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

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Телефон</FormLabel>
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

            <Button
              type="submit"
              size={"lg"}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      )}
    </div>
  )
}
