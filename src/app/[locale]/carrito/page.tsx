"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ShoppingCart, Trash2, Plus, Minus, ArrowLeft, 
  CreditCard, ShieldCheck, Loader2, Package, Activity 
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAlert } from "@/context/AlertContext";
import { useTranslations } from "next-intl";

export default function Carrito() {
  const t = useTranslations("CartPage");
  const { items, removeItem, updateQuantity, clearCart, subtotal, tax, total } = useCart();
  const { showAlert } = useAlert();

  const [isCheckout, setIsCheckout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", telefono: "", 
    direccion: "", city: "", state: "", cp: "",
    cardNumber: "", cardName: "", month: "", year: "", cvv: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const orderId = `VT-${Date.now()}`;
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentData: { 
            amount: total, orderId, 
            cardData: { number: formData.cardNumber, name: formData.cardName, month: formData.month, year: formData.year, cvv: formData.cvv },
            customer: { ...formData, country: "MX" }
          },
          cartItems: items,
          totals: { total, subtotal, tax }
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Declinado");

      showAlert({ title: "OPERACIÓN EXITOSA", message: `Orden ${orderId} confirmada.`, confirmText: "ENTENDIDO" });
      clearCart();
      setIsCheckout(false);
    } catch (error: any) {
      showAlert({ title: "FALLO DE PROTOCOLO", message: error.message, confirmText: "REINTENTAR" });
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0 && !isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-60 text-center container mx-auto px-6">
          <div className="h-20 w-20  flex items-center justify-center mx-auto mb-8">
            <Package className="h-10 w-10 text-slate-200" />
          </div>
          <h2 className="text-4xl font-black uppercase mb-8">{t("empty")}</h2>
          <Link href="/productos" className="bg-slate-900 text-white px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-[#d00000] transition-colors">
            {t("continue")}
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Industrial */}
      <section className="pt-40 pb-12 bg-white">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => setIsCheckout(false)}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#d00000] mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {isCheckout ? t("back") : t("continue")}
          </button>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none">
            {isCheckout ? t("checkout_title") : t("title")}
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* COLUMNA IZQUIERDA: LISTA O FORMULARIO */}
            <div className="lg:col-span-8 space-y-10">
              {!isCheckout ? (
                <>
                  <div className="flex justify-between items-end border-b-2 border-slate-100 pb-4">
                    <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">{t("items_label")}</h2>
                    <button onClick={clearCart} className="text-[10px] font-black uppercase text-[#d00000] hover:underline">
                      [ VACIAR TERMINAL ]
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.product.id} className="group flex gap-6 p-6 border-2 border-slate-100 hover:border-slate-900 transition-colors relative">
                        <div className="h-24 w-24 bg-slate-50 flex-shrink-0 relative border border-slate-100">
                          <Image src={item.product.image} alt={item.product.name} fill className="object-contain p-2" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-black text-slate-900 uppercase text-sm line-clamp-1 group-hover:text-[#d00000] transition-colors">{item.product.name}</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.product.brand}</p>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border-2 border-slate-100 bg-slate-50 overflow-hidden">
                              <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-2 hover:bg-white transition-colors"><Minus className="h-3 w-3" /></button>
                              <span className="text-xs font-black w-8 text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2 hover:bg-white transition-colors"><Plus className="h-3 w-3" /></button>
                            </div>
                            <span className="font-black text-xl text-slate-900 tracking-tighter">
                              ${(item.product.price * item.quantity).toLocaleString()} <small className="text-[10px] text-slate-400 uppercase">MXN</small>
                            </span>
                          </div>
                        </div>
                        <button onClick={() => removeItem(item.product.id)} className="absolute top-6 right-6 text-slate-200 hover:text-[#d00000] transition-colors">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <form id="payment-form" onSubmit={handlePayment} className="space-y-12">
                  <div className="grid gap-12">
                    {/* Logística */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black uppercase flex items-center gap-3">
                        <Activity className="text-[#d00000] h-6 w-6" /> {t("form.shipping_title")}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <InputTerminal name="firstName" placeholder={t("form.first_name")} required onChange={handleInputChange} />
                        <InputTerminal name="lastName" placeholder={t("form.last_name")} required onChange={handleInputChange} />
                        <InputTerminal name="email" type="email" placeholder={t("form.email")} className="md:col-span-2" required onChange={handleInputChange} />
                        <InputTerminal name="telefono" placeholder={t("form.phone")} required onChange={handleInputChange} />
                        <InputTerminal name="cp" placeholder={t("form.zip")} required onChange={handleInputChange} />
                        <InputTerminal name="direccion" placeholder={t("form.address")} className="md:col-span-2" required onChange={handleInputChange} />
                        <InputTerminal name="city" placeholder={t("form.city")} required onChange={handleInputChange} />
                        <InputTerminal name="state" placeholder={t("form.state")} required onChange={handleInputChange} />
                      </div>
                    </div>

                    {/* Pago */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black uppercase flex items-center gap-3">
                        <CreditCard className="text-[#d00000] h-6 w-6" /> {t("form.payment_title")}
                      </h3>
                      <div className="grid gap-4">
                        <InputTerminal name="cardName" placeholder={t("form.card_name")} required onChange={handleInputChange} />
                        <InputTerminal name="cardNumber" maxLength={16} placeholder={t("form.card_no")} required onChange={handleInputChange} />
                        <div className="grid grid-cols-3 gap-4">
                          <InputTerminal name="month" placeholder="MM" maxLength={2} required onChange={handleInputChange} />
                          <InputTerminal name="year" placeholder="AA" maxLength={2} required onChange={handleInputChange} />
                          <InputTerminal name="cvv" placeholder="CVV" type="password" maxLength={4} required onChange={handleInputChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* COLUMNA DERECHA: RESUMEN (Sticky con Hard Shadow) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-white border-2 border-slate-900 p-8 shadow-[12px_12px_0px_#f1f5f9]">
                <h3 className="text-2xl font-black uppercase mb-8 border-b-2 border-slate-900 pb-4">{t("summary.title")}</h3>
                
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span>{t("summary.subtotal")}</span>
                    <span className="text-slate-900">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span>{t("summary.tax")}</span>
                    <span className="text-slate-900">${tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest text-emerald-600">
                    <span>{t("summary.shipping")}</span>
                    <span>{t("summary.free")}</span>
                  </div>
                  <div className="pt-4 mt-4 border-t-2 border-slate-100 flex justify-between items-baseline">
                    <span className="text-sm font-black uppercase tracking-widest">{t("summary.total")}</span>
                    <span className="text-4xl font-black text-slate-900 tracking-tighter">
                      ${total.toLocaleString()} <small className="text-[10px] font-bold">MXN</small>
                    </span>
                  </div>
                </div>

                {!isCheckout ? (
                  <button 
                    onClick={() => setIsCheckout(true)} 
                    className="w-full h-20 bg-[#d00000] hover:bg-slate-900 text-white rounded-xl font-black uppercase text-sm tracking-[0.2em] transition-all active:scale-[0.98] shadow-xl shadow-red-900/10"
                  >
                    {t("summary.cta_checkout")}
                  </button>
                ) : (
                  <button
                    form="payment-form"
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-20 bg-slate-900 text-white font-black uppercase rounded-xl text-sm tracking-[0.2em] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
                  >
                    {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : <ShieldCheck className="h-5 w-5 text-[#d00000]" />}
                    {isLoading ? "PROCESANDO..." : t("summary.cta_pay")}
                  </button>
                )}

                <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                  <p className="text-[10px] font-bold text-slate-300 uppercase leading-relaxed tracking-wider">
                    {t("security")}
                  </p>
                  <div className="flex gap-4 justify-center mt-6">
                    <Image src={"/visa-mastercad.jpg"} width={120} height={40} alt=""/>
                    <Image src={"/etomin.png"} width={120} height={40} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Sub-componente para Inputs Estilo Terminal
function InputTerminal(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
      {...props}
      className={`w-full h-14 px-5 bg-slate-50 border-2 border-slate-100 rounded-none outline-none focus:bg-white focus:border-slate-900 transition-all font-bold placeholder:text-slate-300 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest ${props.className}`}
    />
  );
}