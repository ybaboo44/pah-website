"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { heroSlides } from "@/lib/data/site"

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  const totalSlides = heroSlides.length

  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return

    setCurrent((previous) => (previous + 1) % totalSlides)
  }, [totalSlides])

  const previousSlide = useCallback(() => {
    if (totalSlides <= 1) return

    setCurrent(
      (previous) => (previous - 1 + totalSlides) % totalSlides
    )
  }, [totalSlides])

  const goToSlide = useCallback(
    (index: number) => {
      if (totalSlides <= 1) return

      setCurrent((index + totalSlides) % totalSlides)
    },
    [totalSlides]
  )

  useEffect(() => {
    if (totalSlides <= 1) return

    const timer = window.setInterval(() => {
      nextSlide()
    }, 7000)

    return () => {
      window.clearInterval(timer)
    }
  }, [nextSlide, totalSlides])

  if (totalSlides === 0) {
    return null
  }

  const slide = heroSlides[current]

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-gray-900 md:min-h-[700px] lg:min-h-[760px]">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority={current === 0}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Contraste pour la lisibilité */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-pah-green-dark/90 via-pah-green-dark/55 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex min-h-[620px] items-center md:min-h-[700px] lg:min-h-[760px]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-pah-yellow">
              Parti Agricole Haïtien
            </p>

            <h1 className="max-w-3xl whitespace-pre-line font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg md:text-xl md:leading-8">
              {slide.subtitle}
            </p>

            {slide.cta && slide.cta.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {slide.cta.map((cta, index) => (
                  <Link
                    key={`${cta.href}-${index}`}
                    href={cta.href}
                    className={
                      cta.variant === "primary"
                        ? "inline-flex min-h-12 items-center justify-center bg-pah-yellow px-7 py-3 text-sm font-semibold text-pah-text transition-colors duration-200 hover:bg-pah-yellow/90"
                        : "inline-flex min-h-12 items-center justify-center border border-white/60 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/15"
                    }
                  >
                    {cta.label}

                    <span
                      aria-hidden="true"
                      className="ml-3 text-lg leading-none"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      {totalSlides > 1 && (
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container mx-auto flex items-center justify-between px-4">
            {/* Indicateurs */}
            <div className="flex items-center gap-2">
              {heroSlides.map((slideItem, index) => (
                <button
                  key={`${slideItem.title}-${index}`}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Afficher la diapositive ${index + 1}`}
                  aria-current={index === current ? "true" : undefined}
                  className={`h-1.5 transition-all duration-300 ${
                    index === current
                      ? "w-10 bg-pah-yellow"
                      : "w-6 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* Boutons précédent / suivant */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Diapositive précédente"
                className="flex h-10 w-10 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/15"
              >
                <span
                  aria-hidden="true"
                  className="text-xl leading-none"
                >
                  ←
                </span>
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Diapositive suivante"
                className="flex h-10 w-10 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/15"
              >
                <span
                  aria-hidden="true"
                  className="text-xl leading-none"
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}