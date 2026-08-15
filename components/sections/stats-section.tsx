"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { siteConfig } from "@/lib/data/site"

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
  const isInView = useInView(ref, { once: true })

  const numericValue =
    typeof value === "number"
      ? value
      : Number(String(value).replace(/[^\d.-]/g, "")) || 0

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const steps = duration / 16
    const increment = numericValue / steps

    const timer = window.setInterval(() => {
      start += increment

      if (start >= numericValue) {
        setCount(numericValue)
        window.clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => window.clearInterval(timer)
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
  return (
    <section
      className="relative overflow-hidden bg-pah-green py-16"
      aria-label="Chiffres clés"
    >
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
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

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {siteConfig.stats.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>

              <div className="text-sm font-medium text-white/70 md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}