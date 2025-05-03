<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <CategoriesList />
    <main class="w-full max-w-[1920px] mx-auto flex-1 py-6 px-4">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import CategoriesList from '@/components/CategoriesList.vue'
</script>
