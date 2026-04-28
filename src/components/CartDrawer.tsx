"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Trash2, Plus, Minus, Package, ArrowRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function CartDrawer() {
  const t = useTranslations("CartDrawer");
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    tax,
    total,
  } = useCart();

  // Bloquear scroll del body cuando el carrito está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay Oscuro */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Panel del Carrito */}
      <aside 
        className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-white z-[101] shadow-2xl transition-transform duration-300 ease-in-out border-l-2 border-slate-900 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Estilo Terminal */}
        <header className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-5 w-5 text-[#d00000]" />
            <h2 className="font-black uppercase tracking-widest text-sm">
              {t("title")}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-[#d00000] text-white px-2 py-0.5 rounded text-[10px] font-black uppercase">
              {t("items_count", { count: totalItems })}
            </span>
            <button onClick={closeCart} className="hover:text-[#d00000] transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>
        </header>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-10">
            <div className="h-24 w-24 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center mb-6 text-slate-300">
              <Package className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 uppercase mb-4 leading-tight">
              {t("empty.title")}
            </h3>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed">
              {t("empty.desc")}
            </p>
            <Link
              href="/productos"
              onClick={closeCart}
              className="bg-[#d00000] text-white px-8 py-4 rounded-xl font-black uppercase text-xs hover:bg-slate-900 transition-colors"
            >
              {t("empty.cta")}
            </Link>
          </div>
        ) : (
          <>
            {/* Scrollable Items Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div 
                  key={item.product.id} 
                  className="flex gap-4 p-4 border-2 border-slate-100 rounded-xl hover:border-slate-900 transition-colors bg-white"
                >
                  <div className="h-20 w-20 bg-white rounded-lg flex-shrink-0 border border-slate-50 relative">
                    <Image 
                      src={item.product.image} 
                      alt={item.product.name} 
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col">
                    <Link 
                      href={`/productos/${item.product.id}`} 
                      onClick={closeCart} 
                      className="text-[11px] font-black text-slate-900 uppercase hover:text-[#d00000] line-clamp-1 mb-1 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-lg font-black text-[#d00000]">
                      ${item.product.price.toLocaleString("es-MX")}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-2">
                      {/* Controles de cantidad minimalistas */}
                      <div className="flex items-center border-2 border-slate-100 rounded-lg overflow-hidden bg-slate-50">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)} 
                          className="p-1.5 hover:bg-white text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-[11px] font-black">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)} 
                          className="p-1.5 hover:bg-white text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.product.id)} 
                        className="text-slate-300 hover:text-[#d00000] p-1 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Footer Summary */}
            <footer className="bg-slate-50 p-6 border-t-2 border-slate-900 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <span>{t("summary.subtotal")}</span>
                  <span>${subtotal.toLocaleString("es-MX")} {t("summary.currency")}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-black uppercase text-slate-900">{t("summary.total")}</span>
                  <span className="text-3xl font-black text-slate-900 tracking-tighter">
                    ${total.toLocaleString("es-MX")} <span className="text-[10px]">{t("summary.currency")}</span>
                  </span>
                </div>
              </div>

              <div className="grid gap-3">
                <button 
                  className="w-full h-16 bg-[#d00000] text-white rounded-xl font-black uppercase text-sm flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-red-900/10 active:scale-[0.98]"
                >
                  {t("actions.checkout")}
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Link 
                    href="/carrito" 
                    onClick={closeCart}
                    className="flex items-center justify-center h-12 bg-white border-2 border-slate-200 rounded-xl font-black uppercase text-[10px] hover:border-slate-900 transition-colors"
                  >
                    {t("actions.view_full")}
                  </Link>
                  <button 
                    onClick={clearCart}
                    className="flex items-center justify-center h-12 bg-white border-2 border-slate-200 rounded-xl font-black uppercase text-[10px] text-slate-400 hover:text-[#d00000] hover:border-[#d00000] transition-colors"
                  >
                    {t("actions.clear")}
                  </button>
                </div>
              </div>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}