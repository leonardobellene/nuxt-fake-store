<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Product Details</h1>
    <!-- Spinner while loading -->
    <LoadingSpinner v-if="status === 'pending'" />

    <div v-else-if="product">
      <div class="flex flex-col md:flex-row gap-8 relative">
        <!-- Product Image -->
        <div class="flex-shrink-0">
          <NuxtImg v-if="product.images?.length" :src="product.images[0]" alt="Product Image" width="400" height="400"
            class="object-cover w-80 h-80 rounded" />
          <div v-else class="w-80 h-80 flex items-center justify-center bg-gray-100 text-gray-400 text-sm rounded">
            No Image
          </div>
        </div>

        <!-- Product Info -->
        <div class="flex flex-col space-y-4">
          <h2 class="text-2xl font-bold">{{ product.title }}</h2>
          <p class="text-green-600 text-xl font-semibold">${{ product.price }}</p>
          <p class="text-gray-500">{{ product.description }}</p>
          <p class="text-gray-700 font-medium">
            Category: {{ product.category?.name || 'No category' }}
          </p>
        </div>
        <!-- Favorite Star -->
        <FavoriteToggle :product="product" />
      </div>
    </div>

    <div v-else>
      <p>Product not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useProductLoader } from '@/composables/useProductLoader'
import { useVisitedStore } from '@/stores/visited'
import type { Product } from '@/types'

const visitedStore = useVisitedStore()
const route = useRoute()
const id = route.params.id as string

const status = ref<'pending' | 'success' | 'error'>('pending')
const product = ref<Product | null>(null)

const loader = useProductLoader()

const result = await loader.loadProductById(id)
if (result) {
  product.value = result
  visitedStore.addVisited(result)
  status.value = 'success'
} else {
  status.value = 'error'
}

</script>