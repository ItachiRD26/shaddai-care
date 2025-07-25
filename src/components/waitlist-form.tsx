"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Mail, Phone, User, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface FormData {
  nombre: string
  telefono: string
  email: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

interface WaitlistFormProps {
  onSuccess?: () => void
}

export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica
    if (!formData.nombre.trim() || !formData.telefono.trim() || !formData.email.trim()) {
      setStatus({
        type: "error",
        message: "Por favor complete todos los campos",
      })
      return
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Por favor ingrese un correo electrónico válido",
      })
      return
    }

    setStatus({
      type: "loading",
      message: "Enviando solicitud...",
    })

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({
          type: "success",
          message: result.message,
        })
        // Limpiar formulario
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
        })

        // Esperar 2 segundos y cerrar el modal si se proporcionó la función onSuccess
        if (onSuccess) {
          setTimeout(() => {
            onSuccess()
          }, 2000)
        }
      } else {
        setStatus({
          type: "error",
          message: result.error || "Error al enviar la solicitud",
        })
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Error de conexión. Por favor intente nuevamente.",
      })

      console.error("Error enviando solicitud:", error)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-xl">
      <CardHeader className="text-center pb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Users className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-3xl font-bold text-orange-800 mb-2">Lista de Espera 2025</CardTitle>
        <CardDescription className="text-lg text-orange-700">
          Complete el formulario y nuestro equipo se comunicará con usted para agendar una visita personalizada
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Nombre */}
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-orange-800 font-semibold flex items-center gap-2">
              <User className="w-4 h-4" />
              Nombre Completo del Padre/Madre
            </Label>
            <Input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Ej: María García Rodríguez"
              className="bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-lg py-3"
              disabled={status.type === "loading"}
            />
          </div>

          {/* Campo Teléfono */}
          <div className="space-y-2">
            <Label htmlFor="telefono" className="text-orange-800 font-semibold flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Número de Teléfono
            </Label>
            <Input
              id="telefono"
              name="telefono"
              type="tel"
              value={formData.telefono}
              onChange={handleInputChange}
              placeholder="Ej: (809) 123-4567"
              className="bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-lg py-3"
              disabled={status.type === "loading"}
            />
          </div>

          {/* Campo Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-orange-800 font-semibold flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Correo Electrónico
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Ej: maria.garcia@gmail.com"
              className="bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 text-lg py-3"
              disabled={status.type === "loading"}
            />
          </div>

          {/* Mensaje de Estado */}
          {status.type !== "idle" && (
            <div
              className={`p-4 rounded-lg flex items-center gap-3 ${
                status.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : status.type === "error"
                    ? "bg-red-50 border border-red-200 text-red-800"
                    : "bg-blue-50 border border-blue-200 text-blue-800"
              }`}
            >
              {status.type === "success" && <CheckCircle className="w-5 h-5 text-green-600" />}
              {status.type === "error" && <AlertCircle className="w-5 h-5 text-red-600" />}
              {status.type === "loading" && <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />}
              <p className="font-medium">{status.message}</p>
            </div>
          )}

          {/* Botón de Envío */}
          <Button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
          >
            {status.type === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando Solicitud...
              </>
            ) : (
              <>
                <Users className="w-5 h-5 mr-2" />
                Unirse a la Lista de Espera
              </>
            )}
          </Button>

          {/* Información adicional */}
          <div className="bg-white/50 rounded-lg p-4 text-center">
            <p className="text-sm text-orange-700">
              <strong>🔒 Su información está segura.</strong> Solo la usaremos para contactarle sobre el proceso de
              admisión.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
