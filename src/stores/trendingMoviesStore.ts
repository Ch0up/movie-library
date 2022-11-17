import { defineStore } from "pinia";

export const useTrendingMoviesStore = defineStore("trendingMovies", {
  state: () => ({
    trendingMovies: [],
    isLoading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchTrendingMovies() {
      this.trendingMovies = [];
      this.isLoading = true;
      try {
        this.trendingMovies = await fetch(import.meta.env.VITE_BASE_URL + "trending/movie/day?api_key=" + import.meta.env.VITE_API_KEY).then((response) => response.json());
      } catch (error: any) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
