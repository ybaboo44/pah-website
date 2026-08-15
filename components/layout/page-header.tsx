"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  className?: string
}

export function PageHeader({ title, subtitle, backgroundImage, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28 overflow-hidden",
        !backgroundImage && "bg-gradient-to-br from-pah-green-dark to-pah-green",
        className
      )}
    >
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-pah-green-dark/80" />
        </>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}