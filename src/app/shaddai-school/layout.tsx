import type { Metadata } from "next"
import "./school.css"
import LayoutClientSchool from "@/components/layout/layoutclientS"


export const metadata: Metadata = {
  title: {
    template: "%s | Shaddai School",
    default: "Shaddai School - Excelencia Educativa",
  },
  description:
    "Institución educativa de excelencia académica con formación integral, educación bilingüe y valores cristianos.",
  keywords: [
    "escuela cristiana",
    "educación bilingüe",
    "Shaddai School",
    "colegio cristiano",
    "educación de calidad",
    "escuela bilingüe",
    "valores cristianos",
    "Santiago",
    "República Dominicana",
  ],
  authors: [{ name: "Shaddai School", url: "https://shadaaischool.com" }],
  creator: "Shaddai School",
  icons: {
    icon: "/images/logo-school.png",
  },
  openGraph: {
    title: "Shaddai School - Excelencia Educativa",
    description:
      "Descubra una experiencia educativa premium en Shaddai School. Formación integral, educación bilingüe y valores cristianos.",
    url: "https://shadaaischool.com",
    siteName: "Shaddai School",
    images: [
      {
        url: "/images/logo-school.png",
        width: 1200,
        height: 630,
        alt: "Shaddai School",
      },
    ],
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaddai School - Excelencia Educativa",
    description:
      "Formación académica de excelencia con valores cristianos y educación bilingüe. ¡Conozca Shaddai School!",
    images: ["/images/opengraph.jpg"],
    creator: "@shadaaischool",
  },
}

export default function ShaddaiSchoolLayout({ children }: { children: React.ReactNode }) {
  return <LayoutClientSchool>{children}</LayoutClientSchool>
}
