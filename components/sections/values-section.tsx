"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { coreValues } from "@/lib/data/site"

const valueImages: Record<string, string> = {
  engagement: "/images/values/engagement.jpg",
  solidarite: "/images/values/solidarite.jpg",
  innovation: "/images/values/innovation.jpg",
  integrite: "/images/values/integrite.jpg",
  patriotisme: "/images/values/patriotisme.jpg",
  responsabilite: "/images/values/responsabilite.jpg",
}

export function ValuesSection() {
  return (
    <section className="bg-[#f7f8f6] py-24 md:py-32 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="grid gap-8 border-b border-gray-200 pb-10 dark:border-gray-800 lg:grid-cols-[1fr_420px] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-pah-green" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-pah-green">
                Nos fondements
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-3xl font-bold tracking-tight text-gray-950 md:text-5xl dark:text-white">
              Les valeurs qui orientent
              notre engagement.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400 lg:justify-self-end">
            Notre action repose sur des principes concrets qui
            orientent nos décisions, nos relations avec les
            communautés et notre travail au quotidien.
          </p>

        </div>

        {/* Values */}
        <div className="mt-12 grid gap-px overflow-hidden border border-gray-200 bg-gray-200 md:grid-cols-2 lg:grid-cols-3 dark:border-gray-800 dark:bg-gray-800">

          {coreValues.map((value, index) => {
            const image =
              valueImages[value.id] ??
              "/images/values/default.jpg"

            return (
              <motion.article
                key={value.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
                className="group bg-white dark:bg-gray-900"
              >

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">

                  <Image
                    src={image}
                    alt={value.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Numéro */}
                  <div className="absolute left-5 top-5">
                    <span className="bg-white px-3 py-2 text-[10px] font-bold tracking-[0.2em] text-gray-900">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                </div>

                {/* Content */}
                <div className="p-6 md:p-7">

                  <div className="mb-4 flex items-center justify-between">

                    <h3 className="font-heading text-xl font-bold text-gray-950 dark:text-white">
                      {value.title}
                    </h3>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-gray-200 text-gray-400 transition-colors group-hover:border-pah-green group-hover:text-pah-green dark:border-gray-700">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.6}
                      />
                    </span>

                  </div>

                  <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
                    {value.description}
                  </p>

                </div>

              </motion.article>
            )
          })}

        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:flex-row sm:items-center sm:justify-between">

          <span>
            Principes d'action
          </span>

          <span>
            Engagement · Intégrité · Solidarité
          </span>

        </div>

      </div>
    </section>
  )
}