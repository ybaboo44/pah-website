"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

import { PageHeader } from "@/components/layout/page-header"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type DonationStep = "amount" | "information" | "confirmation"

type PaymentMethod = "carte" | "moncash" | "virement"

interface DonorForm {
  name: string
  email: string
  phone: string
  address: string
  message: string
  anonymous: boolean
}

interface PaymentMethodOption {
  id: PaymentMethod
  label: string
  description: string
}

const FIXED_AMOUNTS = [
  250,
  500,
  1000,
  2500,
  5000,
  10000,
  25000,
  50000,
]

const PAYMENT_METHODS: PaymentMethodOption[] = [
  {
    id: "carte",
    label: "Carte bancaire",
    description: "Visa ou Mastercard",
  },
  {
    id: "moncash",
    label: "MonCash",
    description: "Transfert sécurisé via MonCash",
  },
  {
    id: "virement",
    label: "Virement bancaire",
    description: "Transfert direct sur notre compte",
  },
]

const INITIAL_FORM: DonorForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
  anonymous: false,
}

function generateReceiptNumber(): string {
  const year = new Date().getFullYear().toString().slice(-2)

  const randomPart = Math.random()
    .toString(36)
    .substring(2, 7)
    .toUpperCase()

  const numericPart = Math.floor(
    1000 + Math.random() * 9000
  )

  return `PAH-DON-${year}-${randomPart}-${numericPart}`
}

