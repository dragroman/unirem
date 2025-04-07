// mdx-components.tsx
import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // // Здесь можно настроить стили компонентов Markdown
    // h1: ({ children }) => (
    //   <h1 className="text-3xl font-bold my-4">{children}</h1>
    // ),
    // h2: ({ children }) => (
    //   <h2 className="text-2xl font-semibold my-3">{children}</h2>
    // ),
    // p: ({ children }) => <p className="my-2">{children}</p>,
    // ul: ({ children }) => <ul className="list-disc ml-6 my-3">{children}</ul>,
    // ...components,
  }
}
