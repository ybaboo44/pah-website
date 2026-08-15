"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, Target } from "lucide-react"

import { PageHeader } from "@/components/layout/page-header"
import { Breadcrumb } from "@/components/layout/breadcrumb"

/* =========================================================
   DONNÉES — QUATRE PILIERS
========================================================= */

const pillars = [
  {
    number: "01",
    image: "/images/vision/agriculture.jpg",
    title: "Produire",
    description:
      "Renforcer la production nationale et faire de l'agriculture un moteur de croissance économique.",
  },
  {
    number: "02",
    image: "/images/vision/industrie.jpg",
    title: "Transformer",
    description:
      "Développer la transformation locale pour créer davantage de valeur, d'emplois et d'opportunités.",
  },
  {
    number: "03",
    image: "/images/vision/emploi.jpg",
    title: "Créer des emplois",
    description:
      "Soutenir l'entrepreneuriat, l'investissement et les initiatives capables de générer des emplois durables.",
  },
  {
    number: "04",
    image: "/images/vision/souverainete.jpg",
    title: "Souveraineté",
    description:
      "Renforcer la capacité d'Haïti à produire, nourrir sa population et construire son avenir avec ses propres ressources.",
  },
]

/* =========================================================
   DONNÉES — PRIORITÉS
========================================================= */

const priorities = [
  {
    image: "/images/priority/agriculture.jpg",
    title: "Agriculture",
    description:
      "Moderniser l'agriculture et accompagner les producteurs vers une production plus efficace et durable.",
  },
  {
    image: "/images/priority/industrie.jpg",
    title: "Industrie locale",
    description:
      "Transformer localement nos matières premières et développer des chaînes de valeur nationales.",
  },
  {
    image: "/images/priority/jeunesse.jpg",
    title: "Jeunesse",
    description:
      "Donner aux jeunes les compétences, la formation et les opportunités nécessaires pour bâtir leur avenir.",
  },
  {
    image: "/images/priority/entrepreneuriat.jpg",
    title: "Entrepreneuriat",
    description:
      "Créer un environnement favorable aux entreprises, à l'investissement et à l'innovation.",
  },
  {
    image: "/images/priority/environnement.jpg",
    title: "Environnement",
    description:
      "Protéger les ressources naturelles et promouvoir un développement économique responsable.",
  },
  {
    image: "/images/priority/institutions.jpg",
    title: "Institutions",
    description:
      "Renforcer les institutions publiques, la responsabilité et la confiance entre l'État et les citoyens.",
  },
]

/* =========================================================
   OBJECTIFS
========================================================= */

const objectives = [
  "Renforcer la production agricole nationale",
  "Réduire la dépendance aux importations alimentaires",
  "Créer des emplois dans les territoires",
  "Développer la transformation des produits locaux",
  "Accompagner les jeunes entrepreneurs",
  "Protéger les ressources naturelles d'Haïti",
]

/* =========================================================
   PAGE
========================================================= */

