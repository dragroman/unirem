import { Metadata } from "next"
import Content from "./content.mdx"

export default function Page() {
  return <Content />
}

export const metadata: Metadata = {
  title: "Инструкция по установке потолков",
  description:
    "Пошаговое руководство по установке потолков с использованием профессиональных инструментов",
}
