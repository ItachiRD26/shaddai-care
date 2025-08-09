"use client"

import { useCallback, useState } from "react"
import { Share2 } from "lucide-react"

type Props = {
  title: string
  text?: string
  className?: string
}

export default function ShareButton({ title, text, className }: Props) {
  const [copied, setCopied] = useState(false)

  const onShare = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url })
        return
      } catch {
        // Si el usuario cancela, seguimos al fallback
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Silencioso
    }
  }, [title, text])

  return (
    <button
      type="button"
      onClick={onShare}
      className={className ?? "inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"}
    >
      <Share2 className="w-4 h-4" />
      {copied ? "Enlace copiado" : "Compartir"}
    </button>
  )
}
