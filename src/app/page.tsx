"use client"

import dynamic from 'next/dynamic'
import HeroSection from "@/components/home-hero"
import ProgramsSection from "@/components/programs-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import VideoSection from "@/components/video-section"
import { Baloo_2 } from 'next/font/google'

const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--font-display" })

// Dynamic imports to avoid SSR issues
const NavbarSimple = dynamic(() => import("@/components/layout/navbar"), {
  ssr: false,
  loading: () => <div className="h-20 bg-transparent" />
})

const Footer = dynamic(() => import("@/components/layout/footer"), {
  ssr: false,
  loading: () => <div className="h-32 bg-white" />
})

export default function HomePage() {
  return (
    <div className={baloo2.variable}>
      <NavbarSimple />
      <main>
        <HeroSection />
        <ProgramsSection />
        <VideoSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
