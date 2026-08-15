"use client"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import PageHeader from "@/components/layout/page-header"
import Breadcrumb from "@/components/layout/breadcrumb"

// NOTE : Les métadonnées ne fonctionnent pas dans un "use client".
// Si vous en avez besoin, extrayez-les dans un layout.tsx séparé
// ou utilisez le fichier metadata.ts à côté de page.tsx.
// Pour l'instant, je les commente pour que le build passe :
// export const metadata = { ... }

export default function AboutPage() {
  const missions = [
    "la relance de la production agricole nationale",
    "la sécurité et la souveraineté alimentaires",
    "la modernisation de l'agriculture et de l'élevage",
    "le développement des infrastructures rurales",
    "l'accompagnement des agriculteurs et des producteurs",
    "la création d'emplois et d'opportunités économiques",
    "la promotion de l'entrepreneuriat national",
    "l'investissement dans la jeunesse et l'éducation",
    "la protection de l'environnement et des ressources naturelles",
    "le développement équilibré des départements et des collectivités territoriales",
    "le renforcement des institutions de la République",
    "la promotion d'une gouvernance responsable, transparente et au service des citoyens",
  ]

  const priorities = [
    {
      number: "01",
      title: "Agriculture et production nationale",
      desc:
        "Faire de l'agriculture un moteur de croissance, de création d'emplois et de souveraineté nationale.",
      image: "/images/about/agriculture.jpg",
    },
    {
      number: "02",
      title: "Transformation et industrialisation",
      desc:
        "Encourager la transformation locale des matières premières et développer des chaînes de valeur nationales.",
      image: "/images/about/industrie.jpg",
    },
    {
      number: "03",
      title: "Jeunesse et éducation",
      desc:
        "Donner à la jeunesse les compétences, les outils et les opportunités nécessaires pour participer au développement du pays.",
      image: "/images/about/jeunesse.jpg",
    },
    {
      number: "04",
      title: "Emploi et entrepreneuriat",
      desc:
        "Créer un environnement favorable à l'investissement, aux entreprises locales et à la création d'emplois.",
      image: "/images/about/entrepreneuriat.jpg",
    },
    {
      number: "05",
      title: "Environnement",
      desc:
        "Protéger les ressources naturelles et promouvoir un modèle de développement durable.",
      image: "/images/about/environnement.jpg",
    },
    {
      number: "06",
      title: "Gouvernance et institutions",
      desc:
        "Œuvrer au renforcement de l'État, de ses institutions et de la confiance entre les citoyens et les pouvoirs publics.",
      image: "/images/about/gouvernance.jpg",
    },
  ]

  const values = [
    "Travail",
    "Patriotisme",
    "Intégrité",
    "Solidarité",
    "Responsabilité",
    "Justice",
    "Production",
    "Souveraineté",
    "Développement durable",
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* HEADER */}
      <PageHeader
        title="À propos du PAH"
        subtitle="Construire une Haïti productive, souveraine et prospère."
        backgroundImage="/images/about/agriculture-header.jpg"
      />

      {/* BREADCRUMB */}
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "À propos" }]} />
      </div>

      {/* PRÉSENTATION */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full bg-pah-green/10 px-4 py-1 text-sm font-medium text-pah-green">
                Présentation
              </span>

              <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Une organisation politique au service de la production
                nationale
              </h2>

              <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
                <p>
                  Le Parti Agricole Haïtien (PAH) est une organisation
                  politique haïtienne fondée autour d'une conviction
                  essentielle : le développement durable d'Haïti doit
                  s'appuyer sur ses propres ressources, sa production
                  nationale, son agriculture, sa jeunesse et la capacité de
                  son peuple à créer de la richesse.
                </p>

                <p>
                  Le PAH porte une vision politique qui place l'agriculture et
                  la production nationale au cœur du développement économique
                  et social d'Haïti.
                </p>

                <p>
                  Notre ambition est de contribuer à la construction d'un État
                  plus efficace, d'une économie plus productive et d'une
                  société dans laquelle chaque citoyen peut participer
                  pleinement au développement de son pays.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-2xl dark:bg-gray-800">
                <Image
                  src="/images/about/agriculture.jpg"
                  alt="Agriculture et production nationale en Haïti"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-pah-yellow p-6 text-pah-text shadow-xl">
                <div className="font-heading text-3xl font-bold">PAH</div>
                <div className="mt-1 text-sm font-medium">
                  Parti Agricole Haïtien
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NOTRE MISSION */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-pah-green/10 px-4 py-1 text-sm font-medium text-pah-green">
              Notre Mission
            </span>

            <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Proposer et défendre une alternative politique
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              La mission du Parti Agricole Haïtien est de proposer et de
              défendre une alternative politique fondée sur :
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {missions.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.4,
                }}
                className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-pah-green"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE ENGAGEMENT */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full bg-pah-yellow/10 px-4 py-1 text-sm font-medium text-pah-yellow">
                Notre Engagement
              </span>

              <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                La transformation d'Haïti par l'engagement collectif
              </h2>

              <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
                <p>
                  Le PAH considère que la transformation d'Haïti ne peut être
                  réalisée sans un engagement collectif. Nous voulons
                  contribuer à bâtir une société dans laquelle le travail est
                  valorisé, la production encouragée, l'entrepreneuriat
                  soutenu et les citoyens placés au centre de l'action
                  publique.
                </p>

                <p>
                  Notre engagement s'adresse particulièrement aux agriculteurs,
                  aux producteurs, aux entrepreneurs, aux jeunes, aux femmes,
                  aux travailleurs et à toutes celles et tous ceux qui
                  souhaitent participer à la construction d'une nouvelle
                  Haïti.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-pah-green/10 bg-pah-green/5 p-8 dark:bg-pah-green/10"
            >
              <h3 className="mb-6 font-heading text-xl font-bold text-gray-900 dark:text-white">
                Nos valeurs fondamentales
              </h3>

              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-lg border border-pah-green/20 bg-white px-3 py-1.5 text-sm font-medium text-pah-green dark:bg-gray-800"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NOS PRIORITÉS */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-pah-green/10 px-4 py-1 text-sm font-medium text-pah-green">
              Nos priorités
            </span>

            <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Six axes stratégiques pour transformer Haïti
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
              Notre projet repose sur des secteurs essentiels à la production,
              à l'emploi, à la souveraineté et au développement durable du
              pays.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {priorities.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.5,
                }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 font-heading text-sm font-bold text-pah-green shadow-lg">
                    {item.number}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>

                  <div className="mt-5 h-0.5 w-10 bg-pah-green transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PRÉSIDENT */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <span className="mb-4 inline-block rounded-full bg-pah-green/10 px-4 py-1 text-sm font-medium text-pah-green">
                Notre Président
              </span>

              <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Michel Clérié
              </h2>
            </motion.div>

            <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-2"
              >
                <div className="relative mx-auto max-w-sm">
                  <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-pah-green/10" />

                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 shadow-2xl dark:bg-gray-800">
                    <Image
                      src="/images/president.jpg"
                      alt="Michel Clérié, Président du Parti Agricole Haïtien"
                      fill
                      priority
                      sizes="(max-width: 1024px) 80vw, 35vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="relative mx-5 -mt-8 rounded-xl bg-white p-5 text-center shadow-xl dark:bg-gray-900">
                    <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                      Michel Clérié
                    </h3>

                    <p className="mt-1 text-sm font-medium text-pah-green">
                      Président du Parti Agricole Haïtien
                    </p>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Homme d'affaires — Ancien sénateur
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-5 lg:col-span-3"
              >
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  Le Parti Agricole Haïtien est dirigé par{" "}
                  <strong className="text-gray-900 dark:text-white">
                    Michel Clérié
                  </strong>
                  , homme d'affaires, ancien sénateur de la République et
                  acteur engagé de la vie politique haïtienne.
                </p>

                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  Fort de son expérience dans le secteur privé et dans la vie
                  publique, il porte une vision politique centrée sur la
                  production nationale, le développement agricole et la
                  valorisation des ressources humaines et économiques d'Haïti.
                </p>

                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  À travers le PAH, Michel Clérié défend la nécessité de
                  replacer la production, l'agriculture et le développement des
                  territoires au cœur du projet national.
                </p>

                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  Son leadership s'inscrit dans une volonté de contribuer à
                  l'émergence d'une Haïti capable de produire, d'innover, de
                  créer des emplois et de construire son avenir avec ses
                  propres forces.
                </p>

                <div className="flex flex-wrap gap-2 border-t border-gray-200 pt-5 dark:border-gray-800">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full bg-pah-green/10 px-3 py-1 text-xs font-medium text-pah-green"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-pah-green-dark py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl font-bold text-white md:text-4xl">
              Une Haïti qui produit.
              <br />
              Une Haïti qui travaille.
              <br />
              Une Haïti qui entreprend.
            </h2>

            <p className="mx-auto mb-8 mt-5 max-w-2xl leading-relaxed text-white/80">
              Pour une Haïti productive, souveraine et prospère.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/adherer/"
                className="inline-flex items-center justify-center rounded-lg bg-pah-yellow px-8 py-3 font-semibold text-pah-text transition-colors hover:bg-pah-yellow/90"
              >
                Rejoindre le mouvement
                <ArrowRight size={18} className="ml-2" />
              </Link>

              <Link
                href="/programme/"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/20"
              >
                Découvrir notre programme
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}