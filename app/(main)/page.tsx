import type { Metadata } from "next"

import { HeroSection } from "@/components/sections/hero-section"
import { MissionVisionSection } from "@/components/sections/mission-vision-section"
import { ValuesSection } from "@/components/sections/values-section"
import { ProgramSection } from "@/components/sections/program-section"
import { NewsSection } from "@/components/sections/news-section"
import { EventsSection } from "@/components/sections/events-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { MapSection } from "@/components/sections/map-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Parti Agricole Haïtien — Une vision pour une Haïti productive, souveraine et prospère, fondée sur la terre, la production, le travail et le développement national.",
  keywords: [
    "Parti Agricole Haïtien",
    "PAH",
    "Haïti",
    "agriculture",
    "production",
    "développement",
    "jeunesse",
    "emploi",
    "souveraineté",
  ],
  openGraph: {
    title: "Parti Agricole Haïtien",
    description:
      "La Terre. La Production. La Nation.",
    type: "website",
    locale: "fr_HT",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">

      {/* =========================================================
          01 — IDENTITÉ / HERO
      ========================================================= */}

      <section id="accueil">
        <HeroSection />
      </section>

      {/* =========================================================
          02 — VISION ET MISSION
      ========================================================= */}

      <section id="vision">
        <MissionVisionSection />
      </section>

      {/* =========================================================
          03 — VALEURS
      ========================================================= */}

      <section id="valeurs">
        <ValuesSection />
      </section>

      {/* =========================================================
          04 — PROGRAMME
      ========================================================= */}

      <section id="programme">
        <ProgramSection />
      </section>

      {/* =========================================================
          05 — ACTUALITÉS
      ========================================================= */}

      <section id="actualites">
        <NewsSection />
      </section>

      {/* =========================================================
          06 — ÉVÉNEMENTS
      ========================================================= */}

      <section id="evenements">
        <EventsSection />
      </section>

      {/* =========================================================
          07 — TÉMOIGNAGES
      ========================================================= */}

      <section id="temoignages">
        <TestimonialsSection />
      </section>

      {/* =========================================================
          08 — GALERIE
      ========================================================= */}

      <section id="galerie">
        <GallerySection />
      </section>

      {/* =========================================================
          09 — PRÉSENCE NATIONALE
      ========================================================= */}

      <section id="territoire">
        <MapSection />
      </section>

      {/* =========================================================
          10 — APPEL À L'ACTION
      ========================================================= */}

      <section id="engagement">
        <CTASection />
      </section>

    </main>
  )
}