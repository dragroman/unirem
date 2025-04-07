import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
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
import {
  Check,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  PhoneIncoming,
} from "lucide-react"
import { CONTACTS } from "@/lib/constants"
import { PhoneInput } from "@/components/ui/phone-input"
import { RequestForm } from "./RequestForm"
import { DrawerDialog } from "../DrawerDialogCallback"

export function RequestFormWrapper() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-2xl">Заполните форму</CardTitle>
        <CardDescription>
          Мы подготовим для вас индивидуальное коммерческое предложение
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RequestForm />
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <hr className="w-1/2" />
        <div className="text-sm text-gray-500">
          Или воспользуйтесь другим способом для связи
        </div>
        <div className="w-full flex justify-center gap-10">
          <a
            href={`tel:${CONTACTS.phoneLink}`}
            className="flex flex-col items-center text-blue-600 hover:text-blue-700 w-[50px]"
          >
            <Phone className="h-6 w-6 mb-1" />
            <span className="text-sm">Телефон</span>
          </a>

          <a
            href={`mailto:${CONTACTS.email}`}
            className="flex flex-col items-center text-blue-600 hover:text-blue-700 w-[50px]"
          >
            <Mail className="h-6 w-6 mb-1" />
            <span className="text-sm">Email</span>
          </a>

          <a
            href={`https://wa.me/${CONTACTS.whatsapp}`}
            target="_blank"
            className="flex flex-col items-center text-blue-600 hover:text-blue-700 w-[50px]"
          >
            <MessageSquare className="h-6 w-6 mb-1" />
            <span className="text-sm">WhatsApp</span>
          </a>
        </div>
      </CardFooter>
    </Card>
  )
}
