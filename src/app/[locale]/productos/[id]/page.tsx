"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ShoppingCart, ChevronLeft, RefreshCw, AlertCircle, 
  Truck, Shield, Headphones, Plus, Minus 
} from "lucide-react";
import { useProduct } from "@/hooks/useProduct";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { useTranslations } from "next-intl";

export default function ProductoDetalle() {
  const t = useTranslations("Detail");
  const params = useParams();
  const productId = typeof params.id === "string" ? params.id : null;
  const { product, isLoading, error } = useProduct(productId);
  const { addItem, isInCart, getItemQuantity, updateQuantity, openCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const { products: relatedProducts, isLoading: loadingRelated } = useProducts({
    category: product?.category,
    pageSize: 5
  });

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      openCart();
    }
  };

  const quantity = product ? getItemQuantity(product.id) : 0;
  const inCart = product ? isInCart(product.id) : false;
  const filteredRelated = relatedProducts.filter(p => p.id !== productId).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />

      {/* Header de navegación */}
      <section className="pt-32 pb-10 border-b border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <Link href="/productos" className="inline-flex items-center text-slate-500 hover:text-[#d00000] font-bold transition-colors mb-6 group">
            <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" /> 
            {t("back")}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black">{t("technical_specs")}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          
          {error && (
            <div className="text-center py-20 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
               <AlertCircle className="h-12 w-12 text-[#d00000] mx-auto mb-4" />
               <p className="text-xl font-bold">Error al cargar el producto</p>
            </div>
          )}

          {!isLoading && product && (
            <div className="grid lg:grid-cols-2 gap-16 mb-24">
              
              {/* GALERÍA */}
              <div className="space-y-6">
                <div className="aspect-square bg-white rounded-xl overflow-hidden relative border-2 border-slate-100 flex items-center justify-center p-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                  {inCart && (
                    <div className="absolute top-6 left-6 bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-black uppercase flex items-center gap-2 shadow-xl">
                      <ShoppingCart className="h-4 w-4" /> {t("in_cart")}
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  {[0, 1, 2, 3].map((i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`aspect-square rounded-xl border-2 transition-all p-2 bg-white ${
                        selectedImage === i ? "border-[#d00000]" : "border-slate-100 hover:border-slate-300"
                      }`}
                    >
                      <Image src={product.image} alt="Thumb" width={100} height={100} className="object-contain w-full h-full" />
                    </button>
                  ))}
                </div>
              </div>

              {/* INFORMACIÓN */}
              <div className="flex flex-col">
                <div className="mb-8">
                  <div className="flex gap-3 mb-6">
                    <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-md text-xs font-bold uppercase">{product.brand}</span>
                    <span className="bg-red-50 text-[#d00000] px-3 py-1 rounded-md text-xs font-bold uppercase">{product.category}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 leading-none">{product.name}</h2>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-black text-[#d00000]">
                      ${product.price.toLocaleString("es-MX")}
                    </p>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t("tax_info")}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-10 border-l-4 border-slate-100 pl-6">
                  {product.description}
                </p>

                {/* Specs - Grid Sólido */}
                {Object.keys(product.specs).length > 0 && (
                  <div className="grid grid-cols-2 gap-px bg-slate-100 border-2 border-slate-100 rounded-xl overflow-hidden mb-10">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="bg-white p-4">
                        <p className="text-[10px] uppercase font-black text-slate-400 mb-1">{key}</p>
                        <p className="text-sm font-bold text-slate-900">{value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Botones - Máximo Contraste */}
                <div className="mt-auto space-y-4">
                  {inCart ? (
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center justify-between bg-slate-100 rounded-xl px-6 py-4 min-w-[180px] border-2 border-slate-100">
                        <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-2 hover:text-[#d00000] transition-colors"><Minus className="h-6 w-6" /></button>
                        <span className="font-black text-xl">{quantity}</span>
                        <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-2 hover:text-[#d00000] transition-colors"><Plus className="h-6 w-6" /></button>
                      </div>
                      <button 
                        onClick={openCart} 
                        className="flex-1 bg-slate-900 text-white rounded-xl h-16 font-black text-lg hover:bg-[#d00000] transition-colors"
                      >
                        {t("review_cart")}
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className={`w-full h-20 rounded-xl text-xl font-black flex items-center justify-center gap-4 transition-all active:scale-[0.98] ${
                        product.inStock 
                        ? "bg-[#d00000] text-white hover:bg-slate-900 shadow-xl shadow-red-900/10" 
                        : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingCart className="h-6 w-6" />
                      {product.inStock ? t("add_to_cart") : t("out_of_stock")}
                    </button>
                  )}
                </div>

                {/* Beneficios - Iconos Sólidos */}
                <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-100">
                  <div className="text-center space-y-2">
                    <Truck className="h-6 w-6 mx-auto text-[#d00000]" />
                    <p className="text-[10px] font-black uppercase text-slate-500">{t("benefits.shipping")}</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Shield className="h-6 w-6 mx-auto text-[#d00000]" />
                    <p className="text-[10px] font-black uppercase text-slate-500">{t("benefits.warranty")}</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Headphones className="h-6 w-6 mx-auto text-[#d00000]" />
                    <p className="text-[10px] font-black uppercase text-slate-500">{t("benefits.support")}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* RELACIONADOS */}
          {!loadingRelated && filteredRelated.length > 0 && (
            <div className="pt-20 border-t-2 border-slate-100">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <h2 className="text-4xl font-black text-slate-900">{t("related.title")}</h2>
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-2">
                    {t("related.subtitle")}
                  </p>
                </div>
                <Link href={`/productos?category=${product?.category}`} className="text-[#d00000] font-black hover:text-slate-900 border-b-2 border-[#d00000] transition-colors">
                  {t("related.view_all")}
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredRelated.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}