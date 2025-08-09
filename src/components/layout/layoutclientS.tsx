"use client"

import SchoolNavbar from "@/components/layout/school-navbar"
import SchoolFooter from "@/components/layout/school-footer"
import WaitlistModal from "@/components/waitlist-modal"
import { useState } from "react"
import { Baloo_2 } from 'next/font/google'

const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--font-display" })

export default function LayoutClientSchool({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={baloo2.variable}>
      <SchoolNavbar onOpenModal={openModal} />
      <main>{children}</main>
      <SchoolFooter />
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
