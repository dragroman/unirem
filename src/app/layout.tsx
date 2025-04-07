import { DraftAlert } from "@/components/misc/DraftAlert"
import { GoogleTagManager } from "@next/third-parties/google"
import localFont from "next/font/local"

import type { Metadata } from "next"
import type { ReactNode } from "react"

import "@/styles/globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: {
    default: "Next.js for Drupal",
    template: "%s",
  },
  description: "A Next.js site powered by a Drupal backend.",

  manifest: "/manifest.json",
}

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

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="XXX" />
      <body className={`${inter.className} antialiased scroll-smooth`}>
        <Header />
        <DraftAlert />
        {children}
        <Footer />
      </body>
    </html>
  )
}
