"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SobreNosotros() {
  const t = useTranslations("About");

  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white border-b-2 border-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Badge: Ahora es inline-block para que no ocupe todo el ancho */}
          <div className="inline-flex bg-[#d00000] rounded-xl text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-8">
            {t("team.badge")}
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-slate-900">
            {t("hero")}
          </h1>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/3412788416/2384072099.jpeg"
                alt="Mantenimiento"
                width={800}
                height={600}
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#d00000] font-bold uppercase text-sm">
                <Shield className="w-5 h-5" />
                {t("maintenance.badge")}
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                {t("maintenance.title")}
              </h2>
              <div className="space-y-4 text-slate-700 text-lg">
                <p>{t("maintenance.desc1")}</p>
                {/* Texto destacado con contraste real */}
                <p className="font text-slate-900 bg-red-300 p-4 rounded-xl ">
                  {t("maintenance.desc2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - REVISIÓN DE CONTRASTE TOTAL */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#d00000] font-bold uppercase text-sm">
                  <Users className="w-5 h-5" />
                  {t("team.badge")}
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none">
                  {t("team.title")}
                </h2>
                {/* Corregido: Texto en Slate-900 para que se vea sobre el fondo grisáceo */}
                <p className="text-xl text-slate-900 font-bold leading-tight">
                  {t("team.desc1")}
                </p>
                <div className="space-y-4">
                  {/* Corregido: Texto en Slate-700 (Gris oscuro legible) */}
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {t("team.desc2")}
                  </p>
                  <p className="text-sm text-slate-500 font-medium">
                    {t("team.desc3")}
                  </p>
                </div>
              </div>

              {/* Botón con sombra sutil para despegar del fondo */}
              <Link
                href="/planes"
                className="inline-flex items-center justify-center gap-3 bg-[#d00000] hover:bg-slate-900 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-lg shadow-red-900/20 group"
              >
                {t("team.cta")}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://ext.same-assets.com/3412788416/2048552421.jpeg"
                  alt="Equipo"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}