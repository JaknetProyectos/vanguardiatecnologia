import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nombre, email, telefono, mensaje, servicioDeseado, presupuesto } = body;

        // Validación básica
        if (!nombre || !email || !mensaje) {
            return NextResponse.json(
                { error: "Faltan campos obligatorios (Nombre, Email, Mensaje)" },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Vanguardia Tech <info@vanguardiatecnologia.com>",
            to: ["info@vanguardiatecnologia.com",email],
            subject: `Nuevo Lead: ${servicioDeseado || "Consulta General"}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border-top: 8px solid #dc2626;">
          <h2 style="color: #1e1b4b;">Nuevo contacto desde el sitio web</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
          <p><strong>Presupuesto:</strong> ${presupuesto || "No definido"}</p>
          <p><strong>Servicio:</strong> ${servicioDeseado || "No especificado"}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f9fafb; padding: 15px; border-radius: 8px;">${mensaje}</p>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ message: "Email enviado con éxito", id: data?.id });
    } catch (err) {
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}