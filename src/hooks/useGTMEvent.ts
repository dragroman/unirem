import { useCallback } from "react"

interface GTMEventProps {
  event: string
  category?: string
  action?: string
  label?: string
  value?: number
}

export const useGTMEvent = () => {
  const pushToDataLayer = useCallback((eventData: GTMEventProps) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: eventData.event,
        eventCategory: eventData.category,
        eventAction: eventData.action,
        eventLabel: eventData.label,
        eventValue: eventData.value,
      })
    }
  }, [])

  return { pushToDataLayer }
}
