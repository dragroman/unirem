import { Metadata } from "next"
import Introduction from "./introduction.mdx"

export default function Page() {
  return (
    <div className="py-20">
      <div className="container max-w-3xl mx-auto">
        <article className="prose prose-md max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-lg">
          <Introduction />
        </article>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности для сайта Мир Китайского Оборудования",
}
