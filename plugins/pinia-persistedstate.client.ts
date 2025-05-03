import { defineNuxtPlugin } from '#app'
import type { Pinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((nuxtApp) => {
  (nuxtApp.$pinia as Pinia).use(persistedstate)
})
