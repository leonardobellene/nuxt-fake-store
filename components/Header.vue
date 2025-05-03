<template>
  <header class="bg-[#3b5dac] p-4 shadow flex justify-center">
    <div class="w-full max-w-[1920px] flex items-center justify-between gap-4">
      <!-- Logo -->
      <button @click="handleHomeRedirect">
        <img class="h-10 border rounded-md" src="assets/logo.png" alt="logo">
      </button>

      <!-- Search Bar -->
      <div class="flex-1 sm:mx-8">
        <div class="flex">
          <input v-model="internalSearch" type="text" placeholder="Search products..."
            class="border p-2 rounded-l w-full shadow-sm" @keyup.enter="handleSearch" />
          <button @click="handleSearch"
            class="bg-blue-50 hover:bg-blue-100 text-white font-semibold px-4 rounded-r transition">
            🔍
          </button>
        </div>
      </div>

      <!-- Favorites / Visited -->
      <div class="flex gap-4">
        <button @click="handleFavorites"
          class="text-white font-semibold px-4 py-2 rounded transition bg-yellow-400 hover:bg-yellow-500">
          ⭐ <span class="hidden sm:inline">({{ favoritesCount }})</span>
        </button>
        <button @click="handleVisited"
          class="text-white font-semibold px-4 py-2 rounded transition bg-blue-400 hover:bg-blue-500">
          👀 <span class="hidden sm:inline">({{ visitedCount }})</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFavoritesStore } from '@/stores/favorites'
import { useVisitedStore } from '@/stores/visited'

// State
const internalSearch = ref('')

// Router
const router = useRouter()

// Stores
const favoritesStore = useFavoritesStore()
const visitedStore = useVisitedStore()

// Counts
const favoritesCount = computed(() => favoritesStore.favorites.length)
const visitedCount = computed(() => visitedStore.visited.length)

// Functions
function handleSearch() {
  if (!internalSearch.value.trim()) {
    router.push('/')
  } else {
    router.push({ path: '/', query: { q: internalSearch.value } })
    internalSearch.value = ''
  }
}

function handleHomeRedirect() {
  internalSearch.value = ''
  router.push('/')
}

function handleFavorites() {
  internalSearch.value = ''
  router.push('/favorites')
}

function handleVisited() {
  internalSearch.value = ''
  router.push('/visited')
}

</script>
