"use client"
import * as React from "react"
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"
import Image from "next/image"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"

interface ImageWithLightboxProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  slides?: Array<{ src: string }>
  slideIndex?: number
  [key: string]: any
}

const ImageWithLightbox: React.FC<ImageWithLightboxProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  slides,
  slideIndex = 0,
  ...props
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onClick={() => setOpen(true)}
          className={`cursor-zoom-in object-cover ${className}`}
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides || [{ src: src }]}
        index={slideIndex}
        plugins={[Zoom, Thumbnails]}
        {...props}
      />
    </div>
  )
}

export default ImageWithLightbox
