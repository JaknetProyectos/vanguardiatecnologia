'use server';

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface OrderConfirmationProps {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    telefono: string;
    direccion: string;
    city: string;
    state: string;
    cp: string;
  };
  items: any[];
  total: number;
  orderId: string;
}

export async function sendOrderConfirmation({ customer, items, total, orderId }: OrderConfirmationProps) {
  try {
    // Cálculo de desglose para el ticket (Asumiendo que el total ya incluye IVA)
    const subtotal = total / 1.16;
    const tax = total - subtotal;

    // Generación dinámica de las filas de la tabla de productos
    const itemsHtml = items.map((item) => `
      <tr style="border-bottom: 1px solid #edf2f7;">
        <td style="padding: 12px 0; color: #4a5568; font-size: 14px;">
          <div style="font-weight: bold; color: #1a202c;">${item.product.name}</div>
          <div style="font-size: 12px; color: #718096;">SKU: ${item.product.id}</div>
        </td>
        <td style="padding: 12px 0; text-align: center; color: #4a5568; font-size: 14px;">${item.quantity}</td>
        <td style="padding: 12px 0; text-align: right; color: #1a202c; font-weight: bold; font-size: 14px;">
          $${(item.product.price * item.quantity).toLocaleString('es-MX', { minimumFractionDigits: 2 })}
        </td>
      </tr>
    `).join('');

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f9; margin: 0; padding: 40px 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            
            <div style="background-color: #1e1b4b; padding: 40px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px;">VANGUARDIA TECNOLÓGICA</h1>
              <p style="margin-top: 10px; opacity: 0.8; font-size: 14px;">Confirmación de Pedido #${orderId}</p>
            </div>

            <div style="padding: 40px;">
              <h2 style="color: #1a202c; font-size: 20px; margin-bottom: 8px;">¡Gracias por tu compra, ${customer.firstName}!</h2>
              <p style="color: #4a5568; font-size: 15px; line-height: 1.6;">
                Hemos procesado tu pago correctamente a través de <strong>Etomin</strong>. Tu pedido ya está en nuestro radar y comenzaremos con la gestión de inmediato.
              </p>

              <table style="width: 100%; border-collapse: collapse; margin-top: 30px;">
                <thead>
                  <tr style="border-bottom: 2px solid #e2e8f0;">
                    <th style="text-align: left; padding-bottom: 12px; font-size: 12px; text-transform: uppercase; color: #a0aec0;">Producto</th>
                    <th style="text-align: center; padding-bottom: 12px; font-size: 12px; text-transform: uppercase; color: #a0aec0;">Cant.</th>
                    <th style="text-align: right; padding-bottom: 12px; font-size: 12px; text-transform: uppercase; color: #a0aec0;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>

              <div style="margin-top: 20px; border-radius: 12px; background-color: #f8fafc; padding: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #4a5568; font-size: 14px;">
                  <span style="display: inline-block; width: 80%;">Subtotal:</span>
                  <span style="display: inline-block; width: 20%; text-align: right;">$${subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #4a5568; font-size: 14px;">
                  <span style="display: inline-block; width: 80%;">IVA (16%):</span>
                  <span style="display: inline-block; width: 20%; text-align: right;">$${tax.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 12px; padding-top: 12px; border-top: 1px solid #e2e8f0; color: #1a202c; font-size: 18px; font-weight: bold;">
                  <span style="display: inline-block; width: 60%;">TOTAL PAGADO:</span>
                  <span style="display: inline-block; width: 40%; text-align: right; color: #f97316;">$${total.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN</span>
                </div>
              </div>

              <div style="margin-top: 30px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                <h4 style="margin: 0 0 10px 0; font-size: 14px; color: #1a202c;">DATOS DE ENTREGA Y CONTACTO:</h4>
                <p style="margin: 0; font-size: 13px; color: #4a5568; line-height: 1.5;">
                  <strong>Dirección:</strong> ${customer.direccion}<br>
                  <strong>Ubicación:</strong> ${customer.city}, ${customer.state}. CP: ${customer.cp}<br>
                  <strong>Teléfono:</strong> ${customer.telefono}
                </p>
              </div>
            </div>

            <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #a0aec0;">
                Este es un recibo automático de tu transacción. <br>
                Si tienes dudas, contáctanos a <strong>info@vanguardiatecnologia.com</strong>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Envío del correo a través de Resend
    await resend.emails.send({
      from: "Vanguardia Tecnológica <info@vanguardiatecnologia.com>", // Asegúrate de tener el dominio verificado en Resend
      to: [customer.email, "info@vanguardiatecnologia.com"],
      subject: `🛒 Confirmación de Compra #${orderId} - Vanguardia Tecnológica`,
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Error al enviar el ticket por correo:", error);
    return { success: false, error };
  }
}