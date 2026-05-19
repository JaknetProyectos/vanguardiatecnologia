"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, ShoppingCart, Rocket, Info, Package, Globe, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useTranslations, useLocale } from "next-intl";
import { useLocaleContext } from "@/context/LocaleContext";

export default function Header() {
  const t = useTranslations("Header");
  

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  const {switchLanguage,locale,isPending} = useLocaleContext()

  const toggleLanguage = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    switchLanguage(nextLocale)
  };

  const navLinks = [
    { href: "/sobre-nosotros", label: t("about"), icon: <Info className="w-4 h-4" /> },
    { href: "/productos", label: t("products"), icon: <Package className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky border-b-4 border-b-red-500 top-0 py-2 text-red-600 z-50 w-full bg-white">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">

          {/* Logo - Sin bordes ni sombras */}
          <Link href="/" className="flex gap-1 items-center">
            <Image
              src="/icono.png"
              alt="Icon"
              width={120}
              height={35}
              className="h-8 w-auto object-contain"
            />
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={35}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-bold  hover:bg-[#f2bfbf] rounded-xl transition-colors",
                  pathname.includes(link.href) && "bg-[#d78e8e]"
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Acciones Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2  font-bold text-sm uppercase hover:bg-[#f2bfbf] rounded-xl transition-colors"
            >
              <Globe className="w-4 h-4" />
              {locale}
            </button>

            <button
              onClick={openCart}
              className="relative p-2  hover:bg-[#f2bfbf] rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-white text-[#d00000] text-[10px] font-black w-4 h-4 rounded-xl flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <Link href="/planes">
              <button className="bg-[#d00000] text-white font-bold text-sm rounded-xl px-5 py-2.5 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <Rocket className="w-4 h-4" />
                {t("routes")}
              </button>
            </Link>
          </div>

          {/* Mobile UI */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={openCart}
              className="p-2 relative "
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-white text-[#d00000] text-[10px] font-black w-4 h-4 rounded-xl flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 "
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-[#d00000] z-[100] transition-transform duration-300 flex flex-col lg:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-4 flex justify-between items-center border-b border-[#a00000]">
          <Image src="https://ext.same-assets.com/3412788416/3004987079.png" alt="Logo" width={100} height={30} />
          <button onClick={() => setIsMenuOpen(false)} className="p-2 ">
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 p-4 font-bold text-lg  hover:bg-[#f2bfbf] rounded-lg"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-4 border-t border-[#a00000]">
          <button onClick={toggleLanguage} className="w-full py-3  font-bold uppercase mb-2">
            {locale === "es" ? "English" : "Español"}
          </button>
          <Link href="/planes" className="block" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full bg-white text-[#d00000] font-bold rounded-lg py-3">
              {t("cta")}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}