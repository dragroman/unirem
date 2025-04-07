import Image from "next/image"

interface PageHeroProps {
  title: string
  description: string
  image?: string
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section
      className={`relative ${image ? "bg-gray-900/50" : "bg-gray-900"} py-24`}
    >
      {image && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
            className="mix-blend-overlay"
          />
        </div>
      )}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  )
}
