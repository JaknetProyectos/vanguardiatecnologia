import { NextResponse } from 'next/server';
import { processEtominPayment } from '@/lib/payment';
import { sendOrderConfirmation } from '@/lib/confirmation';
import { headers } from 'next/headers';

export async function POST(req: Request) {
    try {
        const headerList = headers();
        const body = await req.json();
        const { paymentData, cartItems, totals } = body;
        const forwarded = (await headerList).get("x-forwarded-for");
        const ip = forwarded ? forwarded.split(',')[0] : "127.0.0.1";

        // 1. Ejecutar el pago con Etomin
        const paymentResponse = await processEtominPayment(paymentData,ip);

        // 2. Verificar Status del Pago (Crucial para evitar tickets de pagos declinados)
        if (paymentResponse.status !== 'APPROVED') {
            return NextResponse.json({
                success: false,
                message: paymentResponse.message || "La transacción fue declinada por el banco.",
                details: paymentResponse
            }, { status: 400 });
        }

        // 3. Si el pago es aprobado, enviamos el correo (Ticket)
        await sendOrderConfirmation({
            customer: paymentData.customer,
            items: cartItems,
            total: totals.total,
            orderId: paymentData.orderId
        });

        return NextResponse.json({
            success: true,
            orderId: paymentData.orderId,
            authorization: paymentResponse.authorizationNumber
        });

    } catch (error: any) {
        console.error("Checkout Error:", error);
        return NextResponse.json({
            success: false,
            message: error.message || "Error interno en el proceso de checkout"
        }, { status: 500 });
    }
}