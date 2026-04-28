"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Phone, Rocket, MessageSquare, Headphones, Code, Monitor,
  Settings, Search, Wrench, Lightbulb, Users, Cpu, Shield, Zap,
  Check,
  ShoppingCart
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useProducts } from "@/hooks";
import { useCart } from "@/context/CartContext";
import { pricingPlans } from "@/lib/plans";
import { Product } from "@/lib/data/products";
import LoadingScreen from "@/components/Loading";
import { getOptimizedUrl } from "@/lib/utils";

export default function Home() {
  const t = useTranslations("Home");

  const { addItem, isInCart, openCart } = useCart();
  // Mapeo de iconos para mantener la lógica original
  const serviceIcons = [Headphones, Monitor, Settings, Search, Wrench, Code];
  const whyIcons = [MessageSquare, Headphones, Code];
  const featureIcons = [Cpu, Headphones, Settings, Code, Users, Monitor, Zap, Lightbulb];

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


  const { products, isLoading } = useProducts({ pageSize: 12 })

  if (isLoading) return <LoadingScreen/>

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Material 3 Red Solid */}
      <section className="bg-[#d00000] min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
                {t("hero.title")}
              </h1>
              <p className="text-white/90 text-xl mb-12 max-w-xl leading-relaxed">
                {t("hero.description")}
              </p>
              <Link href="/planes">
                <button className="bg-white text-[#d00000] font-black px-10 py-5 rounded-xl hover:bg-gray-100 transition-all shadow-xl text-lg">
                  EMPEZAR AHORA
                </button>
              </Link>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <Image
                src={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1733678582566-339d89b3e029?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
                alt="Rocket"
                width={450}
                height={450}
                className="animate-bounce-slow drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#d00000] font-black uppercase tracking-tighter text-sm bg-red-50 px-4 py-2 rounded-xl">
              {t("about.badge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-8 mb-10 leading-tight italic">
              "{t("about.text")}"
            </h2>
            <Link href="/sobre-nosotros">
              <button className="bg-[#d00000] text-white rounded-xl px-10 py-4 font-bold flex items-center gap-3 mx-auto hover:bg-[#a00000] transition-colors">
                <Rocket className="h-5 w-5" />
                {t("about.cta")}
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Image src={getOptimizedUrl("https://images.unsplash.com/photo-1721332154191-ba5f1534266e?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")} alt="Team" width={800} height={500} className="rounded-xl h-[400px] object-cover border-b-8 border-[#d00000]" />
            <Image src={getOptimizedUrl("https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")} alt="Tech" width={800} height={500} className="rounded-xl h-[400px] object-cover border-b-8 border-gray-200" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20 p-10 bg-gray-50 rounded-xl border border-gray-100">
            <div className="bg-[#d00000] p-5 rounded-xl text-white shadow-lg">
              <Phone className="h-10 w-10" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">{t("about.questions")}</p>
              <a href="tel:+5215515592811" className="text-3xl font-black text-gray-900 hover:text-[#d00000] transition-colors">
                {t("about.call")} +52 1 55 1559 2811
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-[#d00000] rounded-xl p-10 md:p-16 mb-16 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden">
            <div className="max-w-2xl z-10">
              <span className="font-black uppercase text-sm opacity-80">{t("services.badge")}</span>
              <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6 italic">{t("services.title")}</h2>
              <p className="text-white/80 text-lg leading-relaxed">{t("services.description")}</p>
            </div>
            <Image src="https://ext.same-assets.com/3412788416/2983405760.png" alt="Icon" width={250} height={250} className="mt-10 lg:mt-0 opacity-20 lg:opacity-100" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceIcons.map((Icon, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#d00000] transition-all group">
                <div className="bg-red-50 text-[#d00000] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d00000] group-hover:text-white transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-black text-xl mb-4 text-gray-900">{t(`services.items.${idx}.title`)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`services.items.${idx}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#d00000] font-black uppercase text-sm tracking-[0.2em]">{t("pricing.badge")}</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">{t("pricing.title")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.slice(0,3).map((plan) => {
              const inCart = isInCart(plan.id);

              return (
                <div key={plan.id} className="bg-white p-10 flex flex-col h-full group hover:bg-slate-50 transition-colors">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 h-14 line-clamp-2 leading-snug">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-[#d00000]">
                        ${plan.price.toLocaleString("es-MX")}
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
                      <><ShoppingCart className="w-5 h-5" /> {t("pricing.cta")}</>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-black rounded-xl p-8 text-white">
            <p className="text-xl font-bold mb-4 md:mb-0">{t("pricing.custom_text")}</p>
            <div className="flex gap-4">
              <Link href="/opcion-personalizada" className="bg-[#d00000] px-6 py-3 rounded-xl font-bold hover:bg-[#b00000] transition-colors">
                {t("pricing.form_cta")}
              </Link>
              <Link href="/productos/personalizado" className="border border-white/30 px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition-colors">
                {t("pricing.quote_cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16 border-b-4 border-gray-200 pb-8">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 italic tracking-tighter">
              {t("products.title")}
            </h2>
            <span className="bg-[#d00000] text-white px-4 py-1 rounded-xl text-xs font-bold uppercase">
              {t("products.badge")}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 group transition-all hover:border-[#d00000] hover:shadow-xl">
                <Link href={`/productos/${p.id}`}>
                  <div className="aspect-square relative mb-6 bg-gray-100 rounded-xl overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-bold text-sm text-gray-800 mb-4 line-clamp-2 h-10">{p.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#d00000] font-black text-xl">${p.price}</span>
                    <span className="text-[10px] text-gray-400 font-bold">{t("products.tax")}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#d00000] font-black text-sm uppercase tracking-widest">{t("why.badge")}</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-8 leading-tight">
                {t("why.title")}
              </h2>
              <p className="text-gray-500 text-lg mb-12 leading-relaxed italic border-l-4 border-[#d00000] pl-6">
                {t("why.description")}
              </p>

              <div className="space-y-8">
                {whyIcons.map((Icon, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="bg-red-50 p-4 rounded-xl text-[#d00000] group-hover:bg-[#d00000] group-hover:text-white transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 mb-2 uppercase text-sm tracking-widest">{t(`why.items.${idx}.title`)}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{t(`why.items.${idx}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image src="https://ext.same-assets.com/3412788416/2716787882.webp" alt="UI" width={600} height={600} className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute -bottom-10 -left-10 bg-[#d00000] p-10 rounded-xl text-white hidden md:block">
                <Rocket className="h-12 w-12 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d00000] font-black uppercase tracking-widest text-sm">{t("features.badge")}</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4">{t("features.title")}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featureIcons.map((Icon, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col items-center text-center hover:bg-[#d00000] transition-all group">
                <div className="bg-white/10 p-4 rounded-xl mb-6 group-hover:bg-white group-hover:text-[#d00000] text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-white text-sm uppercase tracking-tighter">{t(`features.items.${idx}`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}