import { z } from "zod"
import { isValidPhoneNumber } from "react-phone-number-input"

export type RequestFormSchema = {
  name?: string
  email: string
  phone: string
  company?: string
  message?: string
}
export type CallbackFormSchema = {
  name?: string
  phone: string
}

export const requestFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Неверный формат email" }),
  phone: z.string().refine(isValidPhoneNumber, {
    message:
      "Телефон должен быть в международном формате, например +79123456789",
  }),
  company: z.string().optional(),
  message: z.string().optional(),
})

export const callbackFormSchema = z.object({
  name: z.string().optional(),
  phone: z.string().refine(isValidPhoneNumber, {
    message:
      "Телефон должен быть в международном формате, например +79123456789",
  }),
})

export const defaultValues: RequestFormSchema = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
}

export const callbackFormDefaultValues: CallbackFormSchema = {
  name: "",
  phone: "",
}
