import { NavItem } from "@/types"

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "À propos",
    href: "/a-propos/",
    children: [
      { label: "Notre Vision", href: "/vision/" },
      { label: "Nos Valeurs", href: "/valeurs/" },
      { label: "Notre Programme", href: "/programme/" },
    ],
  },
  {
    label: "Nos Piliers",
    href: "#",
    children: [
      { label: "Agriculture", href: "/agriculture/" },
      { label: "Élevage", href: "/elevage/" },
      { label: "Environnement", href: "/environnement/" },
      { label: "Développement rural", href: "/developpement-rural/" },
      { label: "Jeunesse", href: "/jeunesse/" },
      { label: "Femmes", href: "/femmes/" },
    ],
  },
  {
    label: "Actualités",
    href: "#",
    children: [
      { label: "Actualités", href: "/actualites/" },
      { label: "Événements", href: "/evenements/" },
      { label: "Communiqués", href: "/communiques/" },
      { label: "Documents", href: "/documents/" },
      { label: "Galerie", href: "/galerie/" },
    ],
  },
  { label: "Adhérer", href: "/adherer/" },
  { label: "Faire un don", href: "/don/" },
  { label: "Contact", href: "/contact/" },
]

export const footerNav = {
  organisation: [
    { label: "À propos", href: "/a-propos/" },
    { label: "Notre Vision", href: "/vision/" },
    { label: "Nos Valeurs", href: "/valeurs/" },
    { label: "Notre Programme", href: "/programme/" },
  ],
  piliers: [
    { label: "Agriculture", href: "/agriculture/" },
    { label: "Élevage", href: "/elevage/" },
    { label: "Environnement", href: "/environnement/" },
    { label: "Développement rural", href: "/developpement-rural/" },
  ],
  ressources: [
    { label: "Actualités", href: "/actualites/" },
    { label: "Événements", href: "/evenements/" },
    { label: "Communiqués", href: "/communiques/" },
    { label: "Documents", href: "/documents/" },
    { label: "Galerie", href: "/galerie/" },
    { label: "FAQ", href: "/faq/" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales/" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite/" },
  ],
}