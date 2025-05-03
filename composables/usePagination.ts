import { ref, computed } from "vue";
import type { Ref, ComputedRef } from "vue";

export function usePagination<T>(
  items: Ref<T[]> | ComputedRef<T[]>,
  itemsPerPage = 10
) {
  const currentPage = ref(1);

  const paginatedItems = computed<T[]>(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return items.value.slice(start, start + itemsPerPage);
  });

  const totalPages = computed(() => {
    return Math.ceil(items.value.length / itemsPerPage);
  });

  const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
  };

  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };

  return {
    currentPage,
    paginatedItems,
    totalPages,
    nextPage,
    prevPage,
  };
}
