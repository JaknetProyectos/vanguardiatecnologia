import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle, XCircle, Clock } from "lucide-react";

export default function PoliticaReembolsos() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient min-h-[40vh] flex items-center relative overflow-hidden pt-24">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Politica de reembolsos y devoluciones
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-8">
              Ultima actualizacion: Enero 2025
            </Badge>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6 text-center">
                  <Clock className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900">30 dias</h3>
                  <p className="text-sm text-gray-600">Para solicitar devolucion</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900">Reembolso completo</h3>
                  <p className="text-sm text-gray-600">Si el producto tiene defectos</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-6 text-center">
                  <AlertCircle className="h-10 w-10 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900">5-10 dias habiles</h3>
                  <p className="text-sm text-gray-600">Para procesar reembolso</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Politica de devoluciones
              </h2>
              <p className="text-gray-600 mb-6">
                En Vanguardia Tecnología queremos que estes completamente satisfecho con tu compra. Si por alguna razon no lo estas, aceptamos devoluciones dentro de los 30 dias posteriores a la fecha de compra, sujeto a las siguientes condiciones:
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Condiciones para devolucion:
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>El producto debe estar en su empaque original</li>
                <li>Debe incluir todos los accesorios, manuales y documentacion</li>
                <li>El producto no debe mostrar signos de uso excesivo o dano</li>
                <li>Debe presentar el comprobante de compra original</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. Productos no elegibles para devolucion
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-500 mt-1" />
                  <ul className="text-gray-600 space-y-2">
                    <li>Software con licencia activada</li>
                    <li>Productos personalizados o configurados a medida</li>
                    <li>Consumibles (cartuchos, tintas, etc.)</li>
                    <li>Productos con sellos de garantia rotos</li>
                    <li>Servicios ya prestados</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. Proceso de devolucion
              </h2>
              <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-3">
                <li>Contacta a nuestro equipo de soporte al +52 1 55 1559 2811 o info@vanguardiatecnologia.com</li>
                <li>Proporciona tu numero de pedido y motivo de la devolucion</li>
                <li>Recibiras instrucciones para enviar el producto</li>
                <li>Una vez recibido e inspeccionado, procesaremos tu reembolso</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. Reembolsos
              </h2>
              <p className="text-gray-600 mb-6">
                Una vez aprobada la devolucion, el reembolso se procesara de la siguiente manera:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Tarjeta de credito/debito:</strong> 5-10 dias habiles para reflejarse en tu estado de cuenta</li>
                <li><strong>Transferencia bancaria:</strong> 3-5 dias habiles</li>
                <li><strong>Credito en tienda:</strong> Inmediato, disponible para futuras compras</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. Garantias de productos
              </h2>
              <p className="text-gray-600 mb-6">
                Todos nuestros productos nuevos cuentan con garantia del fabricante. Los productos reacondicionados tienen una garantia de 90 dias proporcionada por Vanguardia Tecnología.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Servicios tecnicos
              </h2>
              <p className="text-gray-600 mb-6">
                Los servicios tecnicos tienen una garantia de 30 dias sobre el trabajo realizado. Si el problema persiste despues del servicio, lo revisaremos sin costo adicional. Esta garantia no aplica si:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>El equipo ha sido manipulado por terceros</li>
                <li>El problema es causado por mal uso del equipo</li>
                <li>Se han instalado componentes no autorizados</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Contacto
              </h2>
              <p className="text-gray-600 mb-2">
                Para solicitar una devolucion o reembolso, contactanos:
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> info@vanguardiatecnologia.com
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Telefono:</strong> +52 1 55 1559 2811
              </p>
              <p className="text-gray-600">
                <strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
