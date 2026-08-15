"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

import { PageHeader } from "@/components/layout/page-header"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import {
  CheckCircle2,
  Copy,
  FileCheck,
  Upload,
  Send,
  Users,
} from "lucide-react"

/* =========================================================
   TYPES
========================================================= */

type FormData = {
  nomComplet: string
  dateNaissance: string
  sexe: string
  etatMatrimonial: string
  indicatifTelephone: string
  telephone: string
  indicatifWhatsapp: string
  whatsapp: string
  pays: string
  commune: string
  sectionCommunale: string
  organisation: string
  email: string
  pieceIdentite: string
  numeroVote: string
  motivation: string
  accepte: boolean
}

/* =========================================================
   PAYS ET INDICATIFS
========================================================= */

const countryCodes = [
  { country: "Haïti", code: "+509" },
  { country: "États-Unis", code: "+1" },
  { country: "Canada", code: "+1" },
  { country: "France", code: "+33" },
  { country: "République dominicaine", code: "+1" },
  { country: "Cuba", code: "+53" },
  { country: "Jamaïque", code: "+1" },
  { country: "Bahamas", code: "+1" },
  { country: "Brésil", code: "+55" },
  { country: "Mexique", code: "+52" },
  { country: "Panama", code: "+507" },
  { country: "Colombie", code: "+57" },
  { country: "Chili", code: "+56" },
  { country: "Argentine", code: "+54" },
  { country: "Belgique", code: "+32" },
  { country: "Suisse", code: "+41" },
  { country: "Luxembourg", code: "+352" },
  { country: "Allemagne", code: "+49" },
  { country: "Espagne", code: "+34" },
  { country: "Italie", code: "+39" },
  { country: "Portugal", code: "+351" },
  { country: "Royaume-Uni", code: "+44" },
  { country: "Pays-Bas", code: "+31" },
  { country: "Suède", code: "+46" },
  { country: "Norvège", code: "+47" },
  { country: "Danemark", code: "+45" },
  { country: "Irlande", code: "+353" },
  { country: "Australie", code: "+61" },
  { country: "Nouvelle-Zélande", code: "+64" },
  { country: "Afrique du Sud", code: "+27" },
  { country: "Sénégal", code: "+221" },
  { country: "Côte d'Ivoire", code: "+225" },
  { country: "Cameroun", code: "+237" },
  { country: "République démocratique du Congo", code: "+243" },
  { country: "Congo", code: "+242" },
  { country: "Gabon", code: "+241" },
  { country: "Ghana", code: "+233" },
  { country: "Nigeria", code: "+234" },
  { country: "Kenya", code: "+254" },
  { country: "Maroc", code: "+212" },
  { country: "Algérie", code: "+213" },
  { country: "Tunisie", code: "+216" },
  { country: "Égypte", code: "+20" },
  { country: "Émirats arabes unis", code: "+971" },
  { country: "Israël", code: "+972" },
  { country: "Inde", code: "+91" },
  { country: "Chine", code: "+86" },
  { country: "Japon", code: "+81" },
]

/* =========================================================
   COMPOSANT
========================================================= */

export default function AdhererPage() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [submitted, setSubmitted] = useState(false)
  const [codeAdhesion, setCodeAdhesion] = useState("")
  const [copied, setCopied] = useState(false)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>({
    nomComplet: "",
    dateNaissance: "",
    sexe: "",
    etatMatrimonial: "",
    indicatifTelephone: "+509",
    telephone: "",
    indicatifWhatsapp: "+509",
    whatsapp: "",
    pays: "Haïti",
    commune: "",
    sectionCommunale: "",
    organisation: "",
    email: "",
    pieceIdentite: "",
    numeroVote: "",
    motivation: "",
    accepte: false,
  })

  /* =========================================================
     CHANGEMENT DES CHAMPS
  ========================================================= */

  const handleChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  /* =========================================================
     PHOTO
  ========================================================= */

  const handlePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]

    if (!file) return

    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner une image valide.")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("La photo ne doit pas dépasser 5 Mo.")
      return
    }

    const reader = new FileReader()

    reader.onloadend = () => {
      setPhotoPreview(reader.result as string)
    }

    reader.readAsDataURL(file)
  }

  /* =========================================================
     CODE D'ADHÉSION
  ========================================================= */

  const generateCode = () => {
    const prefix = "PAH"
    const year = new Date().getFullYear().toString().slice(-2)
    const random = Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()

    const number = Math.floor(
      1000 + Math.random() * 9000
    )

    return `${prefix}-${year}-${random}-${number}`
  }

  /* =========================================================
     SOUMISSION
  ========================================================= */

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!photoPreview) {
      alert("Veuillez ajouter votre photo avant de soumettre le formulaire.")
      return
    }

    if (!formData.accepte) {
      alert(
        "Vous devez confirmer l'exactitude des informations fournies."
      )
      return
    }

    const code = generateCode()

    setCodeAdhesion(code)
    setSubmitted(true)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  /* =========================================================
     COPIER LE CODE
  ========================================================= */

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeAdhesion)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      alert("Impossible de copier le code.")
    }
  }

  /* =========================================================
     RÉINITIALISATION
  ========================================================= */

  const resetForm = () => {
    setSubmitted(false)
    setPhotoPreview(null)
    setCodeAdhesion("")

    setFormData({
      nomComplet: "",
      dateNaissance: "",
      sexe: "",
      etatMatrimonial: "",
      indicatifTelephone: "+509",
      telephone: "",
      indicatifWhatsapp: "+509",
      whatsapp: "",
      pays: "Haïti",
      commune: "",
      sectionCommunale: "",
      organisation: "",
      email: "",
      pieceIdentite: "",
      numeroVote: "",
      motivation: "",
      accepte: false,
    })

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  /* =========================================================
     PAGE DE CONFIRMATION
  ========================================================= */

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <PageHeader
          title="Demande d'adhésion"
          subtitle="Votre demande a bien été enregistrée."
        />

        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mx-auto max-w-2xl"
          >
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
              {/* Header confirmation */}
              <div className="bg-pah-green-dark px-6 py-10 text-center text-white md:px-10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                  <CheckCircle2 size={42} />
                </div>

                <h1 className="mt-6 font-heading text-3xl font-bold md:text-4xl">
                  Demande reçue
                </h1>

                <p className="mx-auto mt-4 max-w-lg leading-7 text-white/75">
                  Nous vous remercions pour votre engagement envers le
                  développement et l'avenir d'Haïti.
                </p>
              </div>

              <div className="p-6 md:p-10">
                <p className="text-center leading-7 text-gray-600 dark:text-gray-300">
                  Votre demande d'adhésion au Parti Agricole Haïtien a bien
                  été enregistrée. Un membre de notre équipe pourra vous
                  contacter afin de vérifier les informations fournies.
                </p>

                {/* Code */}
                <div className="mt-8 rounded-2xl border-2 border-dashed border-pah-green/30 bg-pah-green/5 p-6 text-center dark:bg-pah-green/10">
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-pah-green">
                    <FileCheck size={18} />
                    Code de suivi
                  </div>

                  <div className="mt-4 break-all font-mono text-2xl font-bold tracking-wider text-pah-green-dark dark:text-pah-green">
                    {codeAdhesion}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Conservez précieusement ce code. Il pourra être utilisé
                    pour suivre votre demande d'adhésion.
                  </p>

                  <Button
                    type="button"
                    onClick={copyCode}
                    variant="outline"
                    className="mt-5 border-pah-green text-pah-green hover:bg-pah-green hover:text-white"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 size={16} className="mr-2" />
                        Code copié
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="mr-2" />
                        Copier le code
                      </>
                    )}
                  </Button>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button
                    type="button"
                    onClick={resetForm}
                    variant="outline"
                    className="border-pah-green text-pah-green hover:bg-pah-green hover:text-white"
                  >
                    Nouvelle demande
                  </Button>

                  <Button
                    asChild
                    className="bg-pah-yellow text-pah-text hover:bg-pah-yellow/90"
                  >
                    <a href="/">Retour à l'accueil</a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    )
  }

  /* =========================================================
     PAGE PRINCIPALE
  ========================================================= */

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <PageHeader
        title="Rejoindre le mouvement"
        subtitle="Participez à la construction d'une Haïti productive, souveraine et prospère."
      />

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            {
              label: "Rejoindre le mouvement",
            },
          ]}
        />
      </div>

      {/* =====================================================
          ENTÊTE PROFESSIONNELLE AVEC PHOTO
      ===================================================== */}

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl shadow-xl"
          >
            <div className="relative min-h-[360px] md:min-h-[430px]">
              <Image
                src="/images/groupe-pah.png"
                alt="Membres et sympathisants du Parti Agricole Haïtien"
                fill
                priority
                className="object-cover object-center"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pah-green-dark/95 via-pah-green-dark/75 to-pah-green-dark/20" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl px-6 py-10 md:px-12 lg:px-16">
                  <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-pah-yellow backdrop-blur-sm">
                    Parti Agricole Haïtien
                  </div>

                  <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    Rejoindre le
                    <span className="block text-pah-yellow">
                      mouvement
                    </span>
                  </h1>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
                    Votre engagement compte. Rejoignez une dynamique
                    citoyenne tournée vers la production, le travail,
                    la responsabilité et le développement national.
                  </p>

                  <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-white">
                    <span className="h-px w-10 bg-pah-yellow" />
                    Ensemble pour Haïti
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="pb-8 pt-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-pah-green">
              Adhésion officielle
            </span>

            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Formulaire officiel d'adhésion
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Remplissez soigneusement toutes les informations demandées
              afin de soumettre votre demande d'adhésion au
              <strong className="text-gray-900 dark:text-white">
                {" "}Parti Agricole Haïtien
              </strong>
              .
            </p>

            <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-pah-green" />
          </div>
        </div>
      </section>

      {/* =====================================================
          FORMULAIRE
      ===================================================== */}

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
            {/* =================================================
                COLONNE GAUCHE
            ================================================= */}

            <motion.aside
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="lg:col-span-2"
            >
              <div className="sticky top-28 space-y-6">
                {/* Carte parti */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <div className="h-2 bg-pah-green" />

                  <div className="p-7 text-center">
                    <Image
                      src="/images/logo-pah.png"
                      alt="Logo du Parti Agricole Haïtien"
                      width={110}
                      height={110}
                      className="mx-auto object-contain"
                    />

                    <h3 className="mt-5 font-heading text-xl font-bold text-gray-900 dark:text-white">
                      Parti Agricole Haïtien
                    </h3>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-pah-green">
                      La Terre • La Production • La Nation
                    </p>
                  </div>
                </div>

                {/* Pourquoi adhérer */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900/60">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pah-green/10 text-pah-green">
                      <Users size={22} />
                    </div>

                    <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                      Pourquoi adhérer ?
                    </h3>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {[
                      "Participer à la vie et aux activités du mouvement.",
                      "Contribuer aux réflexions sur l'avenir du pays.",
                      "Soutenir les initiatives en faveur de la production nationale.",
                      "Participer aux activités citoyennes et communautaires.",
                      "Faire partie d'une dynamique nationale de transformation.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-pah-green"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Information */}
                <div className="rounded-2xl border border-pah-green/20 bg-pah-green/5 p-7 dark:bg-pah-green/10">
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                    Avant de commencer
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    Veuillez vous assurer que toutes les informations
                    fournies sont exactes. Les champs marqués d'un
                    <span className="font-bold text-red-500"> *</span>
                    {" "}sont obligatoires.
                  </p>
                </div>
              </div>
            </motion.aside>

            {/* =================================================
                FORMULAIRE DROITE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Form header */}
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-7 dark:border-gray-800 dark:bg-gray-900/80 md:px-8">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/logo-pah.png"
                      alt="Parti Agricole Haïtien"
                      width={55}
                      height={55}
                      className="object-contain"
                    />

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-pah-green">
                        Parti Agricole Haïtien
                      </p>

                      <h2 className="mt-1 font-heading text-2xl font-bold text-gray-900 dark:text-white">
                        Informations du membre
                      </h2>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Tous les champs de ce formulaire sont obligatoires.
                  </p>
                </div>

                <div className="space-y-8 p-6 md:p-8">
                  {/* =================================================
                      PHOTO
                  ================================================= */}

                  <div className="space-y-3">
                    <div>
                      <Label
                        htmlFor="photo"
                        className="text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Photo d'identité
                        <span className="ml-1 text-red-500">*</span>
                      </Label>

                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Photo récente, claire et reconnaissable. JPG ou PNG,
                        5 Mo maximum.
                      </p>
                    </div>

                    <div
                      onClick={() =>
                        fileInputRef.current?.click()
                      }
                      className="cursor-pointer rounded-2xl border-2 border-dashed border-gray-300 p-7 text-center transition hover:border-pah-green hover:bg-pah-green/5 dark:border-gray-700"
                    >
                      <input
                        ref={fileInputRef}
                        id="photo"
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handlePhotoChange}
                        className="hidden"
                        required={!photoPreview}
                      />

                      <AnimatePresence mode="wait">
                        {photoPreview ? (
                          <motion.div
                            key="preview"
                            initial={{
                              opacity: 0,
                              scale: 0.9,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                            }}
                            className="flex flex-col items-center"
                          >
                            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-pah-green/20">
                              <Image
                                src={photoPreview}
                                alt="Aperçu de votre photo"
                                fill
                                className="object-cover"
                              />
                            </div>

                            <p className="mt-4 text-sm font-medium text-pah-green">
                              Photo sélectionnée
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                              Cliquez pour modifier la photo
                            </p>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="upload"
                            initial={{
                              opacity: 0,
                            }}
                            animate={{
                              opacity: 1,
                            }}
                          >
                            <Upload
                              className="mx-auto text-gray-400"
                              size={34}
                            />

                            <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                              Cliquez pour sélectionner votre photo
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              JPG, PNG ou WEBP — 5 Mo maximum
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* =================================================
                      NOM
                  ================================================= */}

                  <div className="space-y-2">
                    <Label htmlFor="nomComplet">
                      Nom complet
                      <span className="ml-1 text-red-500">*</span>
                    </Label>

                    <Input
                      id="nomComplet"
                      value={formData.nomComplet}
                      onChange={(event) =>
                        handleChange(
                          "nomComplet",
                          event.target.value
                        )
                      }
                      placeholder="Votre nom et prénom"
                      required
                    />
                  </div>

                  {/* =================================================
                      DATE DE NAISSANCE
                  ================================================= */}

                  <div className="space-y-2">
                    <Label htmlFor="dateNaissance">
                      Date de naissance
                      <span className="ml-1 text-red-500">*</span>
                    </Label>

                    <Input
                      id="dateNaissance"
                      type="date"
                      value={formData.dateNaissance}
                      onChange={(event) =>
                        handleChange(
                          "dateNaissance",
                          event.target.value
                        )
                      }
                      required
                    />
                  </div>

                  {/* =================================================
                      SEXE + ÉTAT MATRIMONIAL
                  ================================================= */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="sexe">
                        Sexe
                        <span className="ml-1 text-red-500">*</span>
                      </Label>

                      <select
                        id="sexe"
                        value={formData.sexe}
                        onChange={(event) =>
                          handleChange(
                            "sexe",
                            event.target.value
                          )
                        }
                        required
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-pah-green focus:ring-2 focus:ring-pah-green/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                      >
                        <option value="">
                          Sélectionnez
                        </option>
                        <option value="Masculin">
                          Masculin
                        </option>
                        <option value="Féminin">
                          Féminin
                        </option>
                        <option value="Autre">
                          Autre
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="etatMatrimonial">
                        État matrimonial
                        <span className="ml-1 text-red-500">*</span>
                      </Label>

                      <select
                        id="etatMatrimonial"
                        value={formData.etatMatrimonial}
                        onChange={(event) =>
                          handleChange(
                            "etatMatrimonial",
                            event.target.value
                          )
                        }
                        required
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-pah-green focus:ring-2 focus:ring-pah-green/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                      >
                        <option value="">
                          Sélectionnez
                        </option>
                        <option value="Célibataire">
                          Célibataire
                        </option>
                        <option value="Marié(e)">
                          Marié(e)
                        </option>
                        <option value="Union libre">
                          Union libre
                        </option>
                        <option value="Veuf / Veuve">
                          Veuf / Veuve
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* =================================================
                      TELEPHONE
                  ================================================= */}

                  <div className="space-y-3">
                    <Label>
                      Numéro de téléphone
                      <span className="ml-1 text-red-500">*</span>
                    </Label>

                    <div className="grid grid-cols-[150px_1fr] gap-3">
                      <select
                        value={formData.indicatifTelephone}
                        onChange={(event) =>
                          handleChange(
                            "indicatifTelephone",
                            event.target.value
                          )
                        }
                        className="h-10 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none focus:border-pah-green focus:ring-2 focus:ring-pah-green/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                        required
                      >
                        {countryCodes.map((item, index) => (
                          <option
                            key={`${item.country}-${index}`}
                            value={item.code}
                          >
                            {item.code} — {item.country}
                          </option>
                        ))}
                      </select>

                      <Input
                        type="tel"
                        value={formData.telephone}
                        onChange={(event) =>
                          handleChange(
                            "telephone",
                            event.target.value
                          )
                        }
                        placeholder="Ex. 3700 0000"
                        required
                      />
                    </div>
                  </div>

                  {/* =================================================
                      WHATSAPP
                  ================================================= */}

                  <div className="space-y-3">
                    <Label>
                      Numéro WhatsApp
                      <span className="ml-1 text-red-500">*</span>
                    </Label>

                    <div className="grid grid-cols-[150px_1fr] gap-3">
                      <select
                        value={formData.indicatifWhatsapp}
                        onChange={(event) =>
                          handleChange(
                            "indicatifWhatsapp",
                            event.target.value
                          )
                        }
                        className="h-10 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none focus:border-pah-green focus:ring-2 focus:ring-pah-green/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                        required
                      >
                        {countryCodes.map((item, index) => (
                          <option
                            key={`whatsapp-${item.country}-${index}`}
                            value={item.code}
                          >
                            {item.code} — {item.country}
                          </option>
                        ))}
                      </select>

                      <Input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(event) =>
                          handleChange(
                            "whatsapp",
                            event.target.value
                          )
                        }
                        placeholder="Ex. 3700 0000"
                        required
                      />
                    </div>
                  </div>

                  {/* =================================================
                      PAYS + COMMUNE
                  ================================================= */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="pays">
                        Pays de résidence
                        <span className="ml-1 text-red-500">*</span>
                      </Label>

                      <select
                        id="pays"
                        value={formData.pays}
                        onChange={(event) =>
                          handleChange(
                            "pays",
                            event.target.value
                          )
                        }
                        required
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-pah-green focus:ring-2 focus:ring-pah-green/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                      >
                        {countryCodes.map((item, index) => (
                          <option
                            key={`country-${index}`}
                            value={item.country}
                          >
                            {item.country}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="commune">
                        Commune
                        <span className="ml-1 text-red-500">*</span>
                      </Label>

                      <Input
                        id="commune"
                        value={formData.commune}
                        onChange={(event) =>
                          handleChange(
                            "commune",
                            event.target.value
                          )
                        }
                        placeholder="Votre commune"
                        required
                      />
                    </div>
                  </div>

                  {/* =================================================
                      SECTION COMMUNALE
                  ================================================= */}

                  <div className="space-y-2">
                    <Label htmlFor="sectionCommunale">
                      Section communale
                      <span className="ml-1 text-red-500">*</span>
                    </Label>

                    <Input
                      id="sectionCommunale"
                      value={formData.sectionCommunale}
                      onChange={(event) =>
                        handleChange(
                          "sectionCommunale",
                          event.target.value
                        )
                      }
                      placeholder="Votre section communale"
                      required
                    />
                  </div>

                  {/* =================================================
                      ORGANISATION
                  ================================================= */}

                  <div className="space-y-2">
                    <Label htmlFor="organisation">
                      Organisation sociale ou professionnelle
                      <span className="ml-1 text-red-500">*</span>
                    </Label>

                    <Input
                      id="organisation"
                      value={formData.organisation}
                      onChange={(event) =>
                        handleChange(
                          "organisation",
                          event.target.value
                        )
                      }
                      placeholder="Nom de votre organisation"
                      required
                    />

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Si vous n'appartenez à aucune organisation,
                      indiquez « Aucune ».
                    </p>
                  </div>

                  {/* =================================================
                      EMAIL
                  ================================================= */}

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Adresse e-mail
                      <span className="ml-1 text-red-500">*</span>
                    </Label>

                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        handleChange(
                          "email",
                          event.target.value
                        )
                      }
                      placeholder="exemple@email.com"
                      required
                    />
                  </div>

                  {/* =================================================
                      IDENTITÉ + VOTE
                  ================================================= */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="pieceIdentite">
                        Numéro de pièce d'identité
                        <span className="ml-1 text-red-500">*</span>
                      </Label>

                      <Input
                        id="pieceIdentite"
                        value={formData.pieceIdentite}
                        onChange={(event) =>
                          handleChange(
                            "pieceIdentite",
                            event.target.value
                          )
                        }
                        placeholder="CIN, NIF ou passeport"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="numeroVote">
                        Numéro de carte électorale
                        <span className="ml-1 text-red-500">*</span>
                      </Label>

                      <Input
                        id="numeroVote"
                        value={formData.numeroVote}
                        onChange={(event) =>
                          handleChange(
                            "numeroVote",
                            event.target.value
                          )
                        }
                        placeholder="Numéro de carte électorale"
                        required
                      />
                    </div>
                  </div>

                  {/* =================================================
                      MOTIVATION
                  ================================================= */}

                  <div className="space-y-2">
                    <Label htmlFor="motivation">
                      Pourquoi souhaitez-vous participer à la vie
                      politique de votre pays ?
                      <span className="ml-1 text-red-500">*</span>
                    </Label>

                    <Textarea
                      id="motivation"
                      rows={6}
                      value={formData.motivation}
                      onChange={(event) =>
                        handleChange(
                          "motivation",
                          event.target.value
                        )
                      }
                      placeholder="Expliquez brièvement vos motivations, vos attentes et la manière dont vous souhaitez contribuer..."
                      required
                    />

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Votre réponse doit comporter au minimum quelques
                      phrases afin de permettre à notre équipe de mieux
                      comprendre votre motivation.
                    </p>
                  </div>

                  {/* =================================================
                      ACCEPTATION
                  ================================================= */}

                  <div className="rounded-2xl border border-pah-green/20 bg-pah-green/5 p-5 dark:bg-pah-green/10">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="accepte"
                        checked={formData.accepte}
                        onChange={(event) =>
                          handleChange(
                            "accepte",
                            event.target.checked
                          )
                        }
                        required
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-pah-green focus:ring-pah-green"
                      />

                      <Label
                        htmlFor="accepte"
                        className="cursor-pointer text-sm font-normal leading-6 text-gray-600 dark:text-gray-300"
                      >
                        Je certifie que les informations fournies dans
                        ce formulaire sont exactes et complètes. Je
                        m'engage à respecter les principes, les valeurs
                        et les règles du Parti Agricole Haïtien. Je
                        comprends que ma demande d'adhésion est soumise
                        à vérification et approbation conformément aux
                        procédures du parti.
                        <span className="ml-1 text-red-500">*</span>
                      </Label>
                    </div>
                  </div>

                  {/* =================================================
                      BOUTON
                  ================================================= */}

                  <div className="border-t border-gray-200 pt-6 dark:border-gray-800">
                    <Button
                      type="submit"
                      className="h-14 w-full bg-pah-green text-base font-semibold text-white shadow-md transition hover:bg-pah-green-dark"
                    >
                      <Send size={18} className="mr-2" />
                      Soumettre ma demande d'adhésion
                    </Button>

                    <p className="mt-4 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                      En soumettant ce formulaire, vous confirmez
                      l'exactitude des informations fournies.
                    </p>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}