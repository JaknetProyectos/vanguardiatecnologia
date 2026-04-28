import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient min-h-[40vh] flex items-center relative overflow-hidden pt-24">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Politica de privacidad
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
              1. Informacion que recopilamos
            </h2>
            <p className="text-gray-600 mb-6">
              En Vanguardia Tecnología, recopilamos informacion que usted nos proporciona directamente cuando:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Realiza una compra o solicita un servicio</li>
              <li>Se registra en nuestra plataforma</li>
              <li>Se comunica con nuestro equipo de soporte</li>
              <li>Completa formularios de contacto o cotizacion</li>
              <li>Se suscribe a nuestro boletin informativo</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Uso de la informacion
            </h2>
            <p className="text-gray-600 mb-6">
              Utilizamos la informacion recopilada para:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Procesar sus pedidos y proporcionar los servicios solicitados</li>
              <li>Enviar confirmaciones de pedidos y actualizaciones</li>
              <li>Responder a sus consultas y solicitudes de soporte</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Enviar comunicaciones de marketing (con su consentimiento)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Proteccion de datos
            </h2>
            <p className="text-gray-600 mb-6">
              Implementamos medidas de seguridad tecnicas y organizativas para proteger su informacion personal contra acceso no autorizado, perdida o alteracion. Esto incluye el uso de encriptacion SSL, firewalls y acceso restringido a los datos personales.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Compartir informacion
            </h2>
            <p className="text-gray-600 mb-6">
              No vendemos, alquilamos ni compartimos su informacion personal con terceros, excepto en los siguientes casos:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
              <li>Cuando sea requerido por ley o autoridades competentes</li>
              <li>Para proteger nuestros derechos legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Sus derechos
            </h2>
            <p className="text-gray-600 mb-6">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Acceder a su informacion personal</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminacion de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Contacto
            </h2>
            <p className="text-gray-600 mb-6">
              Si tiene preguntas sobre esta politica de privacidad o desea ejercer sus derechos, puede contactarnos en:
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> info@vanguardiatecnologia.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Telefono:</strong> +52 1 55 1559 2811
            </p>
            <p className="text-gray-600">
              <strong>Direccion:</strong> Avenida Chapultepec N480 Piso 9, Dep. 901, Colonia Roma Norte, Alcaldia Cuauhtemoc, C.P. 06700, Ciudad de Mexico.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
