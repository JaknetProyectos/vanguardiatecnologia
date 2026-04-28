"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/supabase/client";
import { type Product } from "@/lib/data/products";

interface UseProductsOptions {
  category?: Product["category"];
  brand?: string;
  search?: string;
  page?: number;        // Nueva opción: número de página
  pageSize?: number;    // Nueva opción: elementos por página
}

interface UseProductsReturn {
  products: Product[];
  totalCount: number;   // Útil para controles de paginación
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useProducts(options: UseProductsOptions = {}): UseProductsReturn {
  const {
    category,
    brand,
    search,
    page = 1,
    pageSize = 10
  } = options;

  const [data, setData] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  const fetchProducts = useCallback(async (isCancelled: boolean) => {
    setIsLoading(true);
    setError(null);

    try {
      // 1. Iniciar query base
      let query = supabase
        .from("vanguardtech_products")
        .select("*", { count: "exact" });

      // 2. Aplicar filtros (Supabase permite encadenar condicionalmente)
      if (search) {
        // Busca en nombre o descripción
        query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
      }

      if (category) {
        query = query.eq("category", category);
      }

      if (brand) {
        query = query.eq("brand", brand);
      }

      // 3. Paginación (Range)
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      query = query.range(from, to).order('name', { ascending: true });

      const { data: dbData, error: dbError, count } = await query;

      if (dbError) throw dbError;
      if (isCancelled) return;

      // 4. Mapeo de Snake_case (DB) a CamelCase (Interface)
      const mappedProducts: Product[] = (dbData || []).map((p: any) => ({
        id: p.id,
        name: p.name,
        price: Number(p.price),
        image: p.image,
        description: p.description,
        specs: p.specs, // JSONB se parsea automáticamente
        category: p.category,
        brand: p.brand,
        inStock: p.in_stock, // Mapeo de in_stock -> inStock
      }));

      setData(mappedProducts);
      setTotalCount(count || 0);
    } catch (err) {
      if (!isCancelled) {
        setError(err instanceof Error ? err : new Error("Error desconocido"));
      }
    } finally {
      if (!isCancelled) {
        setIsLoading(false);
      }
    }
  }, [category, brand, search, page, pageSize, supabase]);

  useEffect(() => {
    let isCancelled = false;
    fetchProducts(isCancelled);

    return () => {
      isCancelled = true;
    };
  }, [fetchProducts, refetchTrigger]);

  const refetch = () => setRefetchTrigger((prev) => prev + 1);

  return {
    products: data,
    totalCount,
    isLoading,
    error,
    refetch,
  };
}

export default useProducts;