"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import WaitlistForm from "@/components/waitlist-form"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-20 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl mx-auto animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 text-orange-800 hover:bg-white hover:text-orange-900 cursor-pointer"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Cerrar</span>
        </Button>

        <WaitlistForm onSuccess={onClose} />
      </div>
    </div>
  )
}
