"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const photos = [
  {
    src: "/images/galerie-01.jpg",
    title: "Action communautaire",
  },
  {
    src: "/images/galerie-02.jpg",
    title: "Sur le terrain",
  },
  {
    src: "/images/galerie-03.jpg",
    title: "Engagement",
  },
  {
    src: "/images/galerie-04.jpg",
    title: "Éducation",
  },
  {
    src: "/images/galerie-05.jpg",
    title: "Communauté",
  },
  {
    src: "/images/galerie-06.jpg",
    title: "Solidarité",
  },
  {
    src: "/images/galerie-07.jpg",
    title: "Nos équipes",
  },
  {
    src: "/images/galerie-08.jpg",
    title: "Mobilisation",
  },
  {
    src: "/images/galerie-09.jpg",
    title: "Programme",
  },
  {
    src: "/images/galerie-10.jpg",
    title: "Partenariat",
  },
  {
    src: "/images/galerie-11.jpg",
    title: "Terrain",
  },
  {
    src: "/images/galerie-12.jpg",
    title: "Impact",
  },
]

export function GallerySection() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null)

  const close = () => setActivePhoto(null)

  const previous = () => {
    if (activePhoto === null) return

    setActivePhoto(
      activePhoto === 0
        ? photos.length - 1
        : activePhoto - 1
    )
  }

  const next = () => {
    if (activePhoto === null) return

    setActivePhoto(
      activePhoto === photos.length - 1
        ? 0
        : activePhoto + 1
    )
  }

  useEffect(() => {
    if (activePhoto === null) return

    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") previous()
      if (event.key === "ArrowRight") next()
    }

    document.addEventListener("keydown", keyboard)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", keyboard)
      document.body.style.overflow = ""
    }
  }, [activePhoto])

  return (
    <>
      <section className="bg-white py-20 md:py-28 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          {/* HEADER */}
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-pah-green">
                Galerie
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl dark:text-white">
                Nos actions en images
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
              Une sélection de moments capturés au cœur de nos
              actions et de nos communautés.
            </p>
          </div>

          {/* LIGNE FINE */}
          <div className="mb-7 h-px bg-gray-200 dark:bg-gray-800" />

          {/* GRILLE */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {photos.map((photo, index) => (
              <motion.button
                key={photo.src}
                type="button"
                onClick={() => setActivePhoto(index)}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-30px",
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.025, 0.2),
                }}
                className="group relative overflow-hidden bg-gray-100 text-left dark:bg-gray-900"
              >
                {/* PHOTO */}
                <div className="relative aspect-[4/3]">

                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="
                      (max-width: 640px) 50vw,
                      (max-width: 768px) 33vw,
                      (max-width: 1024px) 25vw,
                      20vw
                    "
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />

                  {/* NUMERO */}
                  <span className="absolute left-3 top-3 text-[10px] font-medium tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* TITRE */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-medium text-white">
                      {photo.title}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}

          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={close}
          >

            {/* FERMER */}
            <button
              type="button"
              onClick={close}
              aria-label="Fermer"
              className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black"
            >
              <X size={18} />
            </button>

            {/* COMPTEUR */}
            <div className="absolute left-5 top-5 z-30 text-xs tracking-widest text-white/50">
              {String(activePhoto + 1).padStart(2, "0")}
              {" / "}
              {String(photos.length).padStart(2, "0")}
            </div>

            {/* IMAGE */}
            <motion.div
              key={activePhoto}
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative h-[82vh] w-full max-w-6xl"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <Image
                src={photos[activePhoto].src}
                alt={photos[activePhoto].title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* PREVIOUS */}
            <button
              type="button"
              aria-label="Photo précédente"
              onClick={(event) => {
                event.stopPropagation()
                previous()
              }}
              className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-black md:left-8"
            >
              <ChevronLeft size={20} />
            </button>

            {/* NEXT */}
            <button
              type="button"
              aria-label="Photo suivante"
              onClick={(event) => {
                event.stopPropagation()
                next()
              }}
              className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-black md:right-8"
            >
              <ChevronRight size={20} />
            </button>

            {/* TITRE */}
            <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 text-center">
              <p className="text-sm font-medium text-white">
                {photos[activePhoto].title}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}