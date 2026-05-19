"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function LegalEs() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
        .legal-container section { margin-bottom: 3rem; }
      `}} />

            <section>
                <h1>Política de reembolsos y devoluciones</h1>

                <p><strong>POLÍTICA DE REEMBOLSOS Y DEVOLUCIONES</strong><br /><strong>VENTAS DIAGON, S.A. DE CV</strong>  </p>
                <ol>
                    <li><strong>Principios Generales</strong><br />Esta política establece las condiciones bajo las cuales los Clientes de <strong>Vanguardia Tecnología</strong> pueden solicitar  <strong>cancelaciones, devoluciones o reembolsos</strong> por servicios o productos adquiridos a través de  <strong>Vanguardia Tecnología</strong> <strong>.com</strong>, cotización directa o canales oficiales.<br />Nuestro compromiso es ofrecer soluciones justas, transparentes y razonables, equilibrando los derechos del consumidor con la naturaleza técnica de nuestros servicios y productos tecnológicos.<br /><strong>II. Alcance</strong><br />Aplica a todas las compras o contrataciones realizadas con <strong>VENTAS DIAGON, S.A. DE C.V.</strong>, ya sea en formato:  </li>
                    <li><strong>Servicios técnicos o digitales</strong> (soporte remoto, mantenimiento, instalación, desarrollo, licencias electrónicas).  </li>
                    <li><strong>Productos físicos</strong> (equipos de cómputo, accesorios, periféricos, refacciones, etc.).<br /><strong>III. Política General</strong>  </li>
                    <li>Cada solicitud de reembolso o cancelación será <strong>evaluada individualmente</strong> por nuestro equipo de atención y soporte.  </li>
                    <li>Vanguardia Tecnología se reserva el derecho de aprobar o rechazar solicitudes cuando existan <strong>causas no atribuibles</strong> al Proveedor (mal uso, incompatibilidad, cambio de opinión o intervención externa).  </li>
                    <li>Los reembolsos aprobados se realizarán <strong>mediante el mismo método de pago</strong> utilizado en la compra, sin cargos adicionales.<br /><strong>IV. Cancelación de Servicios</strong><br /><strong>Antes de iniciar el servicio:</strong>  </li>
                    <li>El Cliente podrá cancelar sin penalización, siempre que el servicio no haya comenzado ni se hayan generado costos operativos (p. ej., licencias o materiales adquiridos).<br /><strong>Después de iniciado el servicio:</strong>  </li>
                    <li>No se realizarán reembolsos una vez iniciada la ejecución técnica (soporte remoto, diagnóstico, instalación o desarrollo).  </li>
                    <li>En caso de que el servicio no pueda completarse por <strong>causas imputables a </strong> <strong>Vanguardia Tecnología</strong>, se ofrecerá el reembolso total<br /><strong>Servicios con contrato mensual o soporte continuo:</strong>  </li>
                    <li>La cancelación aplica a partir del <strong>siguiente periodo de facturación</strong>, sin reembolso de pagos ya efectuados.<br /><strong>V. Devolución de Productos</strong><br /><strong>Condiciones generales</strong><br />El Cliente podrá solicitar devolución únicamente en los siguientes casos:  </li>
                    <li>Producto incorrecto o diferente al solicitado.  </li>
                    <li>Daño físico visible al momento de la entrega (debe reportarse en las primeras <strong>24 horas</strong>).  </li>
                    <li>Defecto de fábrica detectado dentro del periodo de garantía.<br /><strong>Requisitos para aceptar devolución</strong>  </li>
                    <li>El producto debe estar <strong>sin uso</strong>, con  <strong>empaque original</strong>,  <strong>accesorios completos</strong>, manuales y número de serie legible.  </li>
                    <li>No se aceptan devoluciones de productos que presenten <strong>golpes, rayones, alteraciones o manipulación indebida</strong>.  </li>
                    <li>El Cliente deberá solicitar la devolución por correo o mediante su cuenta en <strong>com</strong>, adjuntando evidencia (fotografías, número de pedido, descripción del incidente).<br /><strong>Exclusiones de reembolso en productos físicos</strong><br />No aplican devoluciones ni reembolsos en:  </li>
                    <li><strong>Productos personalizados, reacondicionados </strong> <strong>o</strong> <strong> open-box</strong> (se indicará en la descripción del artículo).  </li>
                    <li><strong>Accesorios, cables o refacciones</strong> que hayan sido abiertos o instalados.  </li>
                    <li><strong>Equipos dañados por mal uso, sobrecarga eléctrica, humedad o virus</strong>.<br /><strong>VI. Licencias, Software y Productos Digitales</strong>  </li>
                    <li>Las <strong>licencias electrónicas, descargas digitales y claves de activación</strong> no son reembolsables una vez entregadas o activadas.  </li>
                    <li>Si la clave presenta un error atribuible al sistema de activación del proveedor, Vanguardia Tecnología gestionará la <strong>reposición o corrección</strong> directamente con el fabricante.  </li>
                    <li>El Cliente es responsable de <strong>verificar compatibilidad</strong> con su sistema antes de la compra (versión, idioma, plataforma, requisitos mínimos).<br /><strong>VII. Tiempos y Formas de Reembolso</strong>  </li>
                    <li>Una vez aprobada la solicitud, el reembolso se procesará en un plazo de <strong>3 a 10 días hábiles</strong>, dependiendo del método de pago y los tiempos de los bancos o pasarelas.  </li>
                    <li>En caso de pagos con <strong>tarjeta de crédito o débito</strong>, el reembolso se reflejará directamente en la cuenta del Cliente, sujeto a validación de la institución emisora.<br /><strong>VIII. Costos de Envío y Logística</strong>  </li>
                    <li>En devoluciones aprobadas por error o defecto atribuible a Vanguardia Tecnología, los <strong>costos de envío correrán por cuenta del Proveedor</strong>.  </li>
                    <li>Si la devolución se debe a un error del Cliente (modelo equivocado, cambio de opinión, etc.), los <strong>costos de envío y gestión</strong> correrán por cuenta del Cliente.<br /><strong>IX. Casos Especiales</strong><br /><strong>Reembolsos parciales o proporcionales</strong><br />Cuando el servicio o producto haya sido parcialmente entregado, Vanguardia Tecnología podrá ofrecer un reembolso proporcional al grado de avance o tiempo no utilizado.<br /><strong>Errores de cobro o duplicidad</strong><br />Si se detecta un cargo duplicado o incorrecto, Vanguardia Tecnología realizará la corrección y reembolso inmediato una vez verificada la operación.<br /><strong>Fuerza mayor</strong><br />No se otorgarán reembolsos por fallas derivadas de causas ajenas a Vanguardia Tecnología, tales como cortes eléctricos, virus, siniestros, ataques informáticos, o fallos de fabricantes o redes externas.<br /><strong>X. Procedimiento de Solicitud</strong><br />Para solicitar cancelación o reembolso, el Cliente deberá:  </li>
                    <li>Enviar un correo a info@vanguardiatecnologia.com con el asunto “Solicitud de Reembolso” o “Cancelación de Servicio”.  </li>
                    <li>Incluir:  </li>
                    <li>Nombre completo  </li>
                    <li>Número de pedido o contrato  </li>
                    <li>Descripción del motivo de la solicitud  </li>
                    <li>Evidencia del incidente (en su caso)  </li>
                    <li>Nuestro equipo responderá en un plazo máximo de <strong>5 días hábiles</strong>, confirmando la recepción y los pasos siguientes.<br /><strong>XI. Derechos del Consumidor</strong><br />Esta política se encuentra alineada con la <strong>Ley Federal de Protección al Consumidor</strong> y la  <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>.<br />En caso de controversia o inconformidad, el Cliente puede acudir a la <strong>PROFECO</strong>:<br />Tel. 55 5568 8722<br /><a href="https://www.gob.mx/profeco" title="https://www.gob.mx/profeco">www.gob.mx/profeco</a><br /><strong>XII. Modificaciones</strong><br />Vanguardia Tecnología podrá actualizar esta política cuando existan cambios operativos, normativos o tecnológicos que lo requieran.<br />Las versiones actualizadas se publicarán en <strong>Vanguardia Tecnología</strong> <strong>.com/</strong> <strong>politicas</strong> con su fecha de entrada en vigor.<br /><strong>XIII. Contacto</strong><br /><strong>VENTAS DIAGON, S.A. DE C.V.</strong><br />Avenida Chapultepec N° 480, Piso 9, Depto. 901<br />Colonia Roma Norte, Alcaldía Cuauhtémoc<br />C.P. 06700, Ciudad de México<br />Correo: info@vanguardiatecnologia.com  </li>
                </ol>
                <p><strong>Vanguardia Tecnología</strong> <strong> se reserva el derecho de modificar esta política. Los cambios se publicarán en el sitio web y aplicarán a transacciones posteriores a su publicación.</strong>  </p>

            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
      `}} />

            <section>
                <h1>REFUND AND RETURNS POLICY</h1>
                <p><strong>VENTAS DIAGON, S.A. DE CV</strong>  </p>
                <ol>
                    <li><strong>General Principles</strong><br />This policy establishes the conditions under which the Customers of <strong>Vanguardia Tecnología</strong> may request <strong>cancellations, returns, or refunds</strong> for services or products acquired through <strong>Vanguardia Tecnología.com</strong>, direct quotes, or official channels.<br />Our commitment is to offer fair, transparent, and reasonable solutions, balancing consumer rights with the technical nature of our technological services and products.<br /><strong>II. Scope</strong><br />Applies to all purchases or contracts made with <strong>VENTAS DIAGON, S.A. DE C.V.</strong>, whether in the form of:  </li>
                    <li><strong>Technical or digital services</strong> (remote support, maintenance, installation, development, electronic licenses).  </li>
                    <li><strong>Physical products</strong> (computer equipment, accessories, peripherals, spare parts, etc.).<br /><strong>III. General Policy</strong>  </li>
                    <li>Each refund or cancellation request will be <strong>evaluated individually</strong> by our customer service and support team.  </li>
                    <li>Vanguardia Tecnología reserves the right to approve or reject requests when there are <strong>causes not attributable</strong> to the Provider (misuse, incompatibility, change of mind, or external intervention).  </li>
                    <li>Approved refunds will be processed <strong>using the same payment method</strong> used for the purchase, without additional charges.<br /><strong>IV. Service Cancellation</strong><br /><strong>Before starting the service:</strong>  </li>
                    <li>The Customer may cancel without penalty, provided that the service has not started and no operational costs have been generated (e.g., acquired licenses or materials).<br /><strong>After starting the service:</strong>  </li>
                    <li>No refunds will be issued once the technical execution has begun (remote support, diagnosis, installation, or development).  </li>
                    <li>In the event that the service cannot be completed due to <strong>causes attributable to Vanguardia Tecnología</strong>, a full refund will be offered.<br /><strong>Services with a monthly contract or continuous support:</strong>  </li>
                    <li>The cancellation applies starting from the <strong>next billing period</strong>, without a refund for payments already made.<br /><strong>V. Product Returns</strong><br /><strong>General conditions</strong><br />The Customer may request a return only in the following cases:  </li>
                    <li>Incorrect product or different from the one requested.  </li>
                    <li>Visible physical damage at the time of delivery (must be reported within the first <strong>24 hours</strong>).  </li>
                    <li>Factory defect detected within the warranty period.<br /><strong>Requirements to accept a return</strong>  </li>
                    <li>The product must be <strong>unused</strong>, in its <strong>original packaging</strong>, with <strong>complete accessories</strong>, manuals, and a legible serial number.  </li>
                    <li>Returns of products that show <strong>bumps, scratches, alterations, or improper handling</strong> will not be accepted.  </li>
                    <li>The Customer must request the return by email or through their account at <strong>com</strong>, attaching evidence (photographs, order number, description of the incident).<br /><strong>Refund exclusions for physical products</strong><br />Returns or refunds do not apply to:  </li>
                    <li><strong>Personalized, refurbished, or open-box products</strong> (as indicated in the item description).  </li>
                    <li><strong>Accessories, cables, or spare parts</strong> that have been opened or installed.  </li>
                    <li><strong>Equipment damaged by misuse, electrical surge, humidity, or viruses</strong>.<br /><strong>VI. Licenses, Software, and Digital Products</strong>  </li>
                    <li><strong>Electronic licenses, digital downloads, and activation keys</strong> are non-refundable once delivered or activated.  </li>
                    <li>If the key presents an error attributable to the provider's activation system, Vanguardia Tecnología will manage the <strong>replacement or correction</strong> directly with the manufacturer.  </li>
                    <li>The Customer is responsible for <strong>verifying compatibility</strong> with their system before purchase (version, language, platform, minimum requirements).<br /><strong>VII. Refund Times and Methods</strong>  </li>
                    <li>Once the request is approved, the refund will be processed within <strong>3 to 10 business days</strong>, depending on the payment method and the processing times of banks or gateways.  </li>
                    <li>In the case of payments with <strong>credit or debit cards</strong>, the refund will be reflected directly in the Customer's account, subject to validation by the issuing institution.<br /><strong>VIII. Shipping and Logistics Costs</strong>  </li>
                    <li>For returns approved due to error or defect attributable to Vanguardia Tecnología, <strong>shipping costs will be covered by the Provider</strong>.  </li>
                    <li>If the return is due to a Customer error (wrong model, change of mind, etc.), <strong>shipping and management costs</strong> will be covered by the Customer.<br /><strong>IX. Special Cases</strong><br /><strong>Partial or proportional refunds</strong><br />When the service or product has been partially delivered, Vanguardia Tecnología may offer a refund proportional to the degree of progress or unused time.<br /><strong>Billing errors or duplications</strong><br />If a duplicate or incorrect charge is detected, Vanguardia Tecnología will perform the correction and immediate refund once the operation is verified.<br /><strong>Force Majeure</strong><br />No refunds will be granted for failures derived from causes beyond Vanguardia Tecnología's control, such as power outages, viruses, natural disasters, cyberattacks, or failures of manufacturers or external networks.<br /><strong>X. Request Procedure</strong><br />To request a cancellation or refund, the Customer must:  </li>
                    <li>Send an email to info@vanguardiatecnologia.com with the subject "Refund Request" or "Service Cancellation".  </li>
                    <li>Include:  </li>
                    <li>Full Name  </li>
                    <li>Order or contract number  </li>
                    <li>Description of the reason for the request  </li>
                    <li>Evidence of the incident (if applicable)  </li>
                    <li>Our team will respond within a maximum of <strong>5 business days</strong>, confirming receipt and the next steps.<br /><strong>XI. Consumer Rights</strong><br />This policy is aligned with the <strong>Federal Consumer Protection Law</strong> and the <strong>Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP)</strong>.<br />In case of controversy or non-conformity, the Customer may contact <strong>PROFECO</strong>:<br />Tel. 55 5568 8722<br /><a href="[https://www.gob.mx/profeco](https://www.gob.mx/profeco)" title="[https://www.gob.mx/profeco](https://www.gob.mx/profeco)">www.gob.mx/profeco</a><br /><strong>XII. Modifications</strong><br />Vanguardia Tecnología may update this policy when operational, regulatory, or technological changes require it.<br />Updated versions will be published at <strong>Vanguardia [Tecnología.com/policies](https://Tecnología.com/policies)</strong> with their effective date.<br /><strong>XIII. Contact</strong><br /><strong>VENTAS DIAGON, S.A. DE C.V.</strong><br />Avenida Chapultepec N° 480, Piso 9, Depto. 901<br />Colonia Roma Norte, Alcaldía Cuauhtémoc<br />C.P. 06700, Mexico City<br />Email: info@vanguardiatecnologia.com  </li>
                </ol>
                <p><strong>Vanguardia Tecnología reserves the right to modify this policy. Changes will be published on the website and will apply to transactions subsequent to their publication.</strong>  </p>
            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                {locale === "es" ? <LegalEs /> : <LegalEn />}
            </main>
            <Footer />
        </div>
    );
}