<template>
  <button
    @click.stop="toggleFavorite"
    class="absolute top-1 right-1 text-yellow-400 hover:text-yellow-500 text-2xl"
  >
    <span v-if="isFavorite">★</span>
    <span v-else>☆</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useFavoritesStore } from "@/stores/favorites";
import type { Product } from "@/types";

const props = defineProps<{
  product: Product;
}>();

const favoritesStore = useFavoritesStore();

const isFavorite = computed(() => {
  return favoritesStore.isFavorite(props.product.id);
});

function toggleFavorite() {
  favoritesStore.toggleFavorite(props.product);
}
</script>
