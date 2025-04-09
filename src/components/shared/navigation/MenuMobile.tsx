"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
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
import { getMenuItems, getSubmenuItems, hasSubmenu } from "@/data/pageContent"
import { cn } from "@/lib/utils"

export function MenuMobile({ isScrolled }: { isScrolled: boolean }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const menuItems = getMenuItems()

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "lg:hidden h-12 w-12 border-2 hover:bg-emerald-600 hover:text-white hover:border-transparent active:bg-emerald-800 active:text-white active:border-transparent",
            {
              "text-white": isScrolled,
            }
          )}
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
            {menuItems.map((item) => {
              const isActive =
                pathname === item.url || pathname.startsWith(item.url + "/")
              const withSubmenu = hasSubmenu(item.id)

              if (withSubmenu) {
                const submenuItems = getSubmenuItems(item.id)
                return (
                  <AccordionItem value={item.id} key={item.id}>
                    <AccordionTrigger
                      className={cn("hover:text-emerald-600", {
                        "text-emerald-600 font-semibold": isActive,
                      })}
                    >
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        {submenuItems.map((subItem) => {
                          const isSubActive = pathname === subItem.url
                          return (
                            <Link
                              key={subItem.id}
                              href={subItem.url}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block py-2 text-sm hover:text-emerald-600",
                                {
                                  "text-emerald-600 font-semibold": isSubActive,
                                }
                              )}
                            >
                              {subItem.menuTitle || subItem.title}
                            </Link>
                          )
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              }

              return (
                <div key={item.id} className="py-4 border-b">
                  <Link
                    href={item.url}
                    onClick={() => setOpen(false)}
                    className={cn("block hover:text-emerald-600", {
                      "text-emerald-600 font-semibold": isActive,
                    })}
                  >
                    {item.title}
                  </Link>
                </div>
              )
            })}
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
      </DrawerContent>
    </Drawer>
  )
}
