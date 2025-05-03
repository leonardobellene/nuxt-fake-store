import { defineStore } from 'pinia'

interface VisitedProduct {
  id: number
  title: string
  price: number
  images: string[]
  category?: { id: number; name: string }
}

export const useVisitedStore = defineStore('visited', {
  state: () => ({
    visited: [] as VisitedProduct[],
  }),
  actions: {
    addVisited(product: VisitedProduct) {
      const exists = this.visited.find(p => p.id === product.id)
      if (!exists) {
        this.visited.unshift(product)  
        if (this.visited.length > 12) {
          this.visited.pop()          
        }
      }
    }
  },
  persist: true  // Save to localStorage automatically
})
