<template>
  <ProductsList title="Last 12 Visited" :products="products" />
</template>

<script setup lang="ts">
import { useVisitedStore } from '@/stores/visited'
const visitedStore = useVisitedStore()
const products = visitedStore.visited;
</script>
