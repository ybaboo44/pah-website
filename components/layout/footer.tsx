"use client"

import Link from "next/link"
import { Leaf, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUp } from "lucide-react"
import { Logo } from "./logo"
import { siteConfig } from "@/lib/data/site"
import { footerNav } from "@/lib/data/nav"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-pah-green-dark text-white">
      {/* CTA Section */}
      <div className="bg-pah-green py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ensemble, transformons l'agriculture haïtienne
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Rejoignez le mouvement pour une Haïti agricole prospère et indépendante.
            Chaque action compte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/adherer/"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-pah-green-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Devenir membre
            </Link>
            <Link
              href="/don/"
              className="inline-flex items-center justify-center px-8 py-3 bg-pah-yellow text-pah-text font-semibold rounded-lg hover:bg-pah-yellow/90 transition-colors"
            >
              Faire un don
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo showText={true} className="mb-6" />
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-pah-yellow" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone size={18} className="shrink-0 text-pah-yellow" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail size={18} className="shrink-0 text-pah-yellow" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Organisation</h3>
            <ul className="space-y-2.5">
              {footerNav.organisation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-pah-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Nos Piliers</h3>
            <ul className="space-y-2.5">
              {footerNav.piliers.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-pah-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2.5">
              {footerNav.ressources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-pah-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</span>
            <div className="flex items-center gap-4">
              {footerNav.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-pah-yellow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, href: siteConfig.social.facebook },
              { icon: Twitter, href: siteConfig.social.twitter },
              { icon: Instagram, href: siteConfig.social.instagram },
              { icon: Youtube, href: siteConfig.social.youtube },
              { icon: Linkedin, href: siteConfig.social.linkedin },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-pah-yellow hover:text-pah-text transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-pah-yellow text-pah-text flex items-center justify-center hover:bg-pah-yellow/90 transition-all"
              aria-label="Retour en haut"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}