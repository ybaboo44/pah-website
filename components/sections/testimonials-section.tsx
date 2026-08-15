"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Quote } from "lucide-react"

import { testimonials } from "@/lib/data/site"

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  if (!testimonials?.length) {
    return null
  }

  const visibleTestimonials = testimonials.slice(
    active,
    active + 3
  )

  const displayed =
    visibleTestimonials.length === 3
      ? visibleTestimonials
      : [
          ...visibleTestimonials,
          ...testimonials.slice(
            0,
            3 - visibleTestimonials.length
          ),
        ]

  return (
    <section className="bg-white py-24 md:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 border-b border-gray-200 pb-10 md:flex-row md:items-end md:justify-between dark:border-gray-800">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-pah-green" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-pah-green">
                Témoignages
              </span>
            </div>

            <h2 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-gray-950 md:text-5xl dark:text-white">
              La parole à celles et ceux
              qui font vivre nos actions.
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
              Des témoignages issus du terrain,
              de nos communautés et de nos
              partenaires.
            </p>
          </div>

        </div>

        {/* Testimonials */}
        <div className="grid gap-5 md:grid-cols-3">

          {displayed.map((testimonial, index) => {
            const originalIndex =
              testimonials.indexOf(testimonial)

            const isActive =
              originalIndex === active

            return (
              <motion.article
                key={`${testimonial.name}-${originalIndex}`}
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
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                }}
                onClick={() =>
                  setActive(originalIndex)
                }
                className={`group flex cursor-pointer flex-col border p-6 transition-colors duration-200 md:p-7 ${
                  isActive
                    ? "border-pah-green bg-pah-green"
                    : "border-gray-200 bg-white hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
                }`}
              >

                {/* Top */}
                <div className="mb-8 flex items-center justify-between">

                  <Quote
                    size={25}
                    strokeWidth={1.4}
                    className={
                      isActive
                        ? "text-white/70"
                        : "text-pah-green"
                    }
                  />

                  <span
                    className={`text-[9px] font-bold tracking-[0.2em] ${
                      isActive
                        ? "text-white/50"
                        : "text-gray-400"
                    }`}
                  >
                    {String(originalIndex + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                </div>

                {/* Content */}
                <p
                  className={`flex-1 text-[15px] leading-7 ${
                    isActive
                      ? "text-white"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  « {testimonial.content} »
                </p>

                {/* Author */}
                <div
                  className={`mt-9 flex items-center gap-4 border-t pt-6 ${
                    isActive
                      ? "border-white/15"
                      : "border-gray-100 dark:border-gray-800"
                  }`}
                >

                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">

                    <p
                      className={`truncate text-sm font-semibold ${
                        isActive
                          ? "text-white"
                          : "text-gray-950 dark:text-white"
                      }`}
                    >
                      {testimonial.name}
                    </p>

                    <p
                      className={`mt-1 truncate text-xs ${
                        isActive
                          ? "text-white/55"
                          : "text-gray-500"
                      }`}
                    >
                      {testimonial.role}
                    </p>

                  </div>

                </div>

              </motion.article>
            )
          })}

        </div>

        {/* Footer navigation */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6 dark:border-gray-800">

          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={`${testimonial.name}-${index}`}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Témoignage ${index + 1}`}
                className={`h-1 transition-all duration-200 ${
                  index === active
                    ? "w-8 bg-pah-green"
                    : "w-3 bg-gray-300 hover:bg-gray-500 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setActive(
                active === testimonials.length - 1
                  ? 0
                  : active + 1
              )
            }
            className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-700 transition-colors hover:text-pah-green dark:text-gray-300"
          >
            Témoignage suivant

            <span className="flex h-9 w-9 items-center justify-center border border-gray-200 transition-colors group-hover:border-pah-green dark:border-gray-800">
              <ArrowRight
                size={15}
                strokeWidth={1.7}
              />
            </span>
          </button>

        </div>

      </div>
    </section>
  )
}