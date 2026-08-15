"use client"

import { motion } from "framer-motion"

import { PageHeader } from "@/components/layout/page-header"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { programPillars } from "@/lib/data/site"

export default function ProgrammeClient() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* =========================================================
          HEADER
      ========================================================= */}

      <PageHeader
        title="Notre Programme"
        subtitle="Un programme structuré pour produire, transformer et construire une Haïti souveraine."
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
              label: "Notre Programme",
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
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Label */}

            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-pah-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-pah-green">
                Notre programme
              </span>

              <span className="h-px w-10 bg-pah-green" />
            </div>

            {/* Titre */}

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Produire.
              <span className="text-pah-green"> Transformer.</span>
              <br />
              Prospérer.
            </h1>

            {/* Description */}

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300 md:text-xl">
              Le Parti Agricole Haïtien propose une stratégie nationale fondée
              sur la production, la transformation locale, l'emploi,
              l'innovation et la valorisation des ressources d'Haïti.
            </p>

            {/* Accent */}

            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-pah-yellow" />
          </motion.div>
        </div>

        {/* Décorations */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-pah-green/5 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-pah-yellow/5 blur-3xl"
        />
      </section>

      {/* =========================================================
          CHIFFRES CLÉS
      ========================================================= */}

      <section className="border-y border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/40">
        <div className="container mx-auto px-4 py-12 md:py-14">
          <div className="mx-auto grid max-w-5xl divide-y divide-gray-200 dark:divide-gray-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {/* 01 */}

            <motion.div
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
              }}
              transition={{
                duration: 0.5,
              }}
              className="px-6 py-6 text-center sm:py-2"
            >
              <p className="font-heading text-4xl font-black text-pah-green md:text-5xl">
                12
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
                Piliers stratégiques
              </p>
            </motion.div>

            {/* 02 */}

            <motion.div
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
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="px-6 py-6 text-center sm:py-2"
            >
              <p className="font-heading text-4xl font-black text-pah-green md:text-5xl">
                1
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
                Ambition nationale
              </p>
            </motion.div>

            {/* 03 */}

            <motion.div
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
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="px-6 py-6 text-center sm:py-2"
            >
              <p className="font-heading text-4xl font-black text-pah-green md:text-5xl">
                2030
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
                Horizon stratégique
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PILIERS DU PROGRAMME
      ========================================================= */}

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          {/* =====================================================
              TITRE
          ===================================================== */}

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
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-pah-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-pah-green">
                Les piliers
              </span>

              <span className="h-px w-10 bg-pah-green" />
            </div>

            <h2 className="font-heading text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              Douze axes pour{" "}
              <span className="text-pah-green">
                transformer Haïti
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              Notre programme s'appuie sur douze axes complémentaires destinés
              à renforcer la production nationale, soutenir les populations et
              créer les conditions d'une croissance durable.
            </p>
          </motion.div>

          {/* =====================================================
              GRID
          ===================================================== */}

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programPillars.map((pillar, index) => (
              <motion.article
                key={pillar.id}
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
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
              >
                {/* Ligne couleur */}

                <div
                  className="h-1 w-full opacity-90"
                  style={{
                    backgroundColor: pillar.color,
                  }}
                />

                <div className="p-7 md:p-8">
                  {/* Numéro + catégorie */}

                  <div className="flex items-start justify-between">
                    <span
                      className="font-heading text-5xl font-black leading-none tracking-tight"
                      style={{
                        color: pillar.color,
                        opacity: 0.18,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Axe stratégique
                    </span>
                  </div>

                  {/* Petite ligne */}

                  <div
                    className="mt-6 h-1 w-10 transition-all duration-500 group-hover:w-16"
                    style={{
                      backgroundColor: pillar.color,
                    }}
                  />

                  {/* Titre */}

                  <h3 className="mt-6 font-heading text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    {pillar.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {pillar.description}
                  </p>

                  {/* Bas */}

                  <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-gray-800">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
                      Programme 2030
                    </span>

                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: pillar.color,
                      }}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROCHE
      ========================================================= */}

      <section className="relative overflow-hidden bg-pah-green-dark py-20 text-white md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
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
                className="lg:col-span-8"
              >
                {/* Label */}

                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-pah-yellow" />

                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-pah-yellow">
                    Notre engagement
                  </span>
                </div>

                {/* Titre */}

                <h2 className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  Un programme pensé pour passer de{" "}
                  <span className="text-pah-yellow">
                    la vision à l'action.
                  </span>
                </h2>

                {/* Texte */}

                <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
                  Le développement d'Haïti exige des politiques cohérentes,
                  des investissements responsables et une mobilisation de
                  toutes les forces productives du pays.
                </p>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
                  Notre ambition est de construire une économie capable de
                  créer des emplois, de valoriser les ressources nationales et
                  de renforcer progressivement la capacité du pays à répondre
                  à ses propres besoins.
                </p>
              </motion.div>

              {/* =================================================
                  BLOC 2030
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
                className="relative lg:col-span-4"
              >
                {/* Cadre */}

                <div className="absolute -bottom-3 -right-3 h-full w-full border border-white/10" />

                {/* Contenu */}

                <div className="relative border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
                  <span className="font-heading text-7xl font-black leading-none text-white/10">
                    2030
                  </span>

                  <div className="mt-6 h-px w-full bg-white/15" />

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-pah-yellow">
                    Horizon stratégique
                  </p>

                  <p className="mt-4 text-lg font-medium leading-8 text-white">
                    Produire davantage.
                    <br />
                    Transformer localement.
                    <br />
                    Créer durablement.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Décorations */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-pah-yellow/5 blur-3xl"
        />
      </section>

      {/* =========================================================
          CONCLUSION
      ========================================================= */}

      <section className="bg-gray-50 py-20 dark:bg-gray-900/40 md:py-24">
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
              Une ambition nationale
            </p>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl">
              Construire une Haïti{" "}
              <span className="text-pah-green">
                productive, souveraine et durable.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
              Le programme du Parti Agricole Haïtien place la production,
              l'emploi, la transformation locale et la responsabilité au cœur
              d'une nouvelle ambition nationale.
            </p>

            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-pah-yellow" />
          </motion.div>
        </div>
      </section>
    </main>
  )
}