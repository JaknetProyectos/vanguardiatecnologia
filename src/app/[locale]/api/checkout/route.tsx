import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 👉 Email del negocio
const BUSINESS_EMAIL = "info@vanguardiatecnologia.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { paymentData, cartItems, totals } = body;

    // 1. Captura de IP para protocolos de seguridad
    const headerList = headers();

    const forwarded = (await headerList).get("x-forwarded-for");

    const clientIp = forwarded
      ? forwarded.split(",")[0]
      : "127.0.0.1";

    // 2. Aquí iría tu lógica real de pago (Etomin/Octano)
    // El objeto final para la pasarela incluiría:
    // { ...paymentData, ip: clientIp }

    const paymentSuccess = true;

    if (!paymentSuccess) {
      return NextResponse.json(
        {
          success: false,
          message: "Pago declinado",
        },
        {
          status: 400,
        }
      );
    }

    // 3. Generación del HTML estilo Ticket
    const itemsHtml = cartItems
      .map(
        (item: any) => `
      <div style="border-bottom: 1px solid #eee; padding: 10px 0; display: flex; justify-content: space-between;">
        <span style="font-size: 13px;">
          <strong>${item.quantity}x</strong>
          ${item.product.name}
        </span>

        <span style="font-size: 13px;">
          $${(
            item.product.price * item.quantity
          ).toLocaleString()}
        </span>
      </div>
    `
      )
      .join("");

    const emailHtml = `
      <div style="font-family: monospace; max-width: 500px; margin: auto; border: 2px solid #000; padding: 30px; color: #000;">

        <div style="text-align: center; border-bottom: 2px dashed #000; padding-bottom: 20px; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 20px; letter-spacing: 2px;">
            VANGUARDIA TECH
          </h1>

          <p style="font-size: 10px; margin: 5px 0;">
            ORDEN: #${paymentData.orderId}
          </p>

          <p style="font-size: 10px; margin: 0;">
            FECHA: ${new Date().toLocaleString()}
          </p>
        </div>

        <p style="font-size: 14px;">
          <strong>CLIENTE:</strong>
          ${paymentData.customer.firstName}
          ${paymentData.customer.lastName}
        </p>

        <p style="font-size: 14px;">
          <strong>EMAIL:</strong>
          ${paymentData.customer.email}
        </p>

        <p style="font-size: 12px; color: #555;">
          Tu pago ha sido procesado exitosamente bajo el protocolo de seguridad.
        </p>

        <div style="margin: 25px 0;">
          <p style="font-size: 10px; font-weight: bold; border-bottom: 1px solid #000; padding-bottom: 5px;">
            DESCRIPCIÓN DEL PEDIDO
          </p>

          ${itemsHtml}
        </div>

        <div style="text-align: right; margin-top: 20px;">
          <p style="font-size: 12px; margin: 5px 0;">
            SUBTOTAL:
            $${totals.subtotal.toLocaleString()}
          </p>

          <p style="font-size: 12px; margin: 5px 0;">
            IVA (16%):
            $${totals.tax.toLocaleString()}
          </p>

          <h2 style="font-size: 24px; margin: 10px 0; color: #d00000;">
            TOTAL:
            $${totals.total.toLocaleString()} MXN
          </h2>
        </div>

        <div style="text-align: center; border-top: 2px dashed #000; margin-top: 30px; padding-top: 20px;">
          <p style="font-size: 10px; color: #888;">
            GRACIAS POR TU PREFERENCIA
          </p>

          <p style="font-size: 9px; color: #aaa;">
            Este es un comprobante oficial de compra electrónica.
          </p>
        </div>
      </div>
    `;

    // 4. Envío de Emails
    try {
      await resend.emails.send({
        from:
          "Vanguardia Tech <info@vanguardiatecnologia.com>",

        // 👉 ahora se manda al cliente Y al negocio
        to: [
          paymentData.customer.email,
          BUSINESS_EMAIL,
        ],

        subject: `TICKET DE COMPRA #${paymentData.orderId}`,

        html: emailHtml,
      });
    } catch (e) {
      console.error("Error al enviar email:", e);
    }

    return NextResponse.json({
      success: true,
      message: "Operación completada con éxito",
      orderId: paymentData.orderId,
    });
  } catch (error) {
    console.error("Error en el servidor:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error interno",
      },
      {
        status: 500,
      }
    );
  }
}