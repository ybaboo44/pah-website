"use client"

import Link from "next/link"

const actions = [
  {
    label: "Rejoignez-nous",
    title: "Adhérez au PAH",
    description:
      "Devenez membre du PAH et participez activement à la transformation agricole d'Haïti.",
    href: "/adherer/",
    button: "Adhérer maintenant",
    style:
      "bg-pah-green text-white hover:bg-pah-green/90",
  },
  {
    label: "Soutenez notre action",
    title: "Faites un don",
    description:
      "Votre soutien contribue au financement de nos programmes et de nos actions en faveur du développement agricole.",
    href: "/don/",
    button: "Faire un don",
    style:
      "bg-pah-yellow text-pah-text hover:bg-pah-yellow/90",
  },
  {
    label: "Notre programme",
    title: "Découvrez nos engagements",
    description:
      "Consultez notre programme et découvrez nos propositions pour l'avenir de l'agriculture haïtienne.",
    href: "/programme/",
    button: "Voir le programme",
    style:
      "border border-pah-green bg-transparent text-pah-green hover:bg-pah-green hover:text-white",
  },
]

export function CTASection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-900 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-pah-green">
            Participez à l'action
          </p>

          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Agissons ensemble
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 bg-pah-green" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg">
            Chaque engagement compte. Découvrez les différentes façons de
            contribuer à la transformation agricole d'Haïti.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl border-y border-gray-200 dark:border-gray-800 md:grid-cols-3">
          {actions.map((action, index) => (
            <article
              key={action.title}
              className={`flex flex-col px-6 py-10 md:px-8 md:py-12 ${
                index < actions.length - 1
                  ? "border-b border-gray-200 dark:border-gray-800 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
                {action.label}
              </p>

              <h3 className="mt-3 font-heading text-2xl font-bold text-gray-900 dark:text-white">
                {action.title}
              </h3>

              <p className="mt-4 flex-1 text-base leading-7 text-gray-600 dark:text-gray-400">
                {action.description}
              </p>

              <div className="mt-8">
                <Link
                  href={action.href}
                  className={`inline-flex min-h-11 items-center justify-center px-5 py-3 text-sm font-semibold transition-colors duration-200 ${action.style}`}
                >
                  {action.button}
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}