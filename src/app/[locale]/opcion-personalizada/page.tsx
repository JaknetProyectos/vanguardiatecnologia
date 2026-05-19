"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Send, CheckCircle, Loader2, ArrowRight, Settings } from "lucide-react";
import { useContact } from "@/hooks/useContactForm";

export default function OpcionPersonalizada() {
  const [submitted, setSubmitted] = useState(false);
  const { sendContactForm, isLoading } = useContact();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      servicioDeseado: formData.get("servicio") as string,
      presupuesto: formData.get("presupuesto") as string,
      mensaje: formData.get("mensaje") as string,
    };

    const result = await sendContactForm(data);
    if (result.success) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />

      {/* Hero Section - Estilo Siglo XXI */}
      <section className="pt-40 pb-20 border-b-2 border-slate-100 bg-red-500 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8">
              Opción personalizada
            </h1>
          </div>
        </div>
        {/* Acento geométrico de fondo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600 -skew-x-12 translate-x-1/4 z-0 hidden lg:block" />
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {submitted ? (
            <div className="max-w-3xl mx-auto bg-white border-2 border-slate-900 rounded-xl p-16 text-center shadow-[16px_16px_0px_#f1f5f9]">
              <div className="h-20 w-20 bg-[#d00000] rounded-xl flex items-center justify-center mx-auto mb-8 text-white">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">
                ¡Solicitud recibida!
              </h2>
              <p className="text-slate-500 text-lg mb-10 font-medium">
                Tu requerimiento ha sido ingresado al sistema. Un especialista técnico te contactará en un lapso de 24 a 48 horas.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-slate-900 text-white px-10 py-5 rounded-xl font-black uppercase text-sm hover:bg-[#d00000] transition-colors"
              >
                Generar nueva orden
              </button>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-16">
                
                {/* Columna Izquierda: Texto y Guía */}
                <div className="lg:col-span-4 space-y-8">
                  <div className="sticky top-32">
                    <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6 uppercase">
                      Selecciona los servicios que deseas
                    </h2>
                    <p className="text-slate-500 text-lg mb-8">
                      Creamos una cotización personalizada para ti. Selecciona los servicios que deseas y prepararemos una cotización.
                    </p>
                  </div>
                </div>

                {/* Columna Derecha: El Formulario */}
                <div className="lg:col-span-8 bg-slate-50 border-2 border-slate-100 rounded-xl p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                    
                    {/* Nombre - Full Width */}
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Nombre completo *</label>
                      <input
                        name="nombre"
                        required
                        placeholder="Ej. Juan Pérez"
                        className="w-full h-14 px-5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#d00000] outline-none transition-all font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email corporativo *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="usuario@empresa.com"
                        className="w-full h-14 px-5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#d00000] outline-none transition-all font-medium"
                      />
                    </div>

                    {/* Teléfono */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Teléfono *</label>
                      <input
                        name="telefono"
                        type="tel"
                        required
                        placeholder="+52"
                        className="w-full h-14 px-5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#d00000] outline-none transition-all font-medium"
                      />
                    </div>

                    {/* Servicio */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Tipo de servicio *</label>
                      <select
                        name="servicio"
                        required
                        className="w-full h-14 px-5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#d00000] outline-none transition-all font-bold text-sm appearance-none cursor-pointer"
                      >
                        <option value="">Selecciona una categoría</option>
                        <option value="soporte">Soporte técnico</option>
                        <option value="mantenimiento">Mantenimiento de equipos</option>
                        <option value="software">Instalación de software</option>
                        <option value="desarrollo">Desarrollo a la medida</option>
                        <option value="recuperacion">Recuperación de datos</option>
                        <option value="gestion">Sistemas de gestión</option>
                      </select>
                    </div>

                    {/* Presupuesto */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Presupuesto estimado</label>
                      <select
                        name="presupuesto"
                        className="w-full h-14 px-5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#d00000] outline-none transition-all font-bold text-sm appearance-none cursor-pointer"
                      >
                        <option value="No definido">No definido</option>
                        <option value="0-5000">$0 - $5,000 MXN</option>
                        <option value="5000-15000">$5,000 - $15,000 MXN</option>
                        <option value="15000-30000">$15,000 - $30,000 MXN</option>
                        <option value="50000+">Más de $50,000 MXN</option>
                      </select>
                    </div>

                    {/* Mensaje - Full Width */}
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Detalles técnicos *</label>
                      <textarea
                        name="mensaje"
                        required
                        rows={5}
                        placeholder="Describe los requerimientos específicos de tu proyecto..."
                        className="w-full p-5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#d00000] outline-none transition-all font-medium resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 pt-4">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-20 bg-[#d00000] text-white rounded-xl font-black uppercase text-lg flex items-center justify-center gap-4 hover:bg-slate-900 transition-all active:scale-[0.98] disabled:opacity-50 shadow-xl shadow-red-900/10"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-6 w-6 animate-spin" />
                            Procesando...
                          </>
                        ) : (
                          <>
                            ¡Enviar ahora!
                            <ArrowRight className="h-6 w-6" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}