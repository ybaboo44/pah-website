"use client"

import { missionVision } from "@/lib/data/site"

export function MissionVisionSection() {
  const items = [
    missionVision.mission,
    missionVision.vision,
  ]

  return (
    <section className="border-t border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-gray-950 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Notre raison d'être
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 bg-pah-green" />

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg">
            Notre mission et notre vision définissent notre engagement et
            orientent nos actions au service de nos communautés.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-0 border-y border-gray-200 dark:border-gray-800 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`px-6 py-10 md:px-10 md:py-12 ${
                index === 0
                  ? "md:border-r md:border-gray-200 dark:md:border-gray-800"
                  : ""
              }`}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-pah-green">
                {index === 0 ? "Mission" : "Vision"}
              </p>

              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                {item.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">
                {item.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}