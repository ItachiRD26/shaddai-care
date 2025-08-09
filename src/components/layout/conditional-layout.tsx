"use client"

import { usePathname } from 'next/navigation'
import LayoutClientGeneral from "./layoutclientG"
import LayoutClientSchool from "./layoutclientS"

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Si la ruta contiene 'school' usa el layout de school
  if (pathname.includes('school') || pathname.includes('shaddai-school')) {
    return <LayoutClientSchool>{children}</LayoutClientSchool>
  }
  
  // Por defecto usa el layout general (Day Care)
  return <LayoutClientGeneral>{children}</LayoutClientGeneral>
}
