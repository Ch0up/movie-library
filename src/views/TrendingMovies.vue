<template>
  <main class="pt-4 px-4 h-100 w-100 background-custom ">
    <div class="mt-16 pt-10 movies-container">
      <div v-if="isLoading" class="text-white mx-auto">Loading movies...</div>
      <div v-if="error">{{ error.message }}</div>
      <div v-if="trendingMovies.results" :key="movie.id" v-for="movie in trendingMovies.results.slice(0, 4)">
        <BaseMovieCard :movie="movie" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useTrendingMoviesStore } from "../stores/trendingMoviesStore";
import BaseMovieCard from "../components/BaseMovieCard.vue";

const { trendingMovies, isLoading, error } = storeToRefs(
  useTrendingMoviesStore()
);

const { fetchTrendingMovies } = useTrendingMoviesStore();

onMounted(() => {
  fetchTrendingMovies();
});
</script>

<style scoped>
.background-custom {
  background-image: url("../assets/images/back-to-the-futur.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