export default function VisionClient() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <PageHeader
        title="Notre Vision"
        subtitle="Construire une Haïti productive, souveraine et prospère."
      />

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            {
              label: "À propos",
              href: "/a-propos/",
            },
            {
              label: "Notre Vision",
            },
          ]}
        />
      </div>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >

            {/* LABEL */}

            <div className="mb-5 flex items-center justify-center gap-4">

              <span className="h-px w-10 bg-pah-green" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pah-green">
                Notre vision
              </span>

              <span className="h-px w-10 bg-pah-green" />

            </div>

            {/* TITRE */}

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">

              Une Haïti qui{" "}

              <span className="text-pah-green">
                produit
              </span>
              , transforme et avance.

            </h1>

            {/* DESCRIPTION */}

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300 md:text-xl">
              Le Parti Agricole Haïtien porte une vision fondée sur la
              production nationale, la création d'emplois, la valorisation des
              ressources du pays et le développement des territoires.
            </p>

            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-pah-yellow" />

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          NOTRE APPROCHE
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-gray-100 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-900/40 md:py-28">

        <div className="container mx-auto px-4">

          {/* INTRODUCTION */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >

            <div className="mb-5 flex items-center justify-center gap-4">

              <span className="h-px w-10 bg-pah-green" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pah-green">
                Notre approche
              </span>

              <span className="h-px w-10 bg-pah-green" />

            </div>

            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">

              Quatre piliers pour{" "}

              <span className="text-pah-green">
                transformer durablement
              </span>{" "}

              le pays

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">

              Notre vision repose sur quatre engagements fondamentaux :
              <span className="font-semibold text-gray-900 dark:text-white">
                {" "}produire davantage
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                transformer localement
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                créer des emplois
              </span>{" "}
              et{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                renforcer la souveraineté nationale
              </span>
              .

            </p>

            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-pah-yellow" />

          </motion.div>

          {/* =================================================
              PILIERS — PHOTOS
          ================================================= */}

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {pillars.map((pillar, index) => (

              <motion.article
                key={pillar.number}
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
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pah-green/30 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >

                {/* PHOTO */}

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* NUMÉRO */}

                  <span className="absolute bottom-4 left-5 font-heading text-4xl font-bold text-white/90">
                    {pillar.number}
                  </span>

                </div>

                {/* CONTENU */}

                <div className="p-7">

                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {pillar.description}
                  </p>

                </div>

                {/* LIGNE VERTE */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-pah-green transition-all duration-300 group-hover:w-full" />

              </motion.article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          HORIZON 2030
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 md:py-32">

        <div className="container mx-auto px-4">

          <div className="mx-auto max-w-6xl">

            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">

              {/* =================================================
                  ANNÉE 2030
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
                className="lg:col-span-4"
              >

                <div className="relative">

                  <p
                    aria-hidden="true"
                    className="font-heading text-[90px] font-black leading-none tracking-[-0.08em] text-gray-100 dark:text-gray-900 md:text-[130px]"
                  >
                    2030
                  </p>

                  <div className="relative -mt-10 ml-4 border-l-4 border-pah-green pl-6 md:-mt-14 md:ml-8">

                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-pah-green">
                      Horizon stratégique
                    </span>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Une vision à long terme pour une économie nationale plus
                      productive, plus forte et plus indépendante.
                    </p>

                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  CONTENU HORIZON
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
                className="lg:col-span-8"
              >

                {/* LABEL */}

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-pah-green" />

                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pah-green">
                    Horizon 2030
                  </span>

                </div>

                {/* TITRE */}

                <h2 className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">

                  Construire une économie qui repose sur{" "}

                  <span className="text-pah-green">
                    nos propres forces.
                  </span>

                </h2>

                {/* TEXTE */}

                <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">

                  <p>
                    Le développement durable d'Haïti doit commencer par notre
                    capacité à{" "}

                    <strong className="font-semibold text-gray-900 dark:text-white">
                      produire, transformer nos ressources et créer de la valeur
                    </strong>{" "}

                    sur notre propre territoire.
                  </p>

                  <p>
                    L'agriculture constitue un point de départ essentiel. Elle
                    doit cependant être accompagnée par{" "}

                    <strong className="font-semibold text-gray-900 dark:text-white">
                      l'industrie, l'éducation, l'entrepreneuriat
                    </strong>{" "}

                    et des institutions capables de soutenir cette transformation.
                  </p>

                </div>

                {/* SÉPARATEUR */}

                <div className="my-8 h-px max-w-3xl bg-gray-200 dark:bg-gray-800" />

                {/* ENGAGEMENTS */}

                <div className="grid gap-5 sm:grid-cols-3">

                  <div className="border-l-2 border-pah-green pl-4">

                    <p className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                      Produire
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Renforcer notre capacité productive.
                    </p>

                  </div>

                  <div className="border-l-2 border-pah-yellow pl-4">

                    <p className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                      Transformer
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Créer de la valeur localement.
                    </p>

                  </div>

                  <div className="border-l-2 border-pah-green-dark pl-4">

                    <p className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                      Prospérer
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Construire une économie durable.
                    </p>

                  </div>

                </div>

                {/* CTA PROGRAMME */}

                <div className="mt-9">

                  <Link
                    href="/programme/"
                    className="inline-flex items-center rounded-xl bg-pah-green px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pah-green/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pah-green-dark hover:shadow-xl"
                  >
                    Découvrir notre programme
                  </Link>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

        {/* DÉCORATION */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-pah-green/5 blur-3xl"
        />

      </section>

      {/* =====================================================
          OBJECTIFS PRIORITAIRES
      ===================================================== */}

      <section className="bg-pah-green-dark py-20 text-white md:py-24">

        <div className="container mx-auto px-4">

          <div className="mx-auto max-w-5xl">

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
              className="mb-12 text-center"
            >

              <div className="mb-5 flex items-center justify-center gap-4">

                <span className="h-px w-10 bg-pah-yellow" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pah-yellow">
                  Nos objectifs
                </span>

                <span className="h-px w-10 bg-pah-yellow" />

              </div>

              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Des engagements qui doivent produire des résultats
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
                Notre vision doit se traduire par des actions concrètes,
                mesurables et utiles à la population.
              </p>

            </motion.div>

            <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">

              {objectives.map((objective, index) => (

                <motion.div
                  key={objective}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -15 : 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="flex items-start gap-4 border-b border-white/10 pb-5"
                >

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-pah-yellow"
                  />

                  <span className="text-sm leading-7 text-white/85 md:text-base">
                    {objective}
                  </span>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NOS PRIORITÉS
      ===================================================== */}

      <section className="bg-gray-50 py-20 dark:bg-gray-900/40 md:py-28">

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
            className="mx-auto mb-14 max-w-3xl text-center"
          >

            <div className="mb-5 flex items-center justify-center gap-4">

              <span className="h-px w-10 bg-pah-green" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pah-green">
                Nos priorités
              </span>

              <span className="h-px w-10 bg-pah-green" />

            </div>

            <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Les secteurs qui doivent porter la transformation
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
              Une transformation nationale ne peut reposer sur un seul
              secteur. Elle doit s'appuyer sur une stratégie cohérente,
              complémentaire et durable.
            </p>

          </motion.div>

          {/* =================================================
              GRILLE DES PRIORITÉS — PHOTOS
          ================================================= */}

          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {priorities.map((priority, index) => (

              <motion.article
                key={priority.title}
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
                  margin: "-40px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
              >

                {/* PHOTO */}

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={priority.image}
                    alt={priority.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* TITRE */}

                  <h3 className="absolute bottom-5 left-6 right-6 font-heading text-xl font-bold text-white">
                    {priority.title}
                  </h3>

                </div>

                {/* DESCRIPTION */}

                <div className="p-6">

                  <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {priority.description}
                  </p>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          MESSAGE DU PRÉSIDENT
      ===================================================== */}

      <section className="border-t border-gray-100 bg-white py-20 dark:border-gray-800 dark:bg-gray-950 md:py-28">

        <div className="container mx-auto px-4">

          <div className="mx-auto max-w-6xl">

            {/* TITRE */}

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
              className="mb-14 text-center"
            >

              <div className="mb-5 flex items-center justify-center gap-4">

                <span className="h-px w-10 bg-pah-green" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pah-green">
                  Message du Président
                </span>

                <span className="h-px w-10 bg-pah-green" />

              </div>

              <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Une vision pour une Haïti productive
              </h2>

            </motion.div>

            {/* CONTENU */}

            <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">

              {/* =================================================
                  PHOTO PRÉSIDENT
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
                className="lg:col-span-2"
              >

                <div className="relative mx-auto max-w-md">

                  {/* CADRE DÉCORATIF */}

                  <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-pah-green/10" />

                  {/* PHOTO */}

                  <div className="relative overflow-hidden rounded-3xl bg-gray-200 shadow-2xl dark:bg-gray-800">

                    <div className="relative aspect-[4/5]">

                      <Image
                        src="/images/president.jpg"
                        alt="Michel Clérié, Président du Parti Agricole Haïtien"
                        fill
                        priority
                        sizes="(max-width: 1024px) 90vw, 40vw"
                        className="object-cover"
                      />

                    </div>

                  </div>

                  {/* IDENTIFICATION */}

                  <div className="relative mx-6 -mt-10 rounded-2xl bg-white p-5 text-center shadow-xl dark:bg-gray-900">

                    <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                      Michel Clérié
                    </h3>

                    <p className="mt-1 text-sm font-medium text-pah-green">
                      Président du Parti Agricole Haïtien
                    </p>

                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  MESSAGE
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
                className="lg:col-span-3"
              >

                <div className="relative">

                  {/* GUILLEMETS */}

                  <div className="absolute -left-2 -top-8 font-serif text-7xl leading-none text-pah-green/10 md:-left-6">
                    “
                  </div>

                  <div className="relative">

                    <p className="text-xl font-medium leading-9 text-gray-800 dark:text-gray-200 md:text-2xl md:leading-10">
                      Haïti possède les ressources, les talents et
                      l'intelligence nécessaires pour construire son propre
                      avenir. Notre responsabilité est de créer les conditions
                      permettant à chaque citoyen de participer pleinement au
                      développement de notre pays.
                    </p>

                    <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                      Nous devons remettre la production nationale au cœur de
                      notre projet de société. Une nation qui produit est une
                      nation qui crée des emplois, valorise ses ressources et
                      renforce son indépendance.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                      L'agriculture, l'industrie, l'éducation, la jeunesse et
                      l'entrepreneuriat doivent avancer ensemble. Notre
                      ambition est de construire une Haïti où le travail, la
                      responsabilité et l'innovation deviennent les fondements
                      d'un développement durable et inclusif.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                      Le changement ne viendra pas uniquement des institutions.
                      Il viendra également de notre capacité collective à
                      travailler, produire, entreprendre et croire en notre
                      pays.
                    </p>

                    {/* SIGNATURE */}

                    <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">

                      <p className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                        Michel Clérié
                      </p>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Président du Parti Agricole Haïtien
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}