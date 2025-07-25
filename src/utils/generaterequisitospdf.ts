// utils/generarRequisitosPdf.ts
import jsPDF from "jspdf"

export function generarRequisitosPdf() {
  const doc = new jsPDF()

  doc.setFont("helvetica", "bold")
  doc.setFontSize(18)
  doc.text("Requisitos de Admisión", 105, 20, { align: "center" })

  doc.setFont("helvetica", "normal")
  doc.setFontSize(12)
  doc.text(
    "Prepárese con anticipación y tenga a mano los documentos necesarios para asegurar su lugar.",
    20,
    35,
    { maxWidth: 170 }
  )

  doc.setFont("helvetica", "bold")
  doc.text("Documentos Requeridos:", 20, 55)

  const requisitos = [
    "Edad: 4 años cumplidos antes del 30 de junio del ciclo escolar",
    "Acta de nacimiento",
    "Tarjeta de vacunas al día",
    "Dos (2) fotos 2x2",
    "Formulario de inscripción completo",
  ]

  doc.setFont("helvetica", "normal")
  let y = 65
  requisitos.forEach((item) => {
    doc.text(`• ${item}`, 25, y)
    y += 10
  })

  doc.save("Requisitos-Admisión-Shaddai-School.pdf")
}