export default function DonPage() {
  const [step, setStep] = useState<DonationStep>("amount")

  const [amount, setAmount] = useState<number | "">("")

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("carte")

  const [formData, setFormData] =
    useState<DonorForm>(INITIAL_FORM)

  const [receiptNumber, setReceiptNumber] =
    useState<string>("")

  const [copied, setCopied] = useState(false)

  const amountValue = amount === "" ? 0 : amount

  const selectedPaymentMethod = PAYMENT_METHODS.find(
    (method) => method.id === paymentMethod
  )

  const updateField = <K extends keyof DonorForm>(
    field: K,
    value: DonorForm[K]
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  const handleAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value

    if (value === "") {
      setAmount("")
      return
    }

    const numericValue = Number(value)

    if (!Number.isNaN(numericValue)) {
      setAmount(numericValue)
    }
  }

  const goToInformation = () => {
    if (amountValue < 100) {
      return
    }

    setStep("information")

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const receipt = generateReceiptNumber()

    setReceiptNumber(receipt)
    setStep("confirmation")

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const copyReceiptNumber = async () => {
    if (!receiptNumber) {
      return
    }

    try {
      await navigator.clipboard.writeText(receiptNumber)

      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

  const resetDonation = () => {
    setStep("amount")
    setAmount("")
    setPaymentMethod("carte")
    setFormData(INITIAL_FORM)
    setReceiptNumber("")
    setCopied(false)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <PageHeader
        title="Faire un don"
        subtitle="Chaque gourde compte pour la transformation agricole d'Haïti."
      />

      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            {
              label: "Faire un don",
            },
          ]}
        />
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">

            {/* =====================================================
                COLONNE INFORMATIONS
            ===================================================== */}

            <motion.aside
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="lg:col-span-2"
            >
              <div className="sticky top-28 space-y-6">

                {/* Identité */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <Image
                    src="/images/logo-pah.png"
                    alt="Logo du Parti Agricole Haïtien"
                    width={90}
                    height={90}
                    priority
                    className="mx-auto mb-4 object-contain"
                  />

                  <h2 className="font-heading text-lg font-bold text-pah-green-dark">
                    Parti Agricole Haïtien
                  </h2>

                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-pah-green">
                    La Terre, la Production, la Nation
                  </p>
                </div>

                {/* Pourquoi faire un don */}
                <div className="rounded-2xl border border-pah-green/10 bg-pah-green/5 p-6 dark:bg-pah-green/10">
                  <h3 className="mb-5 font-heading text-lg font-bold text-gray-900 dark:text-white">
                    Pourquoi faire un don ?
                  </h3>

                  <div className="space-y-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Protection de l'environnement
                      </p>

                      <p className="mt-1">
                        Financer les programmes de reboisement
                        et de protection des ressources naturelles.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Formation agricole
                      </p>

                      <p className="mt-1">
                        Soutenir la formation et l'accompagnement
                        des jeunes agriculteurs.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Développement économique
                      </p>

                      <p className="mt-1">
                        Contribuer à la création de coopératives
                        et d'unités de transformation agricole.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Souveraineté alimentaire
                      </p>

                      <p className="mt-1">
                        Participer au renforcement de la production
                        agricole nationale.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Transparence */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="mb-3 font-heading font-bold text-gray-900 dark:text-white">
                    Transparence et responsabilité
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    Nous nous engageons à assurer une utilisation
                    responsable des contributions reçues et à
                    fournir des informations régulières sur les
                    activités financées par les donateurs.
                  </p>
                </div>

              </div>
            </motion.aside>

            {/* =====================================================
                FORMULAIRE PRINCIPAL
            ===================================================== */}

            <motion.main
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="lg:col-span-3"
            >

              <AnimatePresence mode="wait">

                {/* =================================================
                    ÉTAPE 1
                ================================================= */}

                {step === "amount" && (
                  <motion.div
                    key="amount"
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8 dark:border-gray-700 dark:bg-gray-800"
                  >

                    <div className="mb-8 flex items-center gap-4 border-b border-gray-100 pb-5 dark:border-gray-700">

                      <Image
                        src="/images/logo-pah.png"
                        alt="Logo PAH"
                        width={45}
                        height={45}
                        className="object-contain"
                      />

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-pah-green">
                          Étape 1 sur 2
                        </p>

                        <h2 className="mt-1 font-heading text-xl font-bold text-gray-900 dark:text-white">
                          Choisir le montant
                        </h2>
                      </div>

                    </div>

                    {/* Montants */}
                    <div className="mb-7">

                      <Label className="mb-3 block text-sm font-semibold">
                        Montant de votre contribution
                      </Label>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                        {FIXED_AMOUNTS.map((value) => {
                          const isSelected = amount === value

                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => setAmount(value)}
                              aria-pressed={isSelected}
                              className={`rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                                isSelected
                                  ? "border-pah-green bg-pah-green text-white shadow-sm"
                                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-pah-green hover:bg-pah-green/5 hover:text-pah-green dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                              }`}
                            >
                              {value.toLocaleString("fr-FR")} Gdes
                            </button>
                          )
                        })}

                      </div>
                    </div>

                    {/* Montant personnalisé */}
                    <div className="mb-8">

                      <Label
                        htmlFor="custom-amount"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Autre montant
                      </Label>

                      <div className="relative">

                        <Input
                          id="custom-amount"
                          type="number"
                          min={100}
                          step={50}
                          inputMode="numeric"
                          placeholder="Entrez votre montant"
                          value={amount}
                          onChange={handleAmountChange}
                          className="h-12 pr-16"
                        />

                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500">
                          Gdes
                        </span>

                      </div>

                      <p className="mt-2 text-xs text-gray-500">
                        Le montant minimum accepté est de 100 Gdes.
                      </p>

                    </div>

                    {/* Modes de paiement */}
                    <div className="mb-8">

                      <Label className="mb-3 block text-sm font-semibold">
                        Mode de paiement
                      </Label>

                      <div className="space-y-3">

                        {PAYMENT_METHODS.map((payment) => {
                          const isSelected =
                            paymentMethod === payment.id

                          return (
                            <button
                              key={payment.id}
                              type="button"
                              onClick={() =>
                                setPaymentMethod(payment.id)
                              }
                              aria-pressed={isSelected}
                              className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                                isSelected
                                  ? "border-pah-green bg-pah-green/5"
                                  : "border-gray-200 hover:border-pah-green/40 dark:border-gray-600"
                              }`}
                            >

                              <div className="min-w-0 flex-1">

                                <p className="font-semibold text-gray-900 dark:text-white">
                                  {payment.label}
                                </p>

                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                  {payment.description}
                                </p>

                              </div>

                              <span
                                aria-hidden="true"
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                                  isSelected
                                    ? "border-pah-green"
                                    : "border-gray-300 dark:border-gray-500"
                                }`}
                              >
                                {isSelected && (
                                  <span className="h-2.5 w-2.5 rounded-full bg-pah-green" />
                                )}
                              </span>

                            </button>
                          )
                        })}

                      </div>

                    </div>

                    <Button
                      type="button"
                      onClick={goToInformation}
                      disabled={amountValue < 100}
                      className="h-12 w-full bg-pah-green font-semibold text-white hover:bg-pah-green-dark disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Continuer
                    </Button>

                  </motion.div>
                )}

                {/* =================================================
                    ÉTAPE 2
                ================================================= */}

                {step === "information" && (
                  <motion.div
                    key="information"
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8 dark:border-gray-700 dark:bg-gray-800"
                  >

                    <div className="mb-8 flex items-center gap-4 border-b border-gray-100 pb-5 dark:border-gray-700">

                      <Image
                        src="/images/logo-pah.png"
                        alt="Logo PAH"
                        width={45}
                        height={45}
                        className="object-contain"
                      />

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-wider text-pah-green">
                          Étape 2 sur 2
                        </p>

                        <h2 className="mt-1 font-heading text-xl font-bold text-gray-900 dark:text-white">
                          Vos informations
                        </h2>

                      </div>

                    </div>

                    {/* Récapitulatif */}
                    <div className="mb-7 rounded-xl border border-pah-green/10 bg-pah-green/5 p-5 dark:bg-pah-green/10">

                      <div className="flex items-center justify-between gap-4">

                        <div>

                          <p className="text-xs font-medium text-gray-500">
                            Montant du don
                          </p>

                          <p className="mt-1 text-2xl font-bold text-pah-green-dark">
                            {amountValue.toLocaleString("fr-FR")} Gdes
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            {selectedPaymentMethod?.label}
                          </p>

                        </div>

                        <button
                          type="button"
                          onClick={() => setStep("amount")}
                          className="text-sm font-semibold text-pah-green hover:underline"
                        >
                          Modifier
                        </button>

                      </div>

                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >

                      {/* Nom */}
                      <div className="space-y-2">

                        <Label htmlFor="name">
                          Nom complet{" "}
                          <span className="text-red-500">*</span>
                        </Label>

                        <Input
                          id="name"
                          name="name"
                          autoComplete="name"
                          placeholder="Votre nom complet"
                          value={formData.name}
                          onChange={(event) =>
                            updateField(
                              "name",
                              event.target.value
                            )
                          }
                          required
                        />

                      </div>

                      {/* Email */}
                      <div className="space-y-2">

                        <Label htmlFor="email">
                          Adresse email{" "}
                          <span className="text-red-500">*</span>
                        </Label>

                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="vous@exemple.com"
                          value={formData.email}
                          onChange={(event) =>
                            updateField(
                              "email",
                              event.target.value
                            )
                          }
                          required
                        />

                      </div>

                      {/* Téléphone */}
                      <div className="space-y-2">

                        <Label htmlFor="phone">
                          Numéro de téléphone
                        </Label>

                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+509 XXXX XXXX"
                          value={formData.phone}
                          onChange={(event) =>
                            updateField(
                              "phone",
                              event.target.value
                            )
                          }
                        />

                      </div>

                      {/* Adresse */}
                      <div className="space-y-2">

                        <Label htmlFor="address">
                          Adresse
                        </Label>

                        <Input
                          id="address"
                          name="address"
                          autoComplete="street-address"
                          placeholder="Votre adresse"
                          value={formData.address}
                          onChange={(event) =>
                            updateField(
                              "address",
                              event.target.value
                            )
                          }
                        />

                      </div>

                      {/* Message */}
                      <div className="space-y-2">

                        <Label htmlFor="message">
                          Message ou note
                        </Label>

                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Votre message pour l'équipe PAH..."
                          value={formData.message}
                          onChange={(event) =>
                            updateField(
                              "message",
                              event.target.value
                            )
                          }
                          className="flex min-h-[110px] w-full resize-y rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />

                      </div>

                      {/* Anonymat */}
                      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-700/40">

                        <label
                          htmlFor="anonymous"
                          className="flex cursor-pointer items-start gap-3"
                        >

                          <input
                            id="anonymous"
                            name="anonymous"
                            type="checkbox"
                            checked={formData.anonymous}
                            onChange={(event) =>
                              updateField(
                                "anonymous",
                                event.target.checked
                              )
                            }
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-pah-green focus:ring-pah-green"
                          />

                          <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                            Je souhaite rester anonyme. Mon nom
                            ne sera pas affiché dans la liste
                            publique des donateurs.
                          </span>

                        </label>

                      </div>

                      {/* Boutons */}
                      <div className="flex flex-col gap-3 pt-3 sm:flex-row">

                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep("amount")}
                          className="h-12 flex-1"
                        >
                          Retour
                        </Button>

                        <Button
                          type="submit"
                          className="h-12 flex-[2] bg-pah-green font-semibold text-white hover:bg-pah-green-dark"
                        >
                          Confirmer le don
                        </Button>

                      </div>

                    </form>

                  </motion.div>
                )}

                {/* =================================================
                    ÉTAPE 3
                ================================================= */}

                {step === "confirmation" && (
                  <motion.div
                    key="confirmation"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-xl md:p-10 dark:border-gray-700 dark:bg-gray-800"
                  >

                    {/* Confirmation */}
                    <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-pah-green/10">

                      <span className="text-3xl font-bold text-pah-green">
                        ✓
                      </span>

                    </div>

                    <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                      Merci pour votre contribution
                    </h2>

                    <p className="mx-auto mt-3 max-w-md text-gray-600 dark:text-gray-300">
                      Votre demande de don a bien été enregistrée.
                      Les informations relatives au paiement seront
                      communiquées selon le mode de paiement choisi.
                    </p>

                    {/* Récapitulatif */}
                    <div className="mx-auto mt-8 max-w-md rounded-xl bg-gray-50 p-5 text-left dark:bg-gray-700/50">

                      <div className="flex justify-between gap-4 border-b border-gray-200 pb-3 text-sm dark:border-gray-600">

                        <span className="text-gray-500">
                          Montant
                        </span>

                        <span className="font-bold text-gray-900 dark:text-white">
                          {amountValue.toLocaleString("fr-FR")} Gdes
                        </span>

                      </div>

                      <div className="flex justify-between gap-4 border-b border-gray-200 py-3 text-sm dark:border-gray-600">

                        <span className="text-gray-500">
                          Paiement
                        </span>

                        <span className="font-medium text-gray-900 dark:text-white">
                          {selectedPaymentMethod?.label}
                        </span>

                      </div>

                      <div className="flex justify-between gap-4 pt-3 text-sm">

                        <span className="text-gray-500">
                          Date
                        </span>

                        <span className="font-medium text-gray-900 dark:text-white">
                          {new Date().toLocaleDateString("fr-FR")}
                        </span>

                      </div>

                    </div>

                    {/* Numéro de reçu */}
                    <div className="mx-auto mt-6 max-w-md rounded-xl border-2 border-dashed border-pah-yellow/40 bg-pah-yellow/10 p-5">

                      <p className="text-xs font-semibold uppercase tracking-wider text-pah-yellow">
                        Numéro de reçu
                      </p>

                      <p className="mt-3 break-all font-mono text-xl font-bold tracking-wider text-pah-text md:text-2xl">
                        {receiptNumber}
                      </p>

                      <Button
                        type="button"
                        onClick={copyReceiptNumber}
                        variant="outline"
                        size="sm"
                        className="mt-4 border-pah-yellow"
                      >
                        {copied
                          ? "Numéro copié"
                          : "Copier le numéro"}
                      </Button>

                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetDonation}
                        className="h-11 border-pah-green text-pah-green hover:bg-pah-green hover:text-white"
                      >
                        Faire un autre don
                      </Button>

                      <Button
                        asChild
                        className="h-11 bg-pah-green text-white hover:bg-pah-green-dark"
                      >
                        <a href="/">
                          Retour à l'accueil
                        </a>
                      </Button>

                    </div>

                  </motion.div>
                )}

              </AnimatePresence>
            </motion.main>
          </div>
        </div>
      </section>
    </>
  )
}

