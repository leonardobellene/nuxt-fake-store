import { defineStore } from 'pinia'

interface FavoriteProduct {
  id: number
  title: string
  price: number
  images: string[]
  category?: { id: number; name: string }
}

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as FavoriteProduct[],
  }),
  actions: {
    toggleFavorite(product: FavoriteProduct) {
      const index = this.favorites.findIndex(p => p.id === product.id)
      if (index === -1) {
        this.favorites.push(product)
      } else {
        this.favorites.splice(index, 1)
      }
    },
    isFavorite(productId: number) {
      return this.favorites.some(p => p.id === productId)
    }
  },
  persist: true // It saves to localStorage automatically
})
