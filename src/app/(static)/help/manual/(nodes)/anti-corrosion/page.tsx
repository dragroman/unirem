import { Metadata } from "next"
import Content from "./content.mdx"

export default function Page() {
  return <Content />
}

export const metadata: Metadata = {
  title: "Антикоррозийная обработка винтов",
  description:
    "Пошаговое руководство по антикоррозийной обработке винтов и последующим этапам работы",
}
