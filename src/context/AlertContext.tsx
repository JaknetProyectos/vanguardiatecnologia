"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AlertOptions } from "@/interfaces/alert";

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<AlertOptions | null>(null);

  const showAlert = useCallback((opts: AlertOptions) => {
    setOptions(opts);
    setIsOpen(true);
  }, []);

  const hideAlert = useCallback(() => {
    setIsOpen(false);
    if (options?.onClose) options.onClose();
  }, [options]);

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}

      {/* Modal Overlay - Nivel máximo de Z-Index */}
      {isOpen && options && (
        <div className="fixed inset-0 z-[100] rounded-xl flex items-center justify-center p-6">
          
          {/* Backdrop con Blur intenso y animación suave */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={hideAlert}
          />
          
          {/* Modal Card - Material 3 Style */}
          <div className="relative bg-white rounded-xl mx-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]  overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 border border-gray-100">
            
            {/* Close Button - Discreto pero accesible */}
            <button 
              onClick={hideAlert}
              className="absolute top-6 left-6 p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-400 z-20"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-10 mt-5">
              {/* Icono / Branding */}
              <div className="flex justify-center mb-8">
                {options.icon ? (
                  <div className="text-[#d00000]">{options.icon}</div>
                ) : (
                  <div className="h-24 w-24 bg-red-50 rounded-[2rem] flex items-center justify-center text-[#d00000] rotate-3 shadow-inner">
                    <AlertCircle className="h-12 w-12" />
                  </div>
                )}
              </div>

              {/* Imagen opcional con aspect ratio fijo */}
              {options.image && (
                <div className="relative aspect-video w-full mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <Image 
                    src={options.image} 
                    alt="Alert" 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}

              {/* Contenido de Texto */}
              <div className="text-center space-y-3 mb-10">
                <h3 className="text-3xl font-black text-black uppercase tracking-tighter leading-none italic">
                  {options.title}
                </h3>
                <p className="text-gray-500 font-bold text-sm leading-relaxed px-2">
                  {options.message}
                </p>
              </div>

              {/* Acción Principal - Botón Rojo Material */}
              <Button 
                onClick={hideAlert}
                className="w-full bg-[#d00000] hover:bg-black text-white rounded-2xl py-8 text-lg font-black uppercase tracking-widest transition-all active:scale-[0.97] shadow-xl shadow-red-500/20"
              >
                {options.confirmText || "Entendido"}
              </Button>
            </div>

            {/* Decoración inferior sutil */}
            <div className="h-2 w-full bg-[#d00000] opacity-10" />
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert debe ser usado dentro de un AlertProvider");
  }
  return context;
};