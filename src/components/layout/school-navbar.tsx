"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { name: "Nosotros", href: "#nosotros" },
  { name: "Programa", href: "#programa" },
  { name: "Espacio", href: "#espacio" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" },
]

export default function SchoolNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-900 backdrop-blur-lg border-b border-slate-700/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/shaddai-school/propuesta" className="flex items-center gap-3 group">
            <span className="text-xl font-black tracking-tight text-white">SHADDAI SCHOOL</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:inline-flex bg-sky-500 hover:bg-sky-600" size="sm">
              <Link href="#admisiones">Admisiones</Link>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-slate-300 hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 shadow-lg absolute top-full left-0 w-full border-t border-slate-700">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-sky-500 hover:bg-sky-600">
              <Link href="#admisiones" onClick={() => setIsOpen(false)}>
                Admisiones
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
