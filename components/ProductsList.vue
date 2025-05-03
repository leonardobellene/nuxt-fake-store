<template>
    <div class="space-y-4">
        <h2 class="text-2xl font-semibold">{{ title }}</h2>
        <div v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="n in 12" :key="n" class="animate-pulse p-4 bg-gray-200 rounded h-64 h-[330px]" />
        </div>
        <div v-else-if="paginatedSource.length > 0">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProductCard v-for="product in paginatedItems" :key="product.id" :product="product" />
            </div>

            <div class="flex items-center justify-center space-x-4 mt-8">
                <button @click="prevPage" :disabled="currentPage === 1"
                    class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
                    Previous
                </button>
                <span class="font-medium">Page {{ currentPage }} of {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
                    Next
                </button>
            </div>
        </div>

        <div v-else class="text-gray-500 mt-4">
            No products found.
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { usePagination } from '@/composables/usePagination'
import type { Product } from '@/types'
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps<{
    title?: string
    products: Product[] | null
    isLoading?: boolean
}>()

const paginatedSource = computed(() => props.products ?? [])
const { currentPage, paginatedItems, totalPages, nextPage, prevPage } = usePagination<Product>(paginatedSource, 12)

// Reset current page when products change
watch(
    () => props.products,
    () => {
        currentPage.value = 1
    }
)
</script>