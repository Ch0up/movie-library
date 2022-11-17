<template>
  <div class="mt-16 py-4 px-4">
    <div class="text-h5 my-6 text-center font-weight-bold text-white">Ma liste de favoris <span
        v-if="wishlist.length">({{ wishlist.length }})</span></div>
    <div v-if="wishlist.length > 0" class="movies-container">
      <template :key="movie.id" v-for="movie in wishlist">
        <BaseMovieCard :movie="movie" />
      </template>
    </div>
    <div v-else class="text-center mt-8 text-white">Vous n'avez pas encore de favoris</div>
  </div>
</template>

<script setup lang="ts">
import BaseMovieCard from "../components/BaseMovieCard.vue";

import { useWishlistMoviesStore } from "../stores/wishlistMoviesStore";
import { storeToRefs } from "pinia";

const wishlistStore = useWishlistMoviesStore();
const { wishlist } = storeToRefs(wishlistStore);
</script>
