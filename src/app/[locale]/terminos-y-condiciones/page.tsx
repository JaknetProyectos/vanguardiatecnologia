import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient min-h-[40vh] flex items-center relative overflow-hidden pt-24">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Terminos y condiciones
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <Badge variant="outline" className="mb-6">
              Ultima actualizacion: Enero 2025
            </Badge>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Aceptacion de los terminos
            </h2>
            <p className="text-gray-600 mb-6">
              Al acceder y utilizar los servicios de Vanguardia Tecnología, usted acepta estar sujeto a estos terminos y condiciones. Si no esta de acuerdo con alguna parte de estos terminos, no podra acceder a nuestros servicios.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Descripcion de servicios
            </h2>
            <p className="text-gray-600 mb-6">
              Vanguardia Tecnología ofrece servicios de tecnologia que incluyen:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Venta de equipos de computo y accesorios</li>
              <li>Soporte tecnico remoto y presencial</li>
              <li>Mantenimiento preventivo y correctivo</li>
              <li>Instalacion y configuracion de software</li>
              <li>Recuperacion de datos</li>
              <li>Desarrollo de software a la medida</li>
              <li>Sistemas de gestion empresarial</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Precios y pagos
            </h2>
            <p className="text-gray-600 mb-6">
              Todos los precios estan expresados en Pesos Mexicanos (MXN) y no incluyen IVA (16%) a menos que se indique lo contrario. Los precios pueden cambiar sin previo aviso. El pago debe realizarse al momento de la compra o contratacion del servicio.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Entrega de productos
            </h2>
            <p className="text-gray-600 mb-6">
              Los tiempos de entrega varian segun la ubicacion y disponibilidad del producto. Vanguardia Tecnología no se hace responsable por retrasos causados por terceros o circunstancias fuera de nuestro control.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Garantias
            </h2>
            <p className="text-gray-600 mb-6">
              Los productos nuevos cuentan con garantia del fabricante. Los servicios tecnicos tienen una garantia de 30 dias sobre el trabajo realizado. La garantia no cubre danos por mal uso, accidentes o modificaciones no autorizadas.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Limitacion de responsabilidad
            </h2>
            <p className="text-gray-600 mb-6">
              Vanguardia Tecnología no sera responsable por danos indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de uso de nuestros servicios. Nuestra responsabilidad maxima se limita al monto pagado por el servicio o producto.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Propiedad intelectual
            </h2>
            <p className="text-gray-600 mb-6">
              Todo el contenido de este sitio web, incluyendo textos, graficos, logos y software, es propiedad de Vanguardia Tecnología o sus licenciantes y esta protegido por las leyes de propiedad intelectual.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Modificaciones
            </h2>
            <p className="text-gray-600 mb-6">
              Vanguardia Tecnología se reserva el derecho de modificar estos terminos y condiciones en cualquier momento. Las modificaciones entraran en vigor inmediatamente despues de su publicacion en el sitio web.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Ley aplicable
            </h2>
            <p className="text-gray-600 mb-6">
              Estos terminos y condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa sera sometida a la jurisdiccion de los tribunales competentes de la Ciudad de Mexico.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Contacto
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> info@vanguardiatecnologia.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Telefono:</strong> +52 1 55 1559 2811
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
