import type { Metadata } from "next"
import "./school.css"
import LayoutClientSchool from "@/components/layout/layoutclientS"

export const metadata: Metadata = {
  title: {
    template: "%s | Shaddai School",
    default: "Shaddai School - Excelencia Educativa",
  },
  description:
    "Institución educativa de excelencia académica con formación integral, educación bilingüe y valores cristianos",
}

export default function ShaddaiSchoolLayout({ children }: { children: React.ReactNode }) {
  return <LayoutClientSchool>{children}</LayoutClientSchool>
}
