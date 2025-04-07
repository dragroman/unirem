import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone" as const,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: process.env.NEXT_IMAGE_DOMAIN || "uniremstroi.ru",
        // port: '',
        // pathname: '/sites/default/files/**',
      },
    ],
  },
}

const withMDX = createMDX({
  // Опционально добавьте плагины markdown при необходимости
})

export default withMDX(nextConfig)
