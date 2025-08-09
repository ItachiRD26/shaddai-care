"use client"

import { useState } from "react"
import { Share2 } from 'lucide-react'
import { cn } from "@/lib/utils"

type ShareButtonProps = {
  title: string
  text: string
  className?: string
}

export default function ShareButton({ title, text, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url })
      } else if (navigator.clipboard && url) {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      }
    } catch {
      // Silenciar errores de cancelación
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold",
        className
      )}
      aria-label={copied ? "Enlace copiado" : "Compartir artículo"}
    >
      <Share2 className="w-4 h-4" />
      {copied ? "Enlace copiado" : "Compartir"}
    </button>
  )
}
