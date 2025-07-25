import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter, Baloo_2 } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Shaddai Day-Care - Donde los Pequeños Corazones Cultivan Grandes Sueños",
  description:
    "Centro de cuidado infantil profesional y amoroso en Valle Feliz. Programas especializados de guardería, preescolar y talleres creativos para niños de 6 meses a 5 años.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.className} ${baloo2.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
