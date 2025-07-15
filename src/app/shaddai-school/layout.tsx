import type { Metadata } from "next"
import "./school.css"
import { Baloo_2 } from "next/font/google"
import SchoolNavbar from "@/components/layout/school-navbar"
import SchoolFooter from "@/components/layout/school-footer"

const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: {
    template: "%s | Shaddai School",
    default: "Shaddai School - Excelencia Educativa",
  },
  description:
    "Institución educativa de excelencia académica con formación integral",
}

export default function SchoolLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={baloo2.variable}>
      <SchoolNavbar />
      <main>{children}</main>
      <SchoolFooter />
    </div>
  )
}
