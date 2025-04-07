"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getMenuItems, getSubmenuItems, hasSubmenu } from "@/data/pageContent"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function MenuDesktop() {
  const pathname = usePathname()
  const menuItems = getMenuItems()

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {menuItems.map((item) => {
          const isActive =
            pathname === item.url || pathname.startsWith(item.url + "/")
          const withSubmenu = hasSubmenu(item.id)

          // Пункт меню с подменю
          if (withSubmenu) {
            const submenuItems = getSubmenuItems(item.id)

            return (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuTrigger
                  className={cn({
                    "text-emerald-600 font-semibold": isActive,
                  })}
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {submenuItems.map((subItem) => {
                      const isSubActive = pathname === subItem.url

                      return (
                        <ListItem
                          key={subItem.id}
                          title={subItem.menuTitle || subItem.title}
                          href={subItem.url}
                          isActive={isSubActive}
                        >
                          {subItem.description}
                        </ListItem>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          }

          // Обычный пункт меню без подменю
          return (
            <NavigationMenuItem key={item.id}>
              <Link href={item.url} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "text-emerald-600 font-semibold": isActive,
                  })}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// Компонент для элемента подменю
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { isActive?: boolean }
>(({ className, title, children, isActive, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            {
              "bg-accent/50": isActive,
            },
            className
          )}
          {...props}
        >
          <div
            className={cn("text-sm font-medium leading-none", {
              "text-emerald-600": isActive,
            })}
          >
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
