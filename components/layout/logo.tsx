"use client"

import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { img: 36, text: "text-base" },
    md: { img: 48, text: "text-xl" },
    lg: { img: 60, text: "text-2xl" },
  }

  const s = sizes[size]

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/logo-pah.png"
        alt="Parti Agricole Haïtien"
        width={s.img}
        height={s.img}
        className="object-contain"
        priority
      />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-heading font-bold ${s.text} text-pah-green-dark tracking-tight`}>
            PAH
          </span>
          <span className="text-[10px] text-pah-green font-medium tracking-widest uppercase">
            Parti Agricole Haïtien
          </span>
        </div>
      )}
    </Link>
  )
}