<template>
    <ProductsList title="Favorites" :products="products" />
</template>

<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'

const favoritesStore = useFavoritesStore()
const products = favoritesStore.favorites;
</script>
