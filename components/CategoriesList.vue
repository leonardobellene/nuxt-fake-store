<template>
  <div class="bg-gray-100 py-4 px-8 shadow-sm">
    <div class="w-full max-w-[1920px] mx-auto">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold text-gray-800">Categories</h2>
        <button @click="isCategoriesOpen = !isCategoriesOpen"
          class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold p-2 rounded-full transition flex items-center justify-center">
          <Icon :name="isCategoriesOpen ? 'lucide:chevron-up' : 'lucide:chevron-down'" size="24" />
        </button>
      </div>
      <div v-show="isCategoriesOpen" class="mt-4">
        <ul class="flex flex-wrap gap-3">
          <li v-for="category in categories" :key="category.id">
            <button @click="handleCategorySelect(category.name)"
              class="inline-block bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-5 py-2 rounded-full transition duration-200 shadow-sm hover:shadow-md">
              {{ category.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" async>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductLoader } from '@/composables/useProductLoader'
import type { Category } from '@/types'

const { getCategories } = useProductLoader()
const router = useRouter()

const isCategoriesOpen = ref(false)
const categories = ref<Category[] | null>(null)

try {
  const result = await getCategories()
  categories.value = result
} catch (error) {
  console.error("Failed to load categories:", error)
  categories.value = []
}

async function handleCategorySelect(categoryName: string) {
  if (!categories.value) return
  const category = categories.value.find(c => c.name === categoryName)
  if (!category) return
  router.push({ path: `/category/${category.id}`, query: { name: category.name } })
}
</script>
