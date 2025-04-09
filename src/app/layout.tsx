import { DraftAlert } from "@/components/misc/DraftAlert"
import { GoogleTagManager } from "@next/third-parties/google"
import localFont from "next/font/local"

import type { Metadata } from "next"
import type { ReactNode } from "react"

import "@/styles/globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = localFont({
  src: [
    {
      path: "../fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://uniremstroi.ru"),
  title: {
    template: "%s | Универсал ремстрой",
    default: "Универсал ремстрой - Ремонт и строительство во Владивостоке",
  },
  description:
    "Профессиональный ремонт квартир, домов и коммерческих помещений во Владивостоке. Качественные материалы и опытные мастера.",
}

const gtmId = process.env.NEXT_PUBLIC_GTM_ID

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body className={`${inter.className} antialiased scroll-smooth`}>
        <Header />
        <DraftAlert />
        {children}
        <Footer />
      </body>
    </html>
  )
}
