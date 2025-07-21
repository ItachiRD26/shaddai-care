"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { name: "Inicio", href: "/shaddai-school" },
  { name: "Nosotros", href: "/shaddai-school#nosotros" },
  { name: "Programa", href: "/shaddai-school#programa" },
  { name: "Admisiones", href: "/shaddai-school#admisiones" },
  { name: "Contacto", href: "/shaddai-school#contacto" },
]

export default function SchoolNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Professional Logo */}
          <Link href="/shaddai-school" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-800 leading-tight">SHADDAI</span>
              <span className="font-semibold text-sm text-blue-700 leading-tight -mt-1">SCHOOL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden md:inline-flex bg-blue-700 hover:bg-blue-800 text-white font-medium"
              size="sm"
            >
              <Link href="/shaddai-school#admisiones">Admisiones</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 mt-4">
              <Button asChild className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium">
                <Link href="/shaddai-school#admisiones" onClick={() => setIsOpen(false)}>
                  Proceso de Admisión
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
