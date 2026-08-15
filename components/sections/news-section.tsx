"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { newsArticles } from "@/lib/data/site"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export function NewsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-pah-green/10 text-pah-green text-sm font-medium mb-4">
              Actualités
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white">
              Nos dernières actualités
            </h2>
          </div>
          <Link
            href="/actualites/"
            className="inline-flex items-center gap-2 text-pah-green font-medium hover:underline"
          >
            Toutes les actualités
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/actualites/${article.slug}/`} className="group block">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-pah-yellow text-pah-text hover:bg-pah-yellow">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar size={14} />
                  <span>{formatDate(article.date)}</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white group-hover:text-pah-green transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {article.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}