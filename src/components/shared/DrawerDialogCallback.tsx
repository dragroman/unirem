"use client"

import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"
import { CallbackForm } from "./forms/CallbackForm"
import { useState, useEffect } from "react"
import { PhoneCall } from "lucide-react"
import { cn } from "@/lib/utils"
import { sendGTMEvent } from "@next/third-parties/google"

export function DrawerDialog({ classname }: { classname?: string }) {
  const [open, setOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Используем isDesktop только после монтирования
  const isDesktop = isMounted
    ? window.matchMedia("(min-width: 768px)").matches
    : true

  // Условное определение классов кнопки
  const buttonClasses = cn(
    // Базовые общие классы
    "flex items-center gap-2",
    // Классы, зависящие от устройства
    isDesktop
      ? "px-4 py-2"
      : "w-full justify-center py-3 bg-primary text-primary-foreground text-lg py-5"
  )

  // Всегда рендерим кнопку, но с разными классами
  const triggerButton = (
    <Button
      variant="outline"
      className={cn(buttonClasses, classname)}
      onClick={() => sendGTMEvent({ event: "openCallbackForm", value: "1" })}
    >
      {!isDesktop && <PhoneCall className="h-4 w-4" />}
      Обратный звонок
    </Button>
  )

  // Отрисовка контента в зависимости от устройства
  return isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Заказать обратный звонок</DialogTitle>
          <DialogDescription>
            Оставьте свои контакты и мы свяжемся с вами в ближайшее время
          </DialogDescription>
        </DialogHeader>
        <CallbackForm />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Заказать обратный звонок</DrawerTitle>
          <DrawerDescription>
            Оставьте свои контакты и мы свяжемся с вами в ближайшее время
          </DrawerDescription>
        </DrawerHeader>
        <CallbackForm />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button className="text-muted-foreground" variant="link">
              Отменить
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
