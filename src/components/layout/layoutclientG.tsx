"use client"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Baloo_2 } from "next/font/google"

const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--font-display" })

export default function LayoutClientGeneral({ children }: { children: React.ReactNode }) {
  return (
    <div className={baloo2.variable}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
