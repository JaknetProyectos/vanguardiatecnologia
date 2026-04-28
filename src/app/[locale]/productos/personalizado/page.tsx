"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, FileText, Check, ArrowRight, ShieldCheck, Activity } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAlert } from "@/context/AlertContext";
import { type Product } from "@/lib/data/products";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ProductCard from "@/components/ProductCard";

const relatedPlans = [
  { id: "plan-mantenimiento", name: "Mantenimiento preventivo", price: 1120 },
  { id: "plan-recuperacion", name: "Recuperación de datos", price: 950 },
  { id: "plan-gestion-basico", name: "Software de gestión", price: 4630 },
  { id: "plan-soporte-30", name: "Soporte remoto 30m", price: 180 },
];

export default function PagoCotizacion() {
  const t = useTranslations("Quote");
  const { addItem, openCart } = useCart();
  const { showAlert } = useAlert();

  const [formData, setFormData] = useState({ noCotizacion: "", email: "", total: "" });

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    const monto = parseFloat(formData.total);

    if (isNaN(monto) || monto <= 0) {
      showAlert({ title: "Error", message: "Monto inválido", confirmText: "Revisar" });
      return;
    }

    const customQuoteProduct: Product = {
      id: `COT-${formData.noCotizacion || Date.now()}`,
      name: `Cotización Especial #${formData.noCotizacion}`,
      price: monto,
      description: `Vínculo: ${formData.email}`,
      image: "https://ext.same-assets.com/3412788416/2642896609.jpeg",
      category: "cotizaciones",
      brand: "Vanguardia Tecnología",
      inStock: true,
      specs: { no_cotizacion: formData.noCotizacion, client: formData.email }
    };

    addItem(customQuoteProduct);
    openCart();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 border-b-2 border-slate-100 bg-red-500">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
            {t("hero")}
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">

              {/* INFO COL */}
              <div className="space-y-10">
                <div className="relative">
                  <span className="inline-block bg-[#d00000] text-white px-4 py-1 rounded-xl text-xs font-bold uppercase mb-6 tracking-widest">
                    {t("badge")}
                  </span>
                  <h2 className="text-5xl font-black uppercase leading-tight mb-6">
                    {t("title")}
                  </h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed border-l-4 border-slate-100 pl-6">
                    {t("desc")}
                  </p>
                </div>

                {/* SVG ILUSTRATIVO TÉCNICO */}
                <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-100 flex items-center justify-center">
                  <svg width="240" height="120" viewBox="0 0 240 120" className="text-slate-200">
                    <rect x="10" y="10" width="220" height="100" rx="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
                    <circle cx="60" cy="60" r="20" fill="none" stroke="#d00000" strokeWidth="4" />
                    <line x1="90" y1="50" x2="180" y2="50" stroke="currentColor" strokeWidth="4" />
                    <line x1="90" y1="70" x2="150" y2="70" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400">
                    <Check className="text-[#d00000] h-5 w-5" /> {t("check1")}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400">
                    <ShieldCheck className="text-[#d00000] h-5 w-5" /> {t("check2")}
                  </div>
                </div>
              </div>

              {/* FORM CARD */}
              <div className="bg-white border-2 border-slate-900 rounded-xl overflow-hidden shadow-[20px_20px_0px_#f1f5f9]">
                <div className="bg-slate-900 text-white p-6 flex items-center gap-3">
                  <FileText className="h-5 w-5 text-[#d00000]" />
                  <span className="font-black uppercase text-xs tracking-widest">{t("form.title")}</span>
                </div>

                <form onSubmit={handleAddToCart} className="p-10 space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t("form.no")}</label>
                    <input
                      required
                      placeholder="VT-2026-X"
                      className="w-full h-14 px-5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-[#d00000] outline-none transition-all font-bold"
                      value={formData.noCotizacion}
                      onChange={(e) => setFormData({ ...formData, noCotizacion: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t("form.email")}</label>
                    <input
                      required
                      type="email"
                      placeholder="client@terminal.com"
                      className="w-full h-14 px-5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-[#d00000] outline-none transition-all font-bold"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t("form.total")}</label>
                    <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-400">$</span>
                      <input
                        required
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        className="w-full h-14 pl-10 pr-5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-[#d00000] outline-none transition-all font-black text-xl text-slate-900"
                        value={formData.total}
                        onChange={(e) => setFormData({ ...formData, total: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-20 bg-[#d00000] hover:bg-slate-900 text-white rounded-xl font-black uppercase text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-4 shadow-xl shadow-red-900/10"
                  >
                    <ShoppingCart className="h-6 w-6" />
                    {t("form.cta")}
                  </button>
                </form>
              </div>
            </div>

            {/* RELATED PLANS */}
            <div className="mt-40 pt-20 border-t-2 border-slate-100">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                    <Activity className="w-6 h-6 text-[#d00000]" />
                  </div>
                  <h3 className="text-4xl font-black uppercase">{t("related.title")}</h3>
                </div>
                <Link href="/planes" className="text-[#d00000] font-black uppercase text-xs border-b-2 border-[#d00000] hover:text-slate-900 transition-colors">
                  {t("related.view_all")}
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border-2 border-slate-100 rounded-xl overflow-hidden shadow-2xl">
                {relatedPlans.map((plan) => (
                  <ProductCard key={plan.id}
                    product={{
                      brand: "Personalizado",
                      category: "Personalizado",
                      description: plan.name,
                      name: plan.name,
                      id: plan.id,
                      image: "https://compucorel.com/wp-content/uploads/2025/10/service_2.svg",
                      inStock: true,
                      price: plan.price,
                      specs: {}
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}