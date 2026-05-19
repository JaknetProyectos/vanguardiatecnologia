"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ChevronRight, Loader2, Send } from "lucide-react";
import { useContact } from "@/hooks/useContactForm";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const { sendContactForm, isLoading } = useContact();
  const formRef = useRef<HTMLFormElement>(null);

  const quickLinks = [
    { href: "/", label: t("quickLinks.items.home") },
    { href: "/sobre-nosotros", label: t("quickLinks.items.about") },
    { href: "/productos", label: t("quickLinks.items.products") },
    { href: "/planes", label: t("quickLinks.items.planes") },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      mensaje: formData.get("mensaje") as string,
      servicioDeseado: "Contacto desde Footer",
    };

    const result = await sendContactForm(data);

    if (result.success && formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background decoration - Sutil Red Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#d00000] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] italic uppercase tracking-tighter">
              <span className="block">{t("title.part1")}</span>
              <span className="text-[#d00000] block">{t("title.part2")}</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#d00000] mb-8">
                  {t("quickLinks.title")}
                </h3>
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group"
                      >
                        <ChevronRight className="h-4 w-4 text-[#d00000] group-hover:translate-x-1 transition-transform" />
                        <span className="font-bold">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#d00000] mb-8">
                  {t("contact.title")}
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-white/5 p-2 rounded-xl">
                      <MapPin className="h-5 w-5 text-[#d00000]" />
                    </div>
                    <span className="text-gray-400 text-sm leading-relaxed font-medium">
                      {t("contact.address")}
                    </span>
                  </li>
                  <li>
                    <a href={`tel:${t("contact.phone").replace(/\s/g, "")}`} className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group">
                      <div className="bg-white/5 p-2 rounded-xl group-hover:bg-[#d00000] transition-colors">
                        <Phone className="h-5 w-5 text-[#d00000] group-hover:text-white" />
                      </div>
                      <span className="font-bold">{t("contact.phone")}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${t("contact.email")}`} className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group">
                      <div className="bg-white/5 p-2 rounded-xl group-hover:bg-[#d00000] transition-colors">
                        <Mail className="h-5 w-5 text-[#d00000] group-hover:text-white" />
                      </div>
                      <span className="font-bold">{t("contact.email")}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form - Material 3 Solid White Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 text-black shadow-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="nombre"
                required
                placeholder={t("form.name")}
                className="bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-6 focus-visible:ring-0 focus-visible:border-[#d00000] text-black font-bold placeholder:text-gray-400"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="telefono"
                  required
                  placeholder={t("form.phone")}
                  className="bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-6 focus-visible:ring-0 focus-visible:border-[#d00000] text-black font-bold placeholder:text-gray-400"
                />
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder={t("form.email")}
                  className="bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-6 focus-visible:ring-0 focus-visible:border-[#d00000] text-black font-bold placeholder:text-gray-400"
                />
              </div>
              <Textarea
                name="mensaje"
                required
                placeholder={t("form.message")}
                rows={4}
                className="bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 focus-visible:ring-0 focus-visible:border-[#d00000] text-black font-bold placeholder:text-gray-400 resize-none"
              />

              <div className="flex items-center gap-4 py-4 px-5 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <input type="checkbox" required className="h-5 w-5 rounded accent-[#d00000] cursor-pointer" />
                <span className="text-gray-600 text-xs font-black uppercase tracking-tighter">
                  {t("form.terms")}
                </span>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#d00000] hover:bg-black text-white rounded-xl py-8 text-lg font-black uppercase tracking-widest transition-all active:scale-[0.98] shadow-lg shadow-red-500/20"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-6 w-6 mr-2 animate-spin" />
                    {t("form.loading")}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    {t("form.submit")}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-10 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 flex flex-col lg:grid lg:grid-cols-3 items-center gap-8">
          {/* Payments */}
          <div className="flex items-center gap-4 bg-white/5 px-5 py-2 rounded-xl border border-white/10">
            <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{t("bottom.payments")}</span>
            <div className="flex gap-2">
              <div className="bg-white rounded px-2 py-1 flex items-center h-6">
                <span className="text-blue-800 font-black text-[10px]">VISA</span>
              </div>
              <div className="bg-white rounded px-2 py-1 flex items-center h-6">
                <div className="flex">
                  <div className="w-3 h-3 bg-[#eb001b] rounded-full -mr-1" />
                  <div className="w-3 h-3 bg-[#f79e1b] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] text-center">
            {t("bottom.rights")}
          </p>

          {/* Links */}
          <div className="flex justify-center lg:justify-end items-center gap-8 text-[10px] font-black uppercase tracking-widest">
            <Link href="/politica-privacidad" className="text-gray-400 hover:text-[#d00000] transition-colors italic">
              {t("bottom.links.privacy")}
            </Link>
            <Link href="/terminos-y-condiciones" className="text-gray-400 hover:text-[#d00000] transition-colors italic">
              {t("bottom.links.terms")}
            </Link>
            <Link href="/politica-de-reembolsos-y-devoluciones" className="text-gray-400 hover:text-[#d00000] transition-colors italic">
              {t("bottom.links.refunds")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}