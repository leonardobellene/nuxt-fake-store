import type { Product, Category } from "@/types";

export function useProductLoader() {
  async function loadAllProducts(): Promise<Product[] | null> {
    const { data } = await useFetch<Product[]>(
      "https://api.escuelajs.co/api/v1/products"
    );
    return data.value ?? null;
  }

  async function loadProductById(id: string): Promise<Product | null> {
    const { data } = await useFetch<Product>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return data.value ?? null;
  }

  async function searchProducts(query: string): Promise<Product[] | null> {
    if (!query.trim()) return loadAllProducts();
    const { data } = await useFetch<Product[]>(
      `https://api.escuelajs.co/api/v1/products/?title=${encodeURIComponent(
        query
      )}`
    );
    return data.value ?? null;
  }

  async function getCategories(): Promise<Category[] | null> {
    const { data } = await useFetch<Category[]>(
      "https://api.escuelajs.co/api/v1/categories"
    );
    return data.value ?? null;
  }

  async function loadCategoryProduct(
    categoryId: string
  ): Promise<Product[] | null> {
    const { data } = await useFetch<Product[]>(
      `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
    );
    return data.value ?? null;
  }

  return {
    loadAllProducts,
    searchProducts,
    getCategories,
    loadCategoryProduct,
    loadProductById,
  };
}
