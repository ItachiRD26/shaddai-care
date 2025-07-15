"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isShaddaiSchool = pathname.startsWith("/shaddai-school")

  return (
    <>
      {!isShaddaiSchool && <Navbar />}
      <main>{children}</main>
      {!isShaddaiSchool && <Footer />}
    </>
  )
}
