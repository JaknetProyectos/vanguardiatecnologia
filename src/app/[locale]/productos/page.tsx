"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  RefreshCw, AlertCircle, Search,
  ChevronLeft, ChevronRight, X, Filter
} from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { useTranslations } from "next-intl";
import LoadingScreen from "@/components/Loading";

export default function Productos() {
  const t = useTranslations("Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { products, totalCount, isLoading, error, refetch } = useProducts({
    search: debouncedSearch,
    page: currentPage,
    pageSize: pageSize,
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  if (isLoading) return <LoadingScreen />

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-white border-b-2 border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#d00000] text-white px-3 py-1 rounded-md text-xs font-bold uppercase mb-4">
                {t("hero.badge")}
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none">
                {t("hero.title")}
              </h1>
            </div>

            {/* Buscador */}
            <div className="w-full max-w-md relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#d00000] transition-colors w-5 h-5" />
              <input
                type="text"
                placeholder={t("hero.searchPlaceholder")}
                className="w-full h-14 pl-12 pr-12 rounded-xl border-2 border-slate-200 bg-white text-lg font-medium focus:border-[#d00000] outline-none transition-all placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-slate-400" />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/6 h-full bg-[#d00000] hidden lg:block translate-x-1/2 skew-x-12" />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">

          {/* Info Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 py-6 border-b border-slate-100 gap-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900">
                {debouncedSearch
                  ? t("infoBar.resultsFor", { query: debouncedSearch })
                  : t("infoBar.allProducts")}
              </h2>
              <p className="text-slate-500 font-medium">
                {t("infoBar.showing")} <span className="text-[#d00000] font-bold">{products.length}</span> {t("infoBar.of")} {totalCount} {t("infoBar.units")}
              </p>
            </div>

            <div className="flex items-center gap-3">
              
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="max-w-md mx-auto text-center py-24 border-2 border-red-100 rounded-xl bg-red-50/30">
              <div className="h-16 w-16 bg-white rounded-xl border-2 border-red-200 flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-8 w-8 text-[#d00000]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("error.title")}</h3>
              <p className="text-slate-500 mb-8 px-6">{t("error.message")}</p>
              <button
                onClick={refetch}
                className="bg-[#d00000] text-white rounded-xl px-10 py-4 font-bold hover:bg-slate-900 transition-colors"
              >
                {t("error.retry")}
              </button>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {isLoading ? (
              Array.from({ length: pageSize }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-square bg-slate-100 rounded-xl animate-pulse" />
                  <div className="h-6 bg-slate-100 rounded-md w-3/4 animate-pulse" />
                </div>
              ))
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>

          {/* Empty State */}
          {!isLoading && products.length === 0 && (
            <div className="text-center py-32 border-2 border-dashed border-slate-200 rounded-xl">
              <p className="text-slate-500 text-xl font-medium mb-4">{t("empty.message")}</p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#d00000] font-black border-b-2 border-[#d00000] hover:text-slate-900 hover:border-slate-900 transition-colors"
              >
                {t("empty.reset")}
              </button>
            </div>
          )}

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="mt-24 flex justify-center items-center gap-4">
              <button
                disabled={currentPage === 1 || isLoading}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-slate-200 hover:border-[#d00000] disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const num = i + 1;
                  if (num === 1 || num === totalPages || (num >= currentPage - 1 && num <= currentPage + 1)) {
                    return (
                      <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        className={`w-12 h-12 rounded-xl font-bold border-2 transition-all ${currentPage === num
                            ? "bg-slate-900 border-slate-900 text-white"
                            : "bg-white border-slate-200 text-slate-600 hover:border-[#d00000]"
                          }`}
                      >
                        {num}
                      </button>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                disabled={currentPage === totalPages || isLoading}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-slate-200 hover:border-[#d00000] disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}