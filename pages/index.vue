<template>
  <ProductsList :title="title" :products="products" :is-loading="isLoading" />
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductLoader } from '@/composables/useProductLoader'
import type { Product } from '@/types'

const route = useRoute()
const { loadAllProducts, searchProducts } = useProductLoader()

const products = ref<Product[] | null>(null)

// Add title dynamically based on the query parameter
const title = computed(() => {
  const rawQuery = route.query.q
  const query = Array.isArray(rawQuery) ? rawQuery[0] : rawQuery?.trim()
  return query ? `Results for "${query}"` : 'Home'
})

const isLoading = ref(true)

// Function to load products based on the query parameter
async function loadProductsFromQuery() {
  isLoading.value = true
  try {
    const rawQuery = route.query.q
    const query = Array.isArray(rawQuery) ? rawQuery[0] : rawQuery?.trim()
    products.value = query
      ? await searchProducts(query)
      : await loadAllProducts()
  } catch (error) {
    console.error("Failed to load products:", error)
    products.value = []
  } finally {
    isLoading.value = false
  }
}

// Watch for changes in the query parameter
watch(
  () => route.query.q,
  async () => {
    await loadProductsFromQuery()
  }, { immediate: true }
)
</script>
