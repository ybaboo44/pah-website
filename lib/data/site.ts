type SiteStat = {
  label: string
  value: string
}

export const siteConfig = {
  name: "Parti Agricole Haïtien",
  abbreviation: "PAH",
  slogan: "La Terre, la Production, la Nation",
  description:
    "Le Parti Agricole Haïtien (PAH) se yon pati politik ayisyen ki angaje pou transfòmasyon agrikòl Ayiti, souverenete alimantè ak devlopman dirab zòn riral nou yo.",
  url: "https://pah.org.ht",
  ogImage: "/images/og-image.jpg",

  contact: {
    email: "contact@pah.org.ht",
    phone: "+509 29 15 2222",
    address: "#4, Delmas 60, Port-au-Prince, Haïti",
    address2: "Ouanaminthe, Nord-Est, Haïti",
  },

  social: {
    facebook: "https://facebook.com/pah.haiti",
    twitter: "https://twitter.com/pah_haiti",
    instagram: "https://instagram.com/pah.haiti",
    youtube: "https://youtube.com/@pahhaiti",
    linkedin: "https://linkedin.com/company/pah-haiti",
  },

  stats: [] as SiteStat[],
}

export const heroSlides = [
  {
    id: 1,
    title: `Semons l'avenir,
récoltons l'indépendance`,
    subtitle:
      "Le Parti Agricole Haïtien s'engage pour une agriculture moderne, durable et prospère au service de toutes les Haïtiennes et de tous les Haïtiens.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80",
    cta: [
      {
        label: "Nous rejoindre",
        href: "/adherer/",
        variant: "primary",
      },
      {
        label: "Découvrir notre programme",
        href: "/programme/",
        variant: "secondary",
      },
    ],
  },

  {
    id: 2,
    title: `Une terre fertile,
une nation forte`,
    subtitle:
      "Investissons dans l'agriculture haïtienne pour garantir notre souveraineté alimentaire et créer des emplois durables.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
    cta: [
      {
        label: "Faire un don",
        href: "/don/",
        variant: "primary",
      },
      {
        label: "Nos projets",
        href: "/programme/",
        variant: "secondary",
      },
    ],
  },

  {
    id: 3,
    title: `La jeunesse au cœur
de la transformation`,
    subtitle:
      "Formons la nouvelle génération d'agriculteurs haïtiens aux techniques modernes et à l'entrepreneuriat agricole.",
    image:
      "https://images.unsplash.com/photo-1595855759920-86582396756a?w=1920&q=80",
    cta: [
      {
        label: "Rejoindre la jeunesse PAH",
        href: "/jeunesse/",
        variant: "primary",
      },
      {
        label: "En savoir plus",
        href: "/a-propos/",
        variant: "secondary",
      },
    ],
  },
]

export const missionVision = {
  mission: {
    title: "Notre Mission",
    content:
      "Promouvoir et développer l'agriculture haïtienne comme pilier fondamental de la croissance économique nationale, garantir la souveraineté alimentaire, protéger l'environnement et améliorer les conditions de vie des agriculteurs et de leurs familles à travers tout le territoire national.",
    icon: "Target",
  },

  vision: {
    title: "Notre Vision",
    content:
      "Une Haïti où l'agriculture est modernisée, respectueuse de l'environnement et génératrice de prospérité pour tous. Une nation qui se nourrit de ses propres terres, où chaque agriculteur vit dignement de son travail et où la jeunesse rurale trouve son avenir.",
    icon: "Eye",
  },
}

export const coreValues = [
  {
    id: "terre",
    title: "Respect de la Terre",
    description:
      "Nous croyons en une agriculture respectueuse de l'environnement, préservant nos sols et nos ressources naturelles pour les générations futures.",
    icon: "Leaf",
  },

  {
    id: "solidarite",
    title: "Solidarité paysanne",
    description:
      "L'union fait la force. Nous encourageons la coopération entre agriculteurs, le partage des connaissances et le soutien mutuel.",
    icon: "Users",
  },

  {
    id: "innovation",
    title: "Innovation agricole",
    description:
      "Nous promouvons l'adoption de techniques modernes, de nouvelles technologies et de pratiques agricoles durables.",
    icon: "Lightbulb",
  },

  {
    id: "justice",
    title: "Justice sociale",
    description:
      "Chaque agriculteur mérite un accès équitable aux ressources, au crédit, aux marchés et à la protection sociale.",
    icon: "Scale",
  },

  {
    id: "patriotisme",
    title: "Patriotisme agricole",
    description:
      "Produire en Haïti, c'est défendre notre indépendance. Nous encourageons la consommation locale et la fierté nationale.",
    icon: "Flag",
  },

  {
    id: "transparence",
    title: "Transparence",
    description:
      "Nous œuvrons avec intégrité, responsabilité et transparence dans la gestion des ressources et des programmes.",
    icon: "ShieldCheck",
  },
]

export const programPillars = [
  {
    id: "agriculture-durable",
    title: "Agriculture Durable",
    description:
      "Promotion de l'agroécologie, des pratiques agricoles respectueuses de l'environnement et de la gestion durable des ressources naturelles.",
    icon: "Sprout",
    color: "#1E7D32",
  },

  {
    id: "securite-alimentaire",
    title: "Sécurité Alimentaire",
    description:
      "Garantir l'accès à une alimentation suffisante, saine et nutritive pour toute la population haïtienne.",
    icon: "Wheat",
    color: "#F4B400",
  },

  {
    id: "reboisement",
    title: "Reboisement",
    description:
      "Lutte contre la déforestation par des programmes de reboisement massif et la protection des bassins versants.",
    icon: "TreePine",
    color: "#145A32",
  },

  {
    id: "irrigation",
    title: "Irrigation",
    description:
      "Développement des infrastructures d'irrigation pour réduire la dépendance aux pluies et augmenter la productivité.",
    icon: "Droplets",
    color: "#1E7D32",
  },

  {
    id: "modernisation",
    title: "Modernisation Agricole",
    description:
      "Mécanisation, utilisation des technologies modernes et digitalisation des services agricoles.",
    icon: "Tractor",
    color: "#F4B400",
  },

  {
    id: "formation",
    title: "Formation des Jeunes",
    description:
      "Centres de formation agricole, bourses d'études et programmes d'apprentissage pour la relève paysanne.",
    icon: "GraduationCap",
    color: "#145A32",
  },

  {
    id: "cooperatives",
    title: "Coopératives",
    description:
      "Soutien à la création et au renforcement des coopératives agricoles pour une meilleure commercialisation.",
    icon: "Handshake",
    color: "#1E7D32",
  },

  {
    id: "transformation",
    title: "Transformation Alimentaire",
    description:
      "Développement des unités de transformation locale pour valoriser la production agricole haïtienne.",
    icon: "Factory",
    color: "#F4B400",
  },

  {
    id: "credit",
    title: "Accès au Crédit",
    description:
      "Facilitation de l'accès au financement pour les agriculteurs à travers des microcrédits et des fonds de garantie.",
    icon: "Banknote",
    color: "#145A32",
  },

  {
    id: "protection",
    title: "Protection des Agriculteurs",
    description:
      "Assurance agricole, sécurité foncière et mécanismes de protection sociale pour les travailleurs ruraux.",
    icon: "Shield",
    color: "#1E7D32",
  },

  {
    id: "innovation",
    title: "Innovation",
    description:
      "Recherche agronomique, adaptation aux changements climatiques et développement de variétés résilientes.",
    icon: "Microscope",
    color: "#F4B400",
  },

  {
    id: "energies",
    title: "Énergies Renouvelables",
    description:
      "Promotion des énergies solaires, biogaz et autres solutions durables pour l'agriculture haïtienne.",
    icon: "Sun",
    color: "#145A32",
  },
]

export const testimonials = [
  {
    id: "1",
    name: "Marie-Jeanne Pierre",
    role: "Agricultrice, Artibonite",
    content:
      "Grâce au PAH, j'ai pu accéder à une formation en agroécologie et obtenir un microcrédit pour moderniser mon exploitation. Aujourd'hui, ma production a triplé et j'emploie cinq personnes dans ma communauté.",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&q=80",
  },

  {
    id: "2",
    name: "Jean-Robert Joseph",
    role: "Jeune entrepreneur agricole, Nord",
    content:
      "Le programme de jeunesse du PAH m'a donné les outils et le réseau nécessaires pour lancer mon entreprise agricole. Je suis fier de contribuer à la souveraineté alimentaire de mon pays.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },

  {
    id: "3",
    name: "Sœur Marie-Claire",
    role: "Coordinatrice, Fondation rurale du Sud",
    content:
      "Le Parti Agricole Haïtien est le seul mouvement politique qui place véritablement l'agriculture au centre de son projet de société. Leur engagement pour les femmes rurales est exemplaire.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },

  {
    id: "4",
    name: "Pierre-Louis François",
    role: "Président, Coopérative Kole Zepòl",
    content:
      "Notre coopérative a bénéficié de l'accompagnement du PAH pour structurer notre commercialisation. Nous vendons désormais directement aux supermarchés de Port-au-Prince.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
]

export const newsArticles = [
  {
    id: "1",
    title: "Lancement du programme national de reboisement",
    excerpt:
      "Le PAH inaugure une campagne nationale visant à planter 5 millions d'arbres sur les 10 prochaines années.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    category: "Environnement",
    date: "2026-07-15",
    author: "Direction de la Communication",
    slug: "lancement-programme-reboisement",
  },

  {
    id: "2",
    title: "Forum de la jeunesse agricole : 500 jeunes formés",
    excerpt:
      "Le premier forum national de la jeunesse agricole a réuni 500 jeunes de tout le pays pour une semaine de formation intensive.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    category: "Jeunesse",
    date: "2026-06-28",
    author: "Service Jeunesse",
    slug: "forum-jeunesse-agricole",
  },

  {
    id: "3",
    title: "Nouveau partenariat pour l'irrigation dans l'Artibonite",
    excerpt:
      "Le PAH signe un accord de partenariat pour la réhabilitation de 50 km de canaux d'irrigation dans la vallée de l'Artibonite.",
    content: "...",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    category: "Infrastructure",
    date: "2026-06-10",
    author: "Direction des Programmes",
    slug: "partenariat-irrigation-artibonite",
  },
]

export const events = [
  {
    id: "1",
    title: "Congrès National du PAH 2026",
    description:
      "Le grand rassemblement annuel des membres du Parti Agricole Haïtien pour définir les orientations stratégiques.",
    date: "2026-09-15",
    time: "08:00 - 17:00",
    location: "Port-au-Prince, Centre de Convention",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Congrès",
    slug: "congres-national-2026",
  },

  {
    id: "2",
    title: "Journée mondiale de l'alimentation",
    description:
      "Célébration de la Journée mondiale de l'alimentation avec des expositions, des dégustations et des conférences.",
    date: "2026-10-16",
    time: "09:00 - 18:00",
    location: "Place Saint-Pierre, Pétion-Ville",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    category: "Célébration",
    slug: "journee-mondiale-alimentation",
  },

  {
    id: "3",
    title: "Salon de l'agriculture haïtienne",
    description:
      "Exposition-vente des produits agricoles haïtiens, démonstrations techniques et rencontres B2B.",
    date: "2026-11-20",
    time: "10:00 - 20:00",
    location: "Champ de Mars, Port-au-Prince",
    image:
      "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80",
    category: "Salon",
    slug: "salon-agriculture-haitienne",
  },
]

export const galleryImages = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    alt: "Champs de blé en Haïti",
    category: "Agriculture",
  },

  {
    id: "2",
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    alt: "Récolte de café",
    category: "Agriculture",
  },

  {
    id: "3",
    src: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80",
    alt: "Jeunes agriculteurs",
    category: "Jeunesse",
  },

  {
    id: "4",
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    alt: "Reboisement",
    category: "Environnement",
  },

  {
    id: "5",
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    alt: "Marché agricole",
    category: "Économie",
  },

  {
    id: "6",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    alt: "Formation agricole",
    category: "Formation",
  },

  {
    id: "7",
    src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80",
    alt: "Femmes agricultrices",
    category: "Femmes",
  },

  {
    id: "8",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    alt: "Coopérative",
    category: "Coopératives",
  },
]

export const faqItems = [
  {
    question: "Comment adhérer au Parti Agricole Haïtien ?",
    answer:
      "Vous pouvez adhérer en ligne via notre formulaire d'adhésion, en personne dans l'un de nos bureaux régionaux, ou en contactant un responsable local dans votre commune. L'adhésion est ouverte à tout citoyen haïtien majeur partageant nos valeurs.",
  },

  {
    question:
      "Quels sont les critères pour bénéficier des programmes du PAH ?",
    answer:
      "Nos programmes sont accessibles à tous les agriculteurs, jeunes ruraux et entrepreneurs agricoles. Certains programmes spécifiques peuvent avoir des critères d'éligibilité basés sur la localisation, l'âge ou le type d'activité agricole.",
  },

  {
    question: "Le PAH est-il un parti politique enregistré ?",
    answer:
      "Oui, le Parti Agricole Haïtien est un parti politique légalement enregistré auprès du Conseil Électoral Provisoire (CEP) et respecte la législation haïtienne en matière de partis politiques.",
  },

  {
    question: "Comment puis-je faire un don au PAH ?",
    answer:
      "Vous pouvez faire un don en ligne via notre plateforme sécurisée, par virement bancaire, ou en personne dans nos bureaux. Tous les dons sont utilisés pour financer nos programmes de développement agricole.",
  },

  {
    question: "Le PAH recrute-t-il du personnel ?",
    answer:
      "Nous publions régulièrement des offres d'emploi sur notre site web et nos réseaux sociaux. Vous pouvez également envoyer une candidature spontanée à l'adresse rh@pah.org.ht.",
  },

  {
    question: "Comment devenir bénévole au PAH ?",
    answer:
      "Le PAH accueille des bénévoles dans divers domaines : agriculture, communication, informatique, formation, etc. Contactez-nous via le formulaire de contact en précisant vos compétences et disponibilités.",
  },
]

export const departments = [
  {
    name: "Artibonite",
    coords: [19.0, -72.5],
    members: 3200,
  },
  {
    name: "Centre",
    coords: [19.2, -72.0],
    members: 2100,
  },
  {
    name: "Grand'Anse",
    coords: [18.6, -74.1],
    members: 1500,
  },
  {
    name: "Nippes",
    coords: [18.4, -73.4],
    members: 900,
  },
  {
    name: "Nord",
    coords: [19.8, -72.2],
    members: 2800,
  },
  {
    name: "Nord-Est",
    coords: [19.5, -71.8],
    members: 1200,
  },
  {
    name: "Nord-Ouest",
    coords: [19.9, -73.1],
    members: 1100,
  },
  {
    name: "Ouest",
    coords: [18.6, -72.3],
    members: 4500,
  },
  {
    name: "Sud",
    coords: [18.2, -73.8],
    members: 1800,
  },
  {
    name: "Sud-Est",
    coords: [18.3, -72.4],
    members: 1400,
  },
]