import { defineStore } from "pinia";
import Storage from "../utils/Storage";

const wishlist = Storage.fetchAll();

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
        if (wishlist && wishlist.length > 0) {
          this.trendingMovies.results = this.isMovieInWishlist();
        }
      } catch (error: any) {
        this.error = error;
      } finally {

        this.isLoading = false;
      }
    },
    isMovieInWishlist() {
      const mergeArrayById = (array1: any[], array2: any[]) =>
        array1.map((item1: { id: any; }) => ({
          ...array2.find((item2: { id: any; }) => (item2.id === item1.id) && item2),
          ...item1
        }));

      return mergeArrayById(this.trendingMovies.results, wishlist);
    },
  },
});
