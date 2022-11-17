import { defineStore } from "pinia";

export const useCategoryMoviesStore = defineStore("categoryMovies", {
  state: () => ({
    categoryMovies: [],
    isLoading: false,
    error: null,
    categoryDefaultId: 28,
  }),
  getters: {},
  actions: {
    async fetchCategoryMovies(categoryId?: number) {
      this.categoryMovies = [];
      this.isLoading = true;
      if (categoryId) {
        this.categoryDefaultId = categoryId;
      }
      try {
        this.categoryMovies = await fetch(
          import.meta.env.VITE_BASE_URL +
          "discover/movie?api_key=" +
          import.meta.env.VITE_API_KEY +
          `&with_genres=${this.categoryDefaultId}`
        ).then((response) => response.json());
      } catch (error: any) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
