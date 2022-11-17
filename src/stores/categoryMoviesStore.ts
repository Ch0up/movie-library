import { defineStore } from "pinia";
import Storage from "../utils/Storage";

const wishlist = Storage.fetchAll();

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
        if (wishlist && wishlist.length > 0) {
          this.categoryMovies.results = this.isMovieInWishlist();
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

      return mergeArrayById(this.categoryMovies.results, wishlist);
    },
  },
});
