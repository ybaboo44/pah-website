"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { siteConfig } from "@/lib/data/site"

interface Stat {
  label: string
  value: number | string
  suffix?: string
  prefix?: string
}

interface AnimatedCounterProps {
  value: number | string
  suffix?: string
  prefix?: string
}

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  const ref = useRef<HTMLSpanElement | null>(null)

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  })

  const numericValue =
    typeof value === "number"
      ? value
      : Number(String(value).replace(/[^\d.-]/g, "")) || 0

  useEffect(() => {
    if (!isInView) {
      return
    }

    if (numericValue <= 0) {
      setCount(0)
      return
    }

    let current = 0

    const duration = 2000
    const interval = 16
    const steps = Math.max(1, Math.floor(duration / interval))
    const increment = numericValue / steps

    const timer = window.setInterval(() => {
      current += increment

      if (current >= numericValue) {
        setCount(numericValue)
        window.clearInterval(timer)
        return
      }

      setCount(Math.floor(current))
    }, interval)

    return () => {
      window.clearInterval(timer)
    }
  }, [isInView, numericValue])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  /*
   * On convertit les données provenant de siteConfig
   * vers le type attendu par cette section.
   *
   * Cela évite que TypeScript hérite d'un ancien type
   * SiteStat incomplet dans site.ts.
   */
  const stats = siteConfig.stats as unknown as Stat[]

  /*
   * Si aucune statistique n'est configurée,
   * on ne rend pas une section vide.
   */
  if (stats.length === 0) {
    return null
  }

  return (
    <section
      className="relative overflow-hidden bg-pah-green py-16 md:py-20"
      aria-label="Chiffres clés"
    >
      {/* Motif décoratif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <div className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>

              <div className="text-sm font-medium leading-relaxed text-white/70 sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}