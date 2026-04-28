"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check, AlertCircle, ArrowUpRight } from "lucide-react";
import { type Product } from "@/lib/data/products";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("ProductCard");
  const { addItem, isInCart, openCart } = useCart();
  const inCart = isInCart(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    openCart();
  };

  return (
    <div className="group relative bg-white border-2 border-slate-100 hover:border-slate-900 transition-all duration-300 flex flex-col h-full overflow-hidden">
      
      {/* Contenedor de Imagen con Overlay Técnico */}
      <Link 
        href={`/productos/${product.id}`} 
        className="block relative aspect-square overflow-hidden bg-slate-50 border-b-2 border-slate-100 group-hover:border-slate-900 transition-colors"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges de Estado */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          {!product.inStock && (
            <span className="bg-[#d00000] text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest">
              {t("out_of_stock")}
            </span>
          )}
          {product.brand && (
            <span className="bg-slate-900 text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest">
              {product.brand}
            </span>
          )}
        </div>

        {/* Icono de Vista Rápida */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white border-2 border-slate-900 p-2">
            <ArrowUpRight className="h-4 w-4 text-slate-900" />
          </div>
        </div>
      </Link>

      {/* Cuerpo de la Tarjeta */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">
            {product.category}
          </span>
          <Link href={`/productos/${product.id}`}>
            <h3 className="text-slate-900 font-black text-base leading-tight uppercase line-clamp-2 group-hover:text-[#d00000] transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Info Inferior */}
        <div className="mt-auto pt-6 flex items-end justify-between border-t border-slate-100">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-1">
              {product.inStock ? (
                <span className="flex items-center text-[9px] font-black text-emerald-600 uppercase tracking-tighter">
                  <Check className="h-3 w-3 mr-0.5 stroke-[3]" /> {t("in_stock")}
                </span>
              ) : (
                <span className="flex items-center text-[9px] font-black text-slate-300 uppercase tracking-tighter">
                  <AlertCircle className="h-3 w-3 mr-0.5 stroke-[3]" /> {t("no_stock")}
                </span>
              )}
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">
              ${product.price.toLocaleString("es-MX")}
              <span className="text-[10px] ml-1 text-slate-400 font-bold">{t("currency")}</span>
            </span>
          </div>

          {/* Acción de Carrito */}
          {inCart ? (
            <button
              className="h-12 w-12 bg-emerald-600 text-white flex items-center justify-center rounded-xl shadow-[4px_4px_0px_#ecfdf5] border-2 border-emerald-700 transition-all active:translate-y-1 active:shadow-none"
              onClick={(e) => {
                e.preventDefault();
                openCart();
              }}
            >
              <Check className="h-5 w-5 stroke-[3]" />
            </button>
          ) : (
            <button
              disabled={!product.inStock}
              className={`h-12 w-12 flex items-center justify-center rounded-xl transition-all border-2
                ${product.inStock 
                  ? "bg-slate-900 text-white border-slate-900 shadow-[4px_4px_0px_#f1f5f9] hover:bg-[#d00000] hover:border-[#d00000] hover:shadow-red-50/50 active:translate-y-1 active:shadow-none" 
                  : "bg-slate-50 text-slate-200 border-slate-100 cursor-not-allowed"
                }`}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5 stroke-[2.5]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}