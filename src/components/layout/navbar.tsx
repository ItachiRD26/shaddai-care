"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
              <Image
                src="/images/logo.png"
                alt="Shaddai Day-Care Logo"
                width={64}
                height={64}
                className="w-64 h-64 object-contain"
              />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black leading-none ${isScrolled ? "text-gray-900" : "text-white"}`}>
                SHADDAI
              </span>
              <span className={`text-sm font-bold -mt-1 leading-none ${isScrolled ? "text-pink-600" : "text-pink-300"}`}>
                DAY-CARE
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {["NOSOTROS", "PROGRAMAS", "INSCRIPCIONES", "BLOG", "GALERIA", "CONTACTO"].map((name) => (
              <Link
                key={name}
                href={`/${name.toLowerCase() === "inicio" ? "" : name.toLowerCase()}`}
                className={`font-semibold text-base transition-all duration-300 relative group py-2 ${
                  isScrolled ? "text-gray-800 hover:text-pink-500" : "text-white hover:text-yellow-300"
                }`}
              >
                {name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-1 rounded-full transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-pink-500" : "bg-yellow-300"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contacto">
              <Button
                className={`font-bold cursor-pointer rounded-full px-6 py-2.5 shadow-md transition-all duration-300 ${
                  isScrolled
                    ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                    : "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                }`}
              >
                AGENDAR VISITA
              </Button>
            </Link>
            <Link href="/inscripciones">
              <Button
                className={`font-bold rounded-full cursor-pointer px-6 py-2.5 shadow-md transition-all duration-300 ${
                  isScrolled ? "bg-pink-500 text-white hover:bg-pink-400" : "bg-pink-500 text-white hover:bg-pink-400"
                }`}
              >
                INSCRÍBETE
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              className={`p-3 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center ${
                isScrolled ? "bg-black/10" : "bg-white/20"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black/60 backdrop-blur-md border-t border-white/10 shadow-xl">
          <div className="px-6 pt-6 pb-8 space-y-5">
            <nav className="flex flex-col space-y-3 text-white text-lg font-medium tracking-wide">
              {["NOSOTROS", "PROGRAMAS", "INSCRIPCIONES", "BLOG", "GALERIA", "CONTACTO"].map((name) => (
                <Link
                  key={name}
                  href={`/${name.toLowerCase() === "inicio" ? "" : name.toLowerCase()}`}
                  className="px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4 pt-4">
              <Link href="/contacto" className="w-full sm:w-auto">
                <Button
                  className="w-full bg-yellow-400 cursor-pointer text-gray-900 hover:bg-yellow-300 font-bold rounded-full py-3 text-base shadow-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  AGENDAR VISITA
                </Button>
              </Link>
              <Link href="/inscripciones" className="w-full sm:w-auto mt-3 sm:mt-0">
                <Button
                  className="w-full bg-pink-500 cursor-pointer text-white hover:bg-pink-400 font-bold rounded-full py-3 text-base shadow-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  INSCRÍBETE AHORA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
