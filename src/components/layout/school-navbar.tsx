"use client"

import { useState, memo } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useScrollOptimized } from "@/hooks/useScrollOptimized"

const links = [
  { name: "Admisiones", href: "#admisiones" },
  { name: "Programa", href: "#programa" },
  { name: "Instalaciones", href: "#instalaciones" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" },
]

interface SchoolNavbarProps {
  onOpenModal: () => void
}

const SchoolNavbarOptimized = memo(function SchoolNavbar({ onOpenModal }: SchoolNavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = useScrollOptimized(20)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-orange-500/95 backdrop-blur-sm shadow-lg border-b border-orange-500"
          : "bg-orange-500/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="bg-white rounded-lg flex items-center justify-center group-hover:bg-orange-50 transition-colors">
              <Image
                src="/images/logo-school.png"
                alt="Shaddai School Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white leading-tight">SHADDAI</span>
              <span className="font-semibold text-sm text-orange-200 leading-tight -mt-1">SCHOOL</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-orange-100 hover:text-white hover:bg-orange-500/50 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={onOpenModal}
              className="hidden md:inline-flex bg-white text-orange-500 hover:bg-orange-50 font-semibold cursor-pointer"
              size="sm"
            >
              Aplicar Ahora
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-orange-100 hover:text-white hover:bg-orange-500/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-orange-500 border-t border-orange-500 shadow-lg">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-3 rounded-lg text-base font-medium text-orange-100 hover:text-white hover:bg-orange-500/50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-orange-500 mt-4">
              <Button
                onClick={() => {
                  onOpenModal()
                  setIsOpen(false)
                }}
                className="w-full bg-white text-orange-500 hover:bg-orange-50 font-semibold cursor-pointer"
              >
                Proceso de Admisión
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
})

export default SchoolNavbarOptimized
