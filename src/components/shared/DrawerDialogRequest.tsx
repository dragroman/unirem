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
import { useState, useEffect } from "react"
import { sendGTMEvent } from "@next/third-parties/google"
import { RequestForm } from "./forms/RequestForm"

export function DrawerDialog({
  classname,
  title,
}: {
  classname?: string
  title?: string
}) {
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Проверяем размер экрана только на клиенте после монтирования
    setIsDesktop(window.matchMedia("(min-width: 768px)").matches)

    // Добавляем слушатель для обработки изменения размера экрана
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    const handleResize = (e: MediaQueryListEvent) => setIsDesktop(e.matches)

    mediaQuery.addEventListener("change", handleResize)

    // Очищаем слушатель при размонтировании
    return () => mediaQuery.removeEventListener("change", handleResize)
  }, [])

  // Общая кнопка для обоих компонентов
  const triggerButton = (
    <Button
      variant="default"
      size="lg"
      onClick={() => sendGTMEvent({ event: "openRequestForm", value: "1" })}
    >
      {title || "Узнать стоимость"}
    </Button>
  )

  // После монтирования рендерим соответствующий компонент
  return isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Заполните форму</DialogTitle>
          <DialogDescription>
            Мы подготовим для вас индивидуальное коммерческое предложение
          </DialogDescription>
        </DialogHeader>
        <RequestForm />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="hidden" asChild>
        {triggerButton}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Заполните форму</DrawerTitle>
          <DrawerDescription>
            Мы подготовим для вас индивидуальное коммерческое предложение
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <RequestForm />
        </div>
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
