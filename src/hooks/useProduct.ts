"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/supabase/client";
import { type Product } from "@/lib/data/products";

interface UseProductReturn {
  product: Product | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useProduct(id: string | null): UseProductReturn {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  const fetchProduct = useCallback(async (isCancelled: boolean) => {
    // Si no hay ID, no disparamos la carga
    if (!id) {
      setProduct(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { data, error: dbError } = await supabase
        .from("vanguardtech_products")
        .select("*")
        .eq("id", id)
        .single(); // Traer solo un registro

      if (dbError) throw dbError;
      if (isCancelled) return;

      if (!data) {
        throw new Error(`Producto con ID "${id}" no encontrado`);
      }

      // Mapeo de Snake_case a CamelCase
      const mappedProduct: Product = {
        id: data.id,
        name: data.name,
        price: Number(data.price),
        image: data.image,
        description: data.description,
        specs: data.specs,
        category: data.category,
        brand: data.brand,
        inStock: data.in_stock,
      };

      setProduct(mappedProduct);
    } catch (err) {
      if (!isCancelled) {
        setError(err instanceof Error ? err : new Error("Error desconocido"));
        setProduct(null);
      }
    } finally {
      if (!isCancelled) {
        setIsLoading(false);
      }
    }
  }, [id, supabase]);

  useEffect(() => {
    let isCancelled = false;
    fetchProduct(isCancelled);

    return () => {
      isCancelled = true;
    };
  }, [fetchProduct, refetchTrigger]);

  const refetch = () => {
    setRefetchTrigger((prev) => prev + 1);
  };

  return {
    product,
    isLoading,
    error,
    refetch,
  };
}

export default useProduct;