"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { PageHeader } from "@/components/layout/page-header"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { coreValues } from "@/lib/data/site"

export default function ValuesClient() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* =========================================================
          HEADER
      ========================================================= */}

      <PageHeader
        title="Nos Valeurs"
        subtitle="Les principes qui guident notre engagement pour Haïti."
      />

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}

      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            {
              label: "À propos",
              href: "/a-propos/",
            },
            {
              label: "Nos Valeurs",
            },
          ]}
        />
      </div>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Label */}

            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-pah-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-pah-green">
                Nos valeurs
              </span>

              <span className="h-px w-10 bg-pah-green" />
            </div>

            {/* Titre */}

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Des principes au service de{" "}
              <span className="text-pah-green">Haïti</span>
            </h1>

            {/* Description */}

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300 md:text-xl">
              Notre engagement repose sur des principes clairs qui orientent
              notre vision, nos décisions et notre action au service de la
              population haïtienne.
            </p>

            {/* Accent */}

            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-pah-yellow" />
          </motion.div>
        </div>

        {/* Décorations */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-pah-green/5 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-pah-yellow/5 blur-3xl"
        />
      </section>

      {/* =========================================================
          NOS VALEURS
      ========================================================= */}

      <section className="border-y border-gray-100 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-900/40 md:py-28">
        <div className="container mx-auto px-4">
          {/* =====================================================
              TITRE SECTION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-pah-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-pah-green">
                Nos engagements
              </span>

              <span className="h-px w-10 bg-pah-green" />
            </div>

            <h2 className="font-heading text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              Les valeurs qui{" "}
              <span className="text-pah-green">nous guident</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              Ces principes constituent le socle de notre engagement et
              doivent guider la construction d'une société plus juste,
              productive et responsable.
            </p>
          </motion.div>

          {/* =====================================================
              GRILLE DES VALEURS
          ===================================================== */}

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <motion.article
                key={value.id}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group relative overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-pah-green/40 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
              >
                {/* Ligne supérieure */}

                <div className="h-1 w-full bg-pah-green" />

                <div className="p-8 md:p-9">
                  {/* Numéro */}

                  <div className="flex items-center justify-between">
                    <span className="font-heading text-4xl font-black tracking-tight text-gray-100 dark:text-gray-900">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-pah-green">
                      Engagement
                    </span>
                  </div>

                  {/* Petite ligne */}

                  <div className="mt-6 h-px w-12 bg-pah-yellow transition-all duration-500 group-hover:w-20" />

                  {/* Titre */}

                  <h3 className="mt-7 font-heading text-2xl font-bold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>

                  {/* Bas de carte */}

                  <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-gray-800">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-gray-400">
                      Parti Agricole Haïtien
                    </span>

                    <span className="h-2 w-2 rounded-full bg-pah-green" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          NOTRE ENGAGEMENT
      ========================================================= */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-gray-950 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
              {/* =================================================
                  TEXTE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="lg:col-span-7"
              >
                {/* Label */}

                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-pah-green" />

                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-pah-green">
                    Notre engagement
                  </span>
                </div>

                {/* Titre */}

                <h2 className="mt-5 max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                  Les valeurs doivent devenir{" "}
                  <span className="text-pah-green">des actions.</span>
                </h2>

                {/* Texte */}

                <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
                  <p>
                    Une vision politique ne peut être crédible que lorsqu'elle
                    repose sur des principes clairs et sur la volonté de les
                    traduire en actions concrètes.
                  </p>

                  <p>
                    Pour le Parti Agricole Haïtien, servir Haïti signifie placer
                    l'intérêt national, le travail, la responsabilité et la
                    solidarité au cœur de l'action publique.
                  </p>

                  <p>
                    Ces valeurs doivent se retrouver dans les décisions
                    publiques, dans la gestion des ressources nationales et
                    dans les relations entre les institutions et les citoyens.
                  </p>
                </div>

                {/* CTA */}

                <div className="mt-9">
                  <Link
                    href="/vision/"
                    className="group inline-flex items-center gap-3 border-b-2 border-pah-green pb-2 text-sm font-bold text-pah-green transition-all duration-300 hover:gap-5"
                  >
                    Découvrir notre vision

                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>

              {/* =================================================
                  BLOC RESPONSABILITÉ
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="relative lg:col-span-5"
              >
                {/* Cadre décoratif */}

                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 h-full w-full border border-pah-green/20"
                />

                {/* Bloc */}

                <div className="relative overflow-hidden bg-pah-green-dark p-8 text-white shadow-xl md:p-10">
                  {/* Numéro */}

                  <div className="flex items-start justify-between">
                    <span className="font-heading text-6xl font-black leading-none text-white/10">
                      01
                    </span>

                    <span className="mt-2 h-3 w-3 rounded-full bg-pah-yellow" />
                  </div>

                  {/* Titre */}

                  <h3 className="mt-8 font-heading text-2xl font-bold md:text-3xl">
                    Une responsabilité collective
                  </h3>

                  {/* Texte */}

                  <p className="mt-5 leading-8 text-white/75">
                    Le développement d'Haïti repose sur la participation de
                    tous : citoyens, entrepreneurs, agriculteurs, jeunes,
                    professionnels, institutions et acteurs de la société
                    civile.
                  </p>

                  {/* Ligne */}

                  <div className="mt-8 h-px w-full bg-white/15" />

                  {/* Signature */}

                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-pah-yellow">
                      Notre engagement
                    </p>

                    <p className="mt-3 font-heading text-lg font-bold">
                      Travail • Responsabilité • Solidarité
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Décoration */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-pah-green/5 blur-3xl"
        />
      </section>

      {/* =========================================================
          BANDEAU FINAL
      ========================================================= */}

      <section className="border-t border-gray-100 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-pah-green">
              Notre conviction
            </p>

            <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl">
              Une Haïti plus juste, plus productive et plus responsable.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              Nos valeurs ne sont pas seulement des principes. Elles doivent
              guider notre manière de servir, de décider et de construire
              l'avenir du pays.
            </p>

            <div className="mx-auto mt-7 h-1 w-14 rounded-full bg-pah-yellow" />
          </motion.div>
        </div>
      </section>
    </main>
  )
}