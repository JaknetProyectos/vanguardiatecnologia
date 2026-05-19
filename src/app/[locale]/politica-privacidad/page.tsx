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
        <h1>POLÍTICA DE PRIVACIDAD</h1>

        <p>¡Hola! En <strong>Vanguardia Tecnología</strong>, sabemos que tu tiempo (y tus datos) valen oro.<br /> Por eso te lo decimos directo y sin vueltas: <strong>respetamos tu privacidad</strong>.<br /> Este aviso te explica <strong>qué información recopilamos, para qué la usamos y cómo la protegemos</strong>, de forma clara y transparente, conforme a la  <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> y su Reglamento.<br /><strong>I.- ¿Quién es responsable de tus datos?</strong><br />El responsable del tratamiento de tu información es <strong>VENTAS DIAGON, S.A. DE C.V.</strong>,<br /> que opera bajo el nombre comercial <strong>Vanguardia Tecnología</strong>, con domicilio en:<br />Avenida Chapultepec N.º 480, Piso 9, Depto. 901, Colonia Roma Norte,<br /> Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México.<br />Para cualquier tema relacionado con tu privacidad, escríbenos a: info@vanguardiatecnologia.com<br /><strong>II.- ¿Qué información recopilamos?</strong><br />Depende de cómo interactúes con nosotros (si compras, solicitas soporte o solo navegas por el sitio).<br />Podemos recopilar:  </p>
        <ul>
          <li><strong>Datos de identificación y contacto:</strong> Nombre, correo electrónico, teléfono, domicilio y RFC (si requieres factura).  </li>
          <li><strong>Datos técnicos y de navegación:</strong> Dirección IP, tipo de dispositivo, navegador, páginas visitadas, tiempo de sesión y cookies (más abajo te contamos de ellas).  </li>
          <li><strong>Datos derivados de servicios técnicos:</strong> Cuando brindamos soporte remoto o mantenimiento, podríamos acceder a configuraciones de sistema o archivos técnicos  <strong>solo con tu consentimiento expreso</strong> y bajo protocolos cifrados.<br />Jamás accedemos a información personal ajena al servicio.<br /><strong>III.- ¿Para qué usamos tu información?</strong><br />Solo para lo necesario y con tu autorización.<br /><strong>Finalidades principales:</strong>  </li>
          <li>Procesar y entregar tus pedidos o servicios contratados.  </li>
          <li>Dar soporte técnico (remoto o presencial) y mantenimiento.  </li>
          <li>Emitir facturas y comprobantes fiscales.  </li>
          <li>Comunicarnos contigo sobre tu orden o servicio.  </li>
          <li>Atender garantías, aclaraciones o actualizaciones técnicas.  </li>
          <li>Cumplir con nuestras obligaciones fiscales y legales.<br /><strong>Finalidades secundarias (opcionales):</strong>  </li>
          <li>Enviarte novedades, promociones o actualizaciones de productos.  </li>
          <li>Realizar encuestas de satisfacción o evaluaciones de servicio.  </li>
          <li>Mejorar la experiencia de usuario en nuestra web.<br />Si no quieres que usemos tus datos para estas últimas, solo mándanos un correo con el asunto<br /><strong>“No deseo recibir información adicional”</strong> a  <strong>[CORREO PENDIENTE]</strong>.<br /><strong>IV.- ¿Compartimos tu información con alguien?</strong><br />Solo cuando es necesario para darte el servicio que pediste.<br />Podemos compartir ciertos datos con:  </li>
          <li><strong>Proveedores de tecnología o nube</strong> que cumplen estándares internacionales de protección.  </li>
          <li><strong>Autoridades competentes</strong>, cuando la ley lo exige.<br />Todos nuestros aliados están <strong>obligados por contrato a proteger tu información</strong> y a usarla  <strong>únicamente</strong> para el fin que se les autoriza.<br /><strong>V.- Cookies y tecnologías similares</strong><br />Usamos cookies (las digitales) para:  </li>
          <li>Mantener tu sesión activa y guardar tu carrito.  </li>
          <li>Analizar cómo navegas para mejorar tu experiencia.  </li>
          <li>Recordar idioma y preferencias de visualización.<br />Puedes desactivar las cookies desde tu navegador, aunque algunas funciones del sitio podrían dejar de estar disponibles.<br /><strong>VI.- Derechos (ARCO+)</strong><br />Tienes derecho a:  </li>
          <li><strong>Acceder</strong> a sus datos personales en nuestro poder  </li>
          <li><strong>Rectificar</strong> datos inexactos o incompletos  </li>
          <li><strong>Cancelar</strong> su registro cuando considere que no son necesarios  </li>
          <li><strong>Oponerse</strong> al tratamiento para finalidades específicas  </li>
          <li><strong>Revocar su consentimiento</strong> en cualquier momento  </li>
          <li><strong>Limitar</strong> el uso y divulgación de sus datos<br />Para ejercer estos derechos, envíe su solicitud a <a href="mailto:contacto@compucorel.com" title="mailto:contacto@compucorel.com">info@vanguardiatecnologia.com</a> con:  </li>
          <li>Asunto: «Derechos ARCO»  </li>
          <li>Nombre completo  </li>
          <li>Descripción clara del derecho que desea ejercer  </li>
          <li>Documentos que acrediten su identidad<br />Responderemos su solicitud en un plazo máximo de 20 días hábiles conforme a la normativa aplicable.<br /><strong>VII.- Seguridad y protección</strong><br />En Vanguardia Tecnología aplicamos <strong>protocolos técnicos, administrativos y físicos</strong> para cuidar tus datos, incluyendo:  </li>
          <li>Cifrado SSL en toda la navegación.  </li>
          <li>Control de acceso a servidores y bases de datos.  </li>
          <li>Personal capacitado y acuerdos de confidencialidad.  </li>
          <li>Eliminación segura de archivos una vez concluido el servicio.<br />Nos tomamos en serio la seguridad: tu información no es moneda de cambio.<br /><strong>VIII.- Cambios a este Aviso</strong><br />Nos reservamos el derecho de actualizar esta política para reflejar cambios en nuestras prácticas o en la legislación aplicable. Las modificaciones se publicarán en esta página con la fecha de actualización correspondiente.<br />Le recomendamos revisar periódicamente este aviso. Los cambios sustanciales serán notificados mediante correo electrónico a los usuarios registrados.<br /><strong>IX.- Marco legal</strong><br />Este aviso se rige por las leyes mexicanas, especialmente:  </li>
          <li><strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>  </li>
          <li>Su Reglamento  </li>
          <li><strong>Lineamientos del INAI</strong> y demás normatividad aplicable.<br /><strong>X.- Contacto</strong><br />Para cualquier duda, aclaración o ejercicio de derechos relacionados con el tratamiento de sus datos personales:<br /><strong>VENTAS DIAGON, S.A. DE C.V.</strong><br />Domicilio: Avenida Chapultepec N° 480, Piso 9, Depto. 901 Colonia Roma Norte, Alcaldía Cuauhtémoc C.P. 06700, Ciudad de México.<br />Correo electrónico: info@vanguardiatecnologia.com  </li>
        </ul>
        <p><strong>Al utilizar nuestro sitio web y contratar nuestros servicios, usted acepta los términos establecidos en esta Política de Privacidad.</strong>  </p>


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
        <h1>Privacy Policy</h1>

        <p>Hi! At <strong>Vanguardia Tecnología</strong>, we know that your time (and your data) are worth gold.<br /> That is why we tell you straight and without detours: <strong>we respect your privacy</strong>.<br /> This notice explains <strong>what information we collect, what we use it for, and how we protect it</strong>, in a clear and transparent way, in accordance with the <strong>Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP)</strong> and its Regulations.<br /><strong>I.- Who is responsible for your data?</strong><br />The party responsible for processing your information is <strong>VENTAS DIAGON, S.A. DE C.V.</strong>,<br /> operating under the trade name <strong>Vanguardia Tecnología</strong>, located at:<br />Avenida Chapultepec N.º 480, Piso 9, Depto. 901, Colonia Roma Norte,<br /> Alcaldía Cuauhtémoc, C.P. 06700, Mexico City.<br />For any matter related to your privacy, write to us at: info@vanguardiatecnologia.com<br /><strong>II.- What information do we collect?</strong><br />It depends on how you interact with us (whether you buy, request support, or just browse the site).<br />We may collect:  </p>
        <ul>
          <li><strong>Identification and contact data:</strong> Name, email address, telephone number, address, and RFC (if you require an invoice).  </li>
          <li><strong>Technical and browsing data:</strong> IP address, device type, browser, pages visited, session time, and cookies (we tell you more about them below).  </li>
          <li><strong>Data derived from technical services:</strong> When we provide remote support or maintenance, we may access system configurations or technical files <strong>only with your express consent</strong> and under encrypted protocols.<br />We never access personal information unrelated to the service.<br /><strong>III.- What do we use your information for?</strong><br />Only for what is necessary and with your authorization.<br /><strong>Primary purposes:</strong>  </li>
          <li>Process and deliver your orders or contracted services.  </li>
          <li>Provide technical support (remote or in-person) and maintenance.  </li>
          <li>Issue invoices and tax receipts.  </li>
          <li>Communicate with you regarding your order or service.  </li>
          <li>Handle warranties, clarifications, or technical updates.  </li>
          <li>Comply with our tax and legal obligations.<br /><strong>Secondary purposes (optional):</strong>  </li>
          <li>Send you news, promotions, or product updates.  </li>
          <li>Conduct satisfaction surveys or service evaluations.  </li>
          <li>Improve the user experience on our website.<br />If you do not want us to use your data for these latter purposes, simply send us an email with the subject line<br /><strong>“I do not wish to receive additional information”</strong> to <strong>[PENDING EMAIL]</strong>.<br /><strong>IV.- Do we share your information with anyone?</strong><br />Only when necessary to provide the service you requested.<br />We may share certain data with:  </li>
          <li><strong>Technology or cloud providers</strong> that comply with international protection standards.  </li>
          <li><strong>Competent authorities</strong>, when required by law.<br />All our allies are <strong>obligated by contract to protect your information</strong> and to use it <strong>solely</strong> for the purpose for which they are authorized.<br /><strong>V.- Cookies and similar technologies</strong><br />We use cookies (the digital ones) to:  </li>
          <li>Keep your session active and save your cart.  </li>
          <li>Analyze how you browse to improve your experience.  </li>
          <li>Remember language and viewing preferences.<br />You can disable cookies from your browser, although some site functions may become unavailable.<br /><strong>VI.- Rights (ARCO+)</strong><br />You have the right to:  </li>
          <li><strong>Access</strong> your personal data in our possession  </li>
          <li><strong>Rectify</strong> inaccurate or incomplete data  </li>
          <li><strong>Cancel</strong> your registration when you consider it is no longer necessary  </li>
          <li><strong>Object</strong> to the processing for specific purposes  </li>
          <li><strong>Revoke your consent</strong> at any time  </li>
          <li><strong>Limit</strong> the use and disclosure of your data<br />To exercise these rights, send your request to <a href="mailto:info@vanguardiatecnologia.com" title="mailto:info@vanguardiatecnologia.com">info@vanguardiatecnologia.com</a> with:  </li>
          <li>Subject: «ARCO Rights»  </li>
          <li>Full name  </li>
          <li>Clear description of the right you wish to exercise  </li>
          <li>Documents proving your identity<br />We will respond to your request within a maximum period of 20 business days in accordance with applicable regulations.<br /><strong>VII.- Security and protection</strong><br />At Vanguardia Tecnología, we apply <strong>technical, administrative, and physical protocols</strong> to care for your data, including:  </li>
          <li>SSL encryption throughout all browsing.  </li>
          <li>Access control to servers and databases.  </li>
          <li>Trained personnel and confidentiality agreements.  </li>
          <li>Secure deletion of files once the service is concluded.<br />We take security seriously: your information is not a bargaining chip.<br /><strong>VIII.- Changes to this Notice</strong><br />We reserve the right to update this policy to reflect changes in our practices or in applicable legislation. Modifications will be published on this page with the corresponding update date.<br />We recommend that you periodically review this notice. Substantial changes will be notified via email to registered users.<br /><strong>IX.- Legal Framework</strong><br />This notice is governed by Mexican laws, especially:  </li>
          <li><strong>Federal Law on Protection of Personal Data Held by Private Parties</strong>  </li>
          <li>Its Regulations  </li>
          <li><strong>INAI Guidelines</strong> and other applicable regulations.<br /><strong>X.- Contact</strong><br />For any questions, clarifications, or exercise of rights related to the processing of your personal data:<br /><strong>VENTAS DIAGON, S.A. DE C.V.</strong><br />Address: Avenida Chapultepec N° 480, Piso 9, Depto. 901 Colonia Roma Norte, Alcaldía Cuauhtémoc C.P. 06700, Mexico City.<br />Email: info@vanguardiatecnologia.com  </li>
        </ul>
        <p><strong>By using our website and contracting our services, you accept the terms established in this Privacy Policy.</strong>  </p>
        
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