"use client"

import Link from "next/link"
import { programPillars } from "@/lib/data/site"

export function ProgramSection() {
  if (!programPillars || programPillars.length === 0) {
    return null
  }

  return (
    <section
      className="border-t border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-gray-950 md:py-24"
      aria-labelledby="program-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-pah-green">
            Notre programme
          </p>

          <h2
            id="program-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl"
          >
            Douze piliers pour transformer l'agriculture haïtienne
          </h2>

          <div
            className="mx-auto mt-5 h-1 w-16 bg-pah-green"
            aria-hidden="true"
          />

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg">
            Un programme structuré pour moderniser l'agriculture, soutenir les
            producteurs, protéger les ressources naturelles et renforcer les
            communautés rurales.
          </p>
        </header>

        {/* Piliers du programme */}
        <div className="mx-auto mt-14 max-w-7xl">
          <div className="grid border-t border-gray-200 dark:border-gray-800 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {programPillars.map((pillar, index) => (
              <article
                key={pillar.id}
                className={[
                  "group",
                  "border-b border-gray-200",
                  "px-6 py-8",
                  "dark:border-gray-800",
                  "md:px-7",
                  "transition-colors duration-200",
                  "hover:bg-gray-50 dark:hover:bg-gray-900/50",

                  // Bordures à partir de sm
                  index % 2 !== 1
                    ? "sm:border-r"
                    : "sm:border-r-0",

                  // Bordures à partir de lg
                  index % 3 !== 2
                    ? "lg:border-r"
                    : "lg:border-r-0",

                  // Bordures à partir de xl
                  index % 4 !== 3
                    ? "xl:border-r"
                    : "xl:border-r-0",
                ].join(" ")}
              >
                {/* Numéro + indicateur */}
                <div className="flex items-start justify-between">
                  <span
                    className="font-heading text-sm font-bold text-pah-green"
                    aria-label={`Pilier ${index + 1}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {pillar.color ? (
                    <span
                      aria-hidden="true"
                      className="mt-1 h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: pillar.color,
                      }}
                    />
                  ) : null}
                </div>

                {/* Titre */}
                <h3 className="mt-6 font-heading text-lg font-bold leading-snug text-gray-900 dark:text-white">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {pillar.description}
                </p>

                {/* Ligne décorative */}
                <div
                  className="mt-6 h-px w-8 bg-gray-300 transition-all duration-200 group-hover:w-12 group-hover:bg-pah-green dark:bg-gray-700"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="mt-12 text-center">
          <Link
            href="/programme/"
            className="inline-flex min-h-11 items-center justify-center bg-pah-green px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-pah-green-dark focus:outline-none focus:ring-2 focus:ring-pah-green focus:ring-offset-2 dark:focus:ring-offset-gray-950"
          >
            <span>Voir le programme complet</span>

            <span
              aria-hidden="true"
              className="ml-3 text-lg leading-none transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}