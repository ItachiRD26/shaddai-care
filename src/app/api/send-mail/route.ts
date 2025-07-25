import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { nombre, telefono, email } = await request.json()

    // Validación básica
    if (!nombre || !telefono || !email) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Configurar el transportador de nodemailer - CORREGIDO: createTransport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Contraseña de aplicación de Gmail
      },
    })

    // Configurar el correo para la escuela
    const mailOptionsToSchool = {
      from: process.env.GMAIL_USER,
      to: process.env.SCHOOL_EMAIL || process.env.GMAIL_USER,
      subject: "🎓 Nueva Solicitud - Lista de Espera Shaddai School",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff5f5;">
          <div style="background: linear-gradient(135deg, #ea580c, #f97316); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
              🎓 SHADDAI SCHOOL
            </h1>
            <p style="color: #fed7aa; margin: 10px 0 0 0; font-size: 16px;">
              Nueva Solicitud de Lista de Espera
            </p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #ea580c; margin-bottom: 25px; font-size: 24px;">
              📋 Información del Solicitante
            </h2>
            
            <div style="margin-bottom: 20px; padding: 15px; background: #fff7ed; border-left: 4px solid #f97316; border-radius: 8px;">
              <p style="margin: 0; color: #9a3412;"><strong>👤 Nombre:</strong></p>
              <p style="margin: 5px 0 0 0; color: #1f2937; font-size: 18px; font-weight: 600;">${nombre}</p>
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background: #fff7ed; border-left: 4px solid #f97316; border-radius: 8px;">
              <p style="margin: 0; color: #9a3412;"><strong>📞 Teléfono:</strong></p>
              <p style="margin: 5px 0 0 0; color: #1f2937; font-size: 18px; font-weight: 600;">${telefono}</p>
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background: #fff7ed; border-left: 4px solid #f97316; border-radius: 8px;">
              <p style="margin: 0; color: #9a3412;"><strong>📧 Correo Electrónico:</strong></p>
              <p style="margin: 5px 0 0 0; color: #1f2937; font-size: 18px; font-weight: 600;">${email}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #fef3c7; border-radius: 10px; border: 1px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>📅 Fecha de solicitud:</strong> ${new Date().toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f3f4f6; border-radius: 10px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Este correo fue enviado automáticamente desde el formulario de Lista de Espera de Shaddai School
            </p>
          </div>
        </div>
      `,
    }

    // Configurar el correo de confirmación para el padre
    const mailOptionsToParent = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "✅ Confirmación - Lista de Espera Shaddai School",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff5f5;">
          <div style="background: linear-gradient(135deg, #ea580c, #f97316); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
              🎓 SHADDAI SCHOOL
            </h1>
            <p style="color: #fed7aa; margin: 10px 0 0 0; font-size: 16px;">
              Educación Bilingüe y Cristiana de Excelencia
            </p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #ea580c; margin-bottom: 25px; font-size: 24px;">
              ¡Gracias por su interés, ${nombre}! ✨
            </h2>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Hemos recibido exitosamente su solicitud para unirse a nuestra <strong>Lista de Espera</strong>. 
              Su información ha sido registrada y nuestro equipo académico se pondrá en contacto con usted pronto.
            </p>
            
            <div style="background: #f0fdf4; border: 1px solid #22c55e; border-radius: 10px; padding: 20px; margin: 25px 0;">
              <h3 style="color: #15803d; margin: 0 0 15px 0; font-size: 18px;">
                📋 Próximos Pasos:
              </h3>
              <ul style="color: #166534; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Revisaremos su solicitud en las próximas 24-48 horas</li>
                <li style="margin-bottom: 8px;">Le contactaremos para agendar una visita al campus</li>
                <li style="margin-bottom: 8px;">Recibirá información detallada sobre nuestro programa</li>
                <li>Le guiaremos en el proceso de admisión paso a paso</li>
              </ul>
            </div>
            
            <div style="background: #fef3c7; border-radius: 10px; padding: 20px; margin: 25px 0;">
              <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">
                📞 ¿Preguntas Inmediatas?
              </h3>
              <p style="color: #92400e; margin: 0; font-size: 14px;">
                <strong>Teléfono:</strong> (809) 000-0000<br>
                <strong>Email:</strong> admisiones@shaddaischool.edu.do<br>
                <strong>WhatsApp:</strong> <a href="https://wa.me/18295525935" style="color: #ea580c;">Enviar mensaje</a>
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Gracias por confiar en Shaddai School para la educación de su hijo(a)
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              Calle José Antonio Salcedo, San Fernando de Montecristi, República Dominicana
            </p>
          </div>
        </div>
      `,
    }

    // Enviar ambos correos
    await Promise.all([transporter.sendMail(mailOptionsToSchool), transporter.sendMail(mailOptionsToParent)])

    return NextResponse.json(
      {
        success: true,
        message: "Solicitud enviada exitosamente. Revise su correo para la confirmación.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error enviando correo:", error)
    return NextResponse.json(
      {
        error: "Error interno del servidor. Por favor intente nuevamente.",
      },
      { status: 500 },
    )
  }
}
