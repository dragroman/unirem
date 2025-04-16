import { ReactNode } from "react"

interface HelpLayoutProps {
  children: ReactNode
}

export default function HelpLayout({ children }: HelpLayoutProps) {
  return (
    <div className="py-20">
      <div className="container max-w-3xl mx-auto">
        <article className="prose prose-md max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-lg">
          {children}
        </article>
      </div>
    </div>
  )
}
