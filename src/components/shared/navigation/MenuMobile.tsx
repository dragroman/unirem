"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react"
import { CONTACTS } from "@/lib/constants"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Whatsapp } from "@/components/icons/Whatsapp"
import { Telegram } from "@/components/icons/Telegram"
import { DrawerDialog } from "@/components/shared/DrawerDialogCallback"

export function MenuMobile() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-12 w-12 border-2 hover:bg-emerald-600 hover:text-white hover:border-transparent active:bg-emerald-800 active:text-white active:border-transparent"
        >
          <Menu className="h-8 w-8" />
          <span className="sr-only">Открыть меню</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh] max-h-[90vh]">
        <DrawerHeader className="flex items-center justify-between px-4 border-b pb-2">
          <DrawerTitle className="text-lg">Меню</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
              <span className="sr-only">Закрыть</span>
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-4 py-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="catalog" className="border-b">
              <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                Каталог оборудования
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>

            <AccordionItem value="information" className="border-b">
              <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                Информация
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 py-1 pl-1"></div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href={`tel:${CONTACTS.phoneLink}`} target="_blank">
                <Button variant="outline" className="w-full" size="lg">
                  <Phone size={18} className="mr-2 text-blue-900" />
                  {CONTACTS.phone}
                </Button>
              </a>
              <a
                href={`https://api.whatsapp.com/send/?phone=${CONTACTS.whatsapp}`}
                target="_blank"
              >
                <Button variant="outline" className="w-full" size="lg">
                  <Whatsapp className="mr-2 text-blue-600" />
                  {CONTACTS.whatsapp}
                </Button>
              </a>
              <a href={CONTACTS.telegram.link} target="_blank">
                <Button variant="outline" className="w-full" size="lg">
                  <Telegram className="mr-2 text-blue-600" />
                  {CONTACTS.telegram.name}
                </Button>
              </a>
              <a href={`mailto:${CONTACTS.email}`} target="_blank">
                <Button variant="outline" className="w-full" size="lg">
                  <Mail size={18} className="mr-2 text-blue-600" />
                  {CONTACTS.email}
                </Button>
              </a>
            </div>
            <DrawerDialog />
          </div>
        </div>

        <DrawerFooter className="px-4 py-3 border-t mt-auto">
          <div className="flex flex-col space-y-2">test</div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
