<template>
    <ProductsList :title="categoryName" :products="products" />
</template>

<script setup lang="ts" async>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductLoader } from '@/composables/useProductLoader'
import type { Product } from '@/types'

const { loadCategoryProduct } = useProductLoader()

const products = ref<Product[] | null>(null)
const route = useRoute()
const categoryName = route.query.name as string | undefined

async function loadProductsFromId() {
    const categoryId = route.params.id as string;
    if (!categoryId) {
        console.warn("No category ID provided in route.");
        products.value = [];
        return;
    }
    try {
        products.value = await loadCategoryProduct(categoryId);
    } catch (error) {
        console.error("Failed to load products:", error)
        products.value = []
    }
}

await loadProductsFromId();
</script>