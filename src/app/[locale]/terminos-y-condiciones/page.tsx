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

        <h1>Términos y condiciones</h1>
        <p><br /><strong>I.- Aceptación de los Términos</strong><br /><strong>Al acceder al sitio web </strong> <strong>Vanguardia Tecnología</strong> <strong>.com o contratar cualquiera de los servicios ofrecidos por VENTAS DIAGON, S.A. DE C.V. (en adelante, “</strong> <strong>Vanguardia Tecnología</strong> <strong>”), con domicilio en Avenida Chapultepec N.º 480, Piso 9, Departame</strong> <strong>nto 901, Colonia Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México, el usuario (en adelante, “el Cliente”) declara haber leído, comprendido y aceptado estos Términos y Condiciones de Servicio (en adelante, “los Términos”) del sitio web https://</strong> <strong>Vanguardia Tecnología</strong> <strong>.com (en adelante, el Sitio”).</strong><br />El uso del sitio o la contratación de cualquier servicio implica la aceptación expresa de los presentes Términos, así como del <strong>Aviso de Privacidad</strong> disponible en el mismo portal.<br />Si no está de acuerdo con alguna disposición, deberá abstenerse de utilizar nuestros servicios.<br /><strong>II.- Descripción de Servicios y Productos</strong><br /><strong>Vanguardia Tecnología</strong> ofrece dos líneas principales: (i)  <strong>servicios técnicos y de software</strong> y (ii)  <strong>venta de equipo de cómputo y periféricos</strong>. Lo esencial va aquí; los  <strong>detalles específicos, fichas técnicas, precios, existencias y promociones</strong> se consultan siempre en el Sitio:  <strong>Vanguardia Tecnología</strong> <strong>.com</strong> (secciones  <strong>/servicios</strong> y  <strong>/tienda</strong>).<br /><strong>Servicios (alcance general)</strong>  </p>
        <ul>
          <li><strong>🛰️</strong> <strong> Soporte en Órbita – Asistencia Remota.</strong> Diagnóstico y solución de incidencias menores, instalación puntual, ajustes de configuración y verificación básica de seguridad, mediante acceso remoto  <strong>previa autorización</strong> y bajo protocolo cifrado. Requiere conexión estable a internet y permisos del cliente.  </li>
          <li><strong>🚀</strong> <strong> Módulo de Software – Instalación y Configuración.</strong> Implementación de software (p. ej., antivirus corporativo, suites creativas, ERP básico), validando  <strong>requisitos del fabricante</strong>, compatibilidad y pruebas de funcionamiento.  </li>
          <li><strong>🛠️</strong> <strong> Escudo Espacial – Mantenimiento Preventivo.</strong> Limpieza de software, actualización de controladores, optimización de arranque, revisión de salud del sistema y buenas prácticas para prolongar la vida útil del equipo.  </li>
          <li><strong>🌌</strong> <strong> Rescate Estelar – Recuperación de Datos.</strong> Intento profesional de rescate en HDD/SSD/USB/SD.  <strong>Resultado no garantizado</strong>; se actúa con “mejor esfuerzo” y protocolos de confidencialidad.  </li>
          <li><strong>🛰️</strong> <strong> Centro de Mando – Soporte Mensual y Sistemas de Gestión.</strong> Contratos mensuales con asistencia remota ilimitada, visitas programadas, monitoreo y puesta en marcha de sistemas administrativos (órdenes de servicio, ventas, reportes, facturación).  </li>
          <li><strong>🌐</strong> <strong> Galaxia Digital – Desarrollo a la Medida.</strong> Plugins, integraciones y sistemas web/apps con entregables, cronograma y alcance definidos por propuesta; incluye pruebas y hardening básico.<br /><strong>Nota:</strong> cada servicio tiene alcances, exclusiones y entregables propios (SOW). Las variantes, tiempos, garantías de mano de obra y requisitos previos se muestran en nuestro <strong> Sitio.</strong><br /><strong>Productos (venta y catálogo)</strong><br />En nuestro <strong>Sitio</strong> encontrarás equipos nuevos, open-box o reacondicionados (según se indique), de marcas como Apple, HP, Dell, Lenovo, ASUS <strong>,</strong> entre otras. Cada producto cuenta con su ficha técnica con especificaciones (p. ej., procesador <strong>, </strong>RAM <strong>, </strong>almacenamiento SSD <strong>, </strong>gráficos <strong>, </strong>tamaño y resolución de pantalla <strong>, </strong>conectividad <strong>, </strong>idioma del teclado <strong>, </strong>SO, peso y dimensiones), estado (nuevo/reacondicionado), garantía <strong>, </strong>disponibilidad y precio <strong>.</strong><br /><strong>Fichas técnicas, compatibilidad e imágenes</strong>  </li>
          <li>Las especificaciones provienen del fabricante y/o del lote comercializado y pueden variar por revisión (ej.: RAM soldada vs. ampliable, número de puertos, panel IPS/TN, teclado ES/US).  </li>
          <li>Las imágenes son ilustrativas; el contenido final puede diferir por región o partida.  </li>
          <li>La compatibilidad con tu software, accesorios o flujos de trabajo es responsabilidad del cliente.<br /><strong>Precios, stock y promociones</strong>  </li>
          <li>Precios en <strong>MXN</strong> (IVA incluido salvo que se indique lo contrario).  </li>
          <li>Stock y ofertas sujetos a disponibilidad en tiempo real; pueden cambiar sin previo aviso<strong>.</strong><br /><strong>Entregas, envíos y licencias</strong>  </li>
          <li>Opciones de envío y/o recolección según la zona y el producto.  </li>
          <li>Tiempos de entrega estimados se indican al comprar.  </li>
          <li>Licencias electrónicas (cuando aplique) se entregan por correo con instrucciones de activación.<br /><strong>Garantías y devoluciones</strong>  </li>
          <li>La garantía puede ser del fabricante o de Vanguardia Tecnología (según corresponda y según el estado del producto).  </li>
          <li>Los criterios de devoluciones, DOA, cambios, reacondicionados y servicios ya ejecutados se rigen por la <strong>Política de Reembolsos</strong> vigente en el sitio.<br /><strong>Servicios adicionales para productos</strong><br />Podemos agregar puesta a punto<strong>, </strong>migración de datos <strong>, </strong>clonado de discos <strong>, </strong>formateo/instalación limpia <strong>, </strong>armado y hardening, con costo adicional. Consulta paquetes en  <strong>/servicios</strong> o añade al carrito en  <strong>/tienda</strong> cuando esté disponible.<br /><strong>III.- Proceso de contratación y pago</strong><br /><strong>Contratación de servicios o compra de productos</strong><br /><strong>El Cliente podrá contratar o adquirir cualquiera de los servicios o productos de </strong> <strong>Vanguardia Tecnología</strong> <strong> a través del Sitio.</strong><br />Una vez realizada la selección, el Cliente deberá proporcionar la información solicitada para el registro, facturación y envío, así como confirmar la aceptación de estos Términos y Condiciones.<br /><strong>Métodos de pago</strong><br />Vanguardia Tecnología acepta pagos mediante <strong>tarjeta de crédito y débito</strong>, procesados a través de  <strong>pasarelas de pago seguras y certificadas</strong>. En ningún caso Vanguardia Tecnología almacena, conserva o tiene acceso a la información bancaria o de tarjetas del Cliente.<br />También pueden existir métodos alternativos de pago (transferencia, depósito o enlace directo) previa confirmación escrita por parte del área comercial.<br /><strong>Confirmación de pago y entrega</strong><br />El servicio o producto se considerará contratado una vez que el pago haya sido validado por la pasarela o por la institución bancaria correspondiente.<br />Vanguardia Tecnología enviará un correo electrónico de confirmación con los detalles de la compra o del servicio programado, indicando plazos y condiciones de entrega.<br /><strong>IV.- Envíos, Entrega y Activación</strong><br /><strong>Entrega de productos físicos</strong>  </li>
          <li>Las entregas se realizan a la dirección proporcionada por el Cliente al momento de la compra.  </li>
          <li>Los <strong>tiempos de entrega</strong> pueden variar según la ubicación, disponibilidad del producto y el servicio de mensajería.  </li>
          <li>Vanguardia Tecnología no se hace responsable por retrasos atribuibles a terceros o causas de fuerza mayor (clima, siniestros, etc.).  </li>
          <li>Al recibir el producto, el Cliente deberá <strong>verificar integridad del empaque y contenido</strong>. Cualquier anomalía debe reportarse en un plazo máximo de  <strong>24 horas</strong>.<br /><strong>Entrega o activación de servicios digitales</strong><br />En el caso de licencias, instalaciones o servicios remotos:  </li>
          <li>El Cliente recibirá un correo o instrucción para activar su servicio, agenda de soporte o enlace de acceso remoto.  </li>
          <li>En licencias electrónicas, el envío del código digital y las instrucciones de instalación se considerará como entrega completa del producto.  </li>
          <li>Vanguardia Tecnología no se responsabiliza por fallas en la instalación debidas a equipos incompatibles o entornos no soportados por el software.<br /><strong>V.- Responsabilidades</strong><br /><strong>De </strong> <strong>Vanguardia Tecnología</strong> <strong>:</strong>  </li>
          <li>Proporcionar los servicios y productos contratados conforme a las especificaciones publicadas o acordadas.  </li>
          <li>Mantener los protocolos de seguridad necesarios para proteger la información y los dispositivos del Cliente.  </li>
          <li>Ofrecer soporte técnico dentro de los alcances del servicio contratado.  </li>
          <li>Cumplir con los tiempos razonables de entrega y respuesta establecidos.<br /><strong>Del Cliente:</strong>  </li>
          <li>Proporcionar información veraz, completa y actualizada para la contratación y entrega.  </li>
          <li>Permitir el acceso remoto o físico cuando el servicio lo requiera.  </li>
          <li>Mantener copias de seguridad de su información antes de cualquier intervención técnica.  </li>
          <li>Utilizar los productos conforme a las instrucciones del fabricante.  </li>
          <li>Abstenerse de cualquier conducta que afecte la operación o reputación de Vanguardia Tecnología.<br /><strong>VI.- Garantías y Soporte Técnico</strong><br /><strong>Productos nuevos</strong><br />Los productos nuevos comercializados por Vanguardia Tecnología cuentan con <strong>garantía del fabricante</strong>, cuya duración y condiciones se detallan en la ficha de cada artículo.<br />El Cliente deberá gestionar la garantía directamente con el fabricante, salvo indicación contraria.<br /><strong>Productos reacondicionados o seminuevos</strong><br />Cuentan con <strong>garantía limitada de </strong> <strong>Vanguardia Tecnología</strong>, aplicable solo a defectos de funcionamiento no imputables al uso inadecuado del Cliente.<br /><strong>Soporte técnico</strong><br />El alcance del soporte dependerá del plan o servicio contratado e incluirá únicamente incidencias relacionadas con la prestación original del servicio.<br />No se incluye desarrollo, reconfiguración avanzada o reinstalaciones posteriores, salvo contratación adicional.<br /><strong>VII.- Cancelaciones y Reembolsos</strong><br /><strong>Servicios</strong>  </li>
          <li>El Cliente podrá cancelar el servicio antes del inicio de la ejecución.  </li>
          <li>Una vez iniciado, <strong>no procede reembolso</strong>, salvo causas atribuibles a Vanguardia Tecnología (falla no corregible, incumplimiento técnico, imposibilidad operativa).  </li>
          <li>Si procede reembolso, se realizará mediante el <strong>mismo método de pago</strong>, dentro de un plazo de hasta  <strong>15 días hábiles</strong>, sujeto a tiempos bancarios.<br /><strong>Productos</strong>  </li>
          <li>Solo aplican devoluciones por <strong>defecto de fábrica</strong> o  <strong>producto incorrecto</strong>, siempre que se reporte dentro de  <strong>cinco (5) días naturales</strong> tras la entrega.  </li>
          <li>El producto deberá devolverse <strong>en su empaque original</strong>, sin daños, con todos los accesorios y etiquetas.  </li>
          <li>No se aceptan devoluciones por incompatibilidad, errores de compra o cambios de opinión.<br /><strong>Licencias electrónicas y software</strong><br />Las licencias, activaciones digitales o software descargado <strong>no son reembolsables</strong> una vez emitidos o activados.<br /><strong>VIII.- Limitación de Responsabilidad</strong><br />Vanguardia Tecnología no será responsable por:  </li>
          <li>Pérdida de datos, archivos o configuraciones derivadas de intervenciones técnicas o de fallas ajenas a su control.  </li>
          <li>Incompatibilidades de hardware o software preexistentes.  </li>
          <li>Daños indirectos, consecuenciales o lucro cesante.  </li>
          <li>Problemas generados por mal uso, negligencia o manipulación posterior a la entrega.<br />La responsabilidad total de Vanguardia Tecnología frente al Cliente <strong>no excederá en ningún caso el monto efectivamente pagado</strong> por el producto o servicio afectado.<br /><strong>IX.- Confidencialidad y Protección de Datos</strong><br />Vanguardia Tecnología protege los datos personales del Cliente conforme a su <strong>Aviso de Privacidad</strong>, disponible en el Sitio.<br />Durante la prestación de servicios técnicos o de soporte remoto, solo se accederá a la información estrictamente necesaria para ejecutar el trabajo solicitado.<br />Cualquier dato tratado se maneja bajo confidencialidad y medidas técnicas adecuadas de protección.<br /><strong>X.- Propiedad Intelectual</strong><br />Todo el contenido disponible en el Sitio de Vanguardia Tecnología (imágenes, logotipos, textos, marcas, fichas, software, catálogos y materiales técnicos) es propiedad de <strong>VENTAS DIAGON, S.A. DE C.V.</strong> o de sus licenciatarios.<br />Queda prohibida su reproducción total o parcial sin autorización expresa.<br />Los desarrollos o configuraciones realizados por Vanguardia Tecnología en proyectos personalizados se consideran propiedad del Cliente <strong>una vez liquidado el pago total</strong>.<br /><strong>XI.- Modificaciones a los Términos</strong><br />Vanguardia Tecnología podrá modificar estos Términos y Condiciones para adaptarlos a cambios legales, operativos o comerciales.<br />La versión vigente estará siempre publicada en el Sitio con su <strong>fecha de última actualización</strong>.<br />El uso continuo de los servicios o Sitio implica la <strong>aceptación automática</strong> de las modificaciones.<br /><strong>XII.- Legislación y Jurisdicción</strong><br />Estos Términos se rigen por las <strong>leyes de los Estados Unidos Mexicanos</strong>, y cualquier controversia será resuelta ante los  <strong>tribunales competentes de la Ciudad de México</strong>, renunciando las partes a cualquier otro fuero.<br /><strong>XIII.- CONTACTO</strong><br /><strong>VENTAS DIAGON, S.A. DE CV</strong><br />Avenida Chapultepec N° 480, Piso 9, Depto. 901<br />Colonia Roma Norte, Alcaldía Cuauhtémoc<br />C.P. 06700, Ciudad de México<br />Correo: info@vanguardiatecnologia.com<br /><strong>Fecha de vigencia:</strong> Estos términos son efectivos desde su publicación y se actualizan periódicamente. Revíselos regularmente.<br /><strong><em>Al confirmar una compra o contratar un servicio, usted reconoce haber leído, comprendido y aceptado estos Términos y Condiciones en su totalidad.</em></strong>  </li>
        </ul>

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

        <h1>Terms and Conditions</h1>

        <p><br /><strong>I.- Acceptance of the Terms</strong><br /><strong>By accessing the website </strong> <strong>Vanguardia Tecnología</strong> <strong>.com or by contracting any of the services offered by VENTAS DIAGON, S.A. DE C.V. (hereinafter, “</strong> <strong>Vanguardia Tecnología</strong> <strong>”), with address at Avenida Chapultepec No. 480, Floor 9, Apartme</strong> <strong>nt 901, Colonia Roma Norte, Cuauhtémoc Borough, ZIP Code 06700, Mexico City, the user (hereinafter, “the Client”) declares having read, understood, and accepted these Terms and Conditions of Service (hereinafter, “the Terms”) of the website https://</strong> <strong>Vanguardia Tecnología</strong> <strong>.com (hereinafter, the “Site”).</strong><br />The use of the Site or the contracting of any service implies the express acceptance of these Terms, as well as the <strong>Privacy Notice</strong> available on the same portal.<br />If you do not agree with any provision, you must refrain from using our services.<br /><strong>II.- Description of Services and Products</strong><br /><strong>Vanguardia Tecnología</strong> offers two main lines: (i) <strong>technical and software services</strong> and (ii) <strong>sale of computer equipment and peripherals</strong>. The essentials are outlined here; the <strong>specific details, technical sheets, prices, stock, and promotions</strong> are always available on the Site: <strong>Vanguardia Tecnología</strong> <strong>.com</strong> (sections <strong>/services</strong> and <strong>/store</strong>).<br /><strong>Services (general scope)</strong> </p>

        <ul>

          <li><strong>🛰️</strong> <strong> Orbit Support – Remote Assistance.</strong> Diagnosis and resolution of minor issues, punctual installation, configuration adjustments, and basic security verification, through remote access <strong>with prior authorization</strong> and under encrypted protocol. Requires a stable internet connection and client permissions. </li>

          <li><strong>🚀</strong> <strong> Software Module – Installation and Configuration.</strong> Implementation of software (e.g., corporate antivirus, creative suites, basic ERP), validating <strong>manufacturer requirements</strong>, compatibility, and performance testing. </li>

          <li><strong>🛠️</strong> <strong> Space Shield – Preventive Maintenance.</strong> Software cleanup, driver updates, startup optimization, system health review, and best practices to extend equipment lifespan. </li>

          <li><strong>🌌</strong> <strong> Stellar Rescue – Data Recovery.</strong> Professional attempt to recover data from HDD/SSD/USB/SD. <strong>Results not guaranteed</strong>; performed on a “best effort” basis under confidentiality protocols. </li>

          <li><strong>🛰️</strong> <strong> Command Center – Monthly Support and Management Systems.</strong> Monthly contracts with unlimited remote assistance, scheduled visits, monitoring, and deployment of administrative systems (service orders, sales, reports, invoicing). </li>

          <li><strong>🌐</strong> <strong> Digital Galaxy – Custom Development.</strong> Plugins, integrations, and web/app systems with deliverables, timeline, and scope defined by proposal; includes testing and basic hardening.<br /><strong>Note:</strong> each service has its own scope, exclusions, and deliverables (SOW). Variants, timelines, labor warranties, and prerequisites are shown on our <strong>Site.</strong><br /><strong>Products (sales and catalog)</strong><br />On our <strong>Site</strong> you will find new, open-box, or refurbished equipment (as indicated), from brands such as Apple, HP, Dell, Lenovo, ASUS <strong>,</strong> among others. Each product includes a technical sheet with specifications (e.g., processor <strong>, </strong>RAM <strong>, </strong>SSD storage <strong>, </strong>graphics <strong>, </strong>screen size and resolution <strong>, </strong>connectivity <strong>, </strong>keyboard language <strong>, </strong>OS, weight, and dimensions), condition (new/refurbished), warranty <strong>, </strong>availability, and price <strong>.</strong><br /><strong>Technical sheets, compatibility, and images</strong> </li>

          <li>Specifications come from the manufacturer and/or the commercial batch and may vary by revision (e.g., soldered vs. expandable RAM, number of ports, IPS/TN panel, ES/US keyboard). </li>

          <li>Images are illustrative; final content may differ by region or batch. </li>

          <li>Compatibility with your software, accessories, or workflows is the client’s responsibility.<br /><strong>Prices, stock, and promotions</strong> </li>

          <li>Prices in <strong>MXN</strong> (VAT included unless otherwise indicated). </li>

          <li>Stock and offers subject to real-time availability; may change without prior notice<strong>.</strong><br /><strong>Deliveries, shipping, and licenses</strong> </li>

          <li>Shipping and/or pickup options depending on area and product. </li>

          <li>Estimated delivery times are indicated at checkout. </li>

          <li>Electronic licenses (when applicable) are delivered by email with activation instructions.<br /><strong>Warranties and returns</strong> </li>

          <li>Warranty may be provided by the manufacturer or by Vanguardia Tecnología (as applicable and depending on product condition). </li>

          <li>Return criteria, DOA, exchanges, refurbished items, and completed services are governed by the current <strong>Refund Policy</strong> on the Site.<br /><strong>Additional services for products</strong><br />We may add setup<strong>, </strong>data migration <strong>, </strong>disk cloning <strong>, </strong>formatting/clean installation <strong>, </strong>assembly and hardening, at additional cost. Check packages in <strong>/services</strong> or add to cart in <strong>/store</strong> when available.<br /><strong>III.- Contracting and Payment Process</strong><br /><strong>Service contracting or product purchase</strong><br /><strong>The Client may contract or acquire any of the services or products of </strong> <strong>Vanguardia Tecnología</strong> <strong> through the Site.</strong><br />Once the selection is made, the Client must provide the requested information for registration, billing, and shipping, as well as confirm acceptance of these Terms and Conditions.<br /><strong>Payment methods</strong><br />Vanguardia Tecnología accepts payments via <strong>credit and debit cards</strong>, processed through <strong>secure and certified payment gateways</strong>. Under no circumstances does Vanguardia Tecnología store, retain, or have access to the Client’s banking or card information.<br />Alternative payment methods (transfer, deposit, or direct link) may also be available upon written confirmation from the commercial area.<br /><strong>Payment confirmation and delivery</strong><br />The service or product will be considered contracted once payment has been validated by the gateway or corresponding banking institution.<br />Vanguardia Tecnología will send a confirmation email with purchase or scheduled service details, indicating delivery times and conditions.<br /><strong>IV.- Shipping, Delivery, and Activation</strong><br /><strong>Delivery of physical products</strong> </li>

          <li>Deliveries are made to the address provided by the Client at the time of purchase. </li>

          <li><strong>Delivery times</strong> may vary depending on location, product availability, and courier service. </li>

          <li>Vanguardia Tecnología is not responsible for delays attributable to third parties or force majeure (weather, accidents, etc.). </li>

          <li>Upon receiving the product, the Client must <strong>verify the integrity of packaging and contents</strong>. Any anomaly must be reported within a maximum period of <strong>24 hours</strong>.<br /><strong>Delivery or activation of digital services</strong><br />In the case of licenses, installations, or remote services: </li>

          <li>The Client will receive an email or instructions to activate the service, support schedule, or remote access link. </li>

          <li>For electronic licenses, sending the digital code and installation instructions will be considered full delivery of the product. </li>

          <li>Vanguardia Tecnología is not responsible for installation failures due to incompatible equipment or unsupported environments.<br /><strong>V.- Responsibilities</strong><br /><strong>Of </strong> <strong>Vanguardia Tecnología</strong> <strong>:</strong> </li>

          <li>Provide contracted services and products in accordance with published or agreed specifications. </li>

          <li>Maintain necessary security protocols to protect the Client’s information and devices. </li>

          <li>Offer technical support within the scope of the contracted service. </li>

          <li>Comply with reasonable delivery and response times.<br /><strong>Of the Client:</strong> </li>

          <li>Provide truthful, complete, and updated information for contracting and delivery. </li>

          <li>Allow remote or physical access when required. </li>

          <li>Maintain backups of their information prior to any technical intervention. </li>

          <li>Use products according to manufacturer instructions. </li>

          <li>Refrain from any conduct that affects the operation or reputation of Vanguardia Tecnología.<br /><strong>VI.- Warranties and Technical Support</strong><br /><strong>New products</strong><br />New products marketed by Vanguardia Tecnología include a <strong>manufacturer’s warranty</strong>, whose duration and conditions are detailed in each item’s technical sheet.<br />The Client must process the warranty directly with the manufacturer unless otherwise indicated.<br /><strong>Refurbished or pre-owned products</strong><br />They include a <strong>limited warranty from </strong> <strong>Vanguardia Tecnología</strong>, applicable only to functional defects not attributable to improper use by the Client.<br /><strong>Technical support</strong><br />Support scope depends on the contracted plan or service and includes only issues related to the original service provided.<br />Development, advanced reconfiguration, or subsequent reinstallations are not included unless additionally contracted.<br /><strong>VII.- Cancellations and Refunds</strong><br /><strong>Services</strong> </li>

          <li>The Client may cancel the service before execution begins. </li>

          <li>Once started, <strong>no refund applies</strong>, except for causes attributable to Vanguardia Tecnología (uncorrectable failure, technical non-compliance, operational impossibility). </li>

          <li>If a refund applies, it will be issued using the <strong>same payment method</strong>, within up to <strong>15 business days</strong>, subject to banking times.<br /><strong>Products</strong> </li>

          <li>Returns apply only for <strong>manufacturing defects</strong> or <strong>incorrect product</strong>, provided they are reported within <strong>five (5) calendar days</strong> after delivery. </li>

          <li>The product must be returned <strong>in its original packaging</strong>, undamaged, with all accessories and labels. </li>

          <li>Returns are not accepted for incompatibility, purchase errors, or change of mind.<br /><strong>Electronic licenses and software</strong><br />Licenses, digital activations, or downloaded software are <strong>non-refundable</strong> once issued or activated.<br /><strong>VIII.- Limitation of Liability</strong><br />Vanguardia Tecnología shall not be responsible for: </li>

          <li>Loss of data, files, or configurations resulting from technical interventions or failures beyond its control. </li>

          <li>Pre-existing hardware or software incompatibilities. </li>

          <li>Indirect, consequential damages or loss of profits. </li>

          <li>Issues caused by misuse, negligence, or handling after delivery.<br />Total liability of Vanguardia Tecnología toward the Client <strong>shall not exceed the amount actually paid</strong> for the affected product or service.<br /><strong>IX.- Confidentiality and Data Protection</strong><br />Vanguardia Tecnología protects the Client’s personal data in accordance with its <strong>Privacy Notice</strong>, available on the Site.<br />During technical or remote support services, only the information strictly necessary to perform the requested work will be accessed.<br />Any processed data is handled under confidentiality and appropriate technical protection measures.<br /><strong>X.- Intellectual Property</strong><br />All content available on the Vanguardia Tecnología Site (images, logos, texts, trademarks, sheets, software, catalogs, and technical materials) is the property of <strong>VENTAS DIAGON, S.A. DE C.V.</strong> or its licensors.<br />Total or partial reproduction without express authorization is prohibited.<br />Developments or configurations carried out by Vanguardia Tecnología in custom projects are considered the Client’s property <strong>once full payment has been made</strong>.<br /><strong>XI.- Modifications to the Terms</strong><br />Vanguardia Tecnología may modify these Terms and Conditions to adapt them to legal, operational, or commercial changes.<br />The current version will always be published on the Site with its <strong>last update date</strong>.<br />Continued use of the services or Site implies <strong>automatic acceptance</strong> of modifications.<br /><strong>XII.- Governing Law and Jurisdiction</strong><br />These Terms are governed by the <strong>laws of the United Mexican States</strong>, and any dispute shall be resolved before the <strong>competent courts of Mexico City</strong>, with the parties waiving any other jurisdiction.<br /><strong>XIII.- CONTACT</strong><br /><strong>VENTAS DIAGON, S.A. DE C.V.</strong><br />Avenida Chapultepec No. 480, Floor 9, Apt. 901<br />Colonia Roma Norte, Cuauhtémoc Borough<br />ZIP Code 06700, Mexico City<br />Email: info@vanguardiatecnologia.com<br /><strong>Effective date:</strong> These terms are effective from their publication and are periodically updated. Please review them regularly.<br /><strong><em>By confirming a purchase or contracting a service, you acknowledge that you have read, understood, and accepted these Terms and Conditions in full.</em></strong> </li>

        </ul>
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