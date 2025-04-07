import { RequestFormSchema, CallbackFormSchema } from "@/schemas/formSchema"
import { useCallback } from "react"

export function useRequestForm() {
  const submitForm = useCallback(async (data: RequestFormSchema) => {
    try {
      // Отправка данных на сервер
      const response = await fetch("/api/form/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          errorData.message || "Произошла ошибка при отправке формы"
        )
      }
    } catch (error) {
      console.error("Ошибка отправки формы:", error)
    }
  }, [])

  return { submitForm }
}

export function useCallbackForm() {
  const submitForm = useCallback(async (data: CallbackFormSchema) => {
    try {
      // Отправка данных на сервер
      const response = await fetch("/api/form/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          errorData.message || "Произошла ошибка при отправке формы"
        )
      }
    } catch (error) {
      console.error("Ошибка отправки формы:", error)
    }
  }, [])

  return { submitForm }
}
