"use client"

import React from "react"
import { Button, ButtonProps } from "@/components/ui/button"

interface GTMButtonProps extends ButtonProps {
  gtmEventData?: {
    event: string
    category?: string
    action?: string
    label?: string
    value?: number
  }
}

export function GTMButton({
  gtmEventData,
  onClick,
  children,
  ...props
}: GTMButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Отправка события в dataLayer
    if (gtmEventData && typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: gtmEventData.event,
        eventCategory: gtmEventData.category,
        eventAction: gtmEventData.action,
        eventLabel: gtmEventData.label,
        eventValue: gtmEventData.value,
      })
    }

    // Вызов оригинального обработчика onClick
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  )
}
