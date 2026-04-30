"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Check, Computer, ArrowRight, Cog } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { type Product } from "@/lib/data/products";
import { useTranslations } from "next-intl";

import { pricingPlans } from "@/lib/plans";

export default function Planes() {
  const t = useTranslations("Pricing");
  const { addItem, isInCart, openCart } = useCart();

  const handleAddPlan = (plan: typeof pricingPlans[0]) => {
    const productPlan: Product = {
      id: plan.id,
      name: plan.name,
      price: plan.price,
      description: plan.description,
      image: "https://ext.same-assets.com/3412788416/3615758482.webp",
      category: "servicios",
      brand: "Vanguardia Tecnología",
      inStock: true,
      specs: {}
    };
    addItem(productPlan);
    openCart();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 flex flex-col border-b-2 border-slate-100 bg-red-500">
        <h1 className="text-6xl md:text-8xl font-black p-10 text-white leading-none">
          {t("hero")}
        </h1>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <span className="inline-block bg-[#d00000] text-white px-4 py-1 rounded-xl text-xs font-bold uppercase mb-6">
              {t("badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
              {t("title")}
            </h2>
          </div>

          {/* Grid de Planes Sólido */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border-2 border-slate-100 rounded-xl overflow-hidden shadow-2xl shadow-slate-200/50">
            {pricingPlans.map((plan) => {
              const inCart = isInCart(plan.id);

              return (
                <div key={plan.id} className="bg-white p-10 flex flex-col h-full group hover:bg-slate-50 transition-colors">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 h-14 line-clamp-2 leading-snug">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-[#d00000]">
                        MXN ${plan.price.toLocaleString("es-MX")}
                      </span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {t("tax_info")}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-10 border-l-2 border-slate-100 pl-4">
                    {plan.description}
                  </p>

                  <button
                    onClick={() => inCart ? openCart() : handleAddPlan(plan)}
                    className={`w-full h-16 rounded-xl font-black text-sm uppercase flex items-center justify-center gap-3 transition-all active:scale-95 ${inCart
                      ? "bg-slate-900 text-white"
                      : "bg-[#d00000] text-white hover:bg-slate-900"
                      }`}
                  >
                    {inCart ? (
                      <><Check className="w-5 h-5" /> {t("in_cart")}</>
                    ) : (
                      <><ShoppingCart className="w-5 h-5" /> {t("cta")}</>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Custom CTA Section */}
          <div className="mt-32 grid lg:grid-cols-2 gap-px bg-slate-900 border-2 border-slate-900 rounded-xl overflow-hidden shadow-2xl">
            {/* Bloque Izquierdo: Formulario */}
            <div className="bg-white p-12 space-y-8">
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">{t("custom.title")}</h3>
                <p className="text-slate-500 text-lg leading-relaxed">{t("custom.desc")}</p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/opcion-personalizada" className="bg-[#d00000] text-white px-8 py-4 rounded-xl font-black uppercase text-xs hover:bg-slate-900 transition-colors">
                  {t("custom.form")}
                </Link>
                <Link href="/productos/personalizado" className="border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-black uppercase text-xs hover:border-slate-900 transition-colors">
                  {t("custom.quote")}
                </Link>
              </div>
            </div>

            {/* Bloque Derecho: Catálogo */}
            <div className="bg-slate-50 p-12 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="bg-[#d00000] w-12 h-12 rounded-xl flex items-center justify-center text-white">
                  <Computer className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{t("custom.discover")}</h3>
              </div>
              <Link href="/productos" className="flex items-center justify-between bg-white p-6 rounded-xl border-2 border-slate-200 group-hover:border-[#d00000] transition-all">
                <span className="font-black uppercase text-xs tracking-widest">{t("custom.view_all")}</span>
                <ArrowRight className="w-5 h-5 text-[#d00000] group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}