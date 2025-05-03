<template>
  <div class="relative group">
    <router-link
      :to="`/products/${product.id}`"
      class="block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition p-4 flex flex-col hover:scale-[1.02] duration-200"
    >
      <!-- Product Image -->
      <div class="flex justify-center mb-4">
        <img
          v-if="product.images?.length"
          :src="productImage"
          @error="handleImageError"
          alt="Product Image"
          loading="lazy"
          class="object-cover w-48 h-48 rounded"
        />
        <div
          v-else
          class="w-48 h-48 flex items-center justify-center bg-gray-100 text-gray-400 text-sm rounded"
        >
          No Image
        </div>
      </div>

      <!-- Product Info -->
      <div class="flex flex-col space-y-2 text-center">
        <h3 class="font-semibold text-lg truncate">{{ product.title }}</h3>
        <p class="text-green-600 font-bold">${{ product.price }}</p>
        <p class="text-gray-500 text-sm">
          {{ product.category?.name || "No category" }}
        </p>
      </div>
    </router-link>

    <!-- Favorite Star -->
    <FavoriteToggle :product="product" />
  </div>
</template>

<script setup lang="ts">
import FavoriteToggle from "@/components/FavoriteToggle.vue";
import type { Product } from "@/types";

const props = defineProps<{
  product: Product;
}>();

const fallbackImage = "https://placehold.co/600x400?text=No+Image";
const productImage = ref(props.product.images?.[0] || fallbackImage);

// Handle image loading error
function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement;
  img.src = fallbackImage;
}
</script>
