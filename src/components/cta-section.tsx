"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="cta-section-dark py-24">
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
          Da el siguiente paso hacia el futuro de tu hijo
        </h2>
        <p className="text-lg text-white/80 mb-10">
          En Shaddai, cada niño crece rodeado de amor, seguridad y una educación diseñada para su desarrollo integral.
        </p>
        <Link href="/contacto">
          <Button className="btn-primary-professional cursor-pointer px-8 py-4 text-lg rounded-xl">
            Agenda una Visita
          </Button>
        </Link>
      </div>
    </section>
  )
}
