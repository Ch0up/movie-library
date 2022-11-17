<template>
  <div class="mt-16 py-4 px-4">
    <div class="text-h5 my-6 font-weight-bold text-center text-white">Vos films par catégories</div>
    <BaseTabs @categoryMovieById="getCategoryMovieById">
      <BaseTab title="Actions" categoryMovieId="28">
        <div v-if="isLoading" class="text-white mx-auto">Loading movies...</div>
        <div v-if="error">{{ error.message }}</div>
        <template :key="movie.id" v-if="categoryMovies" v-for="movie in categoryMovies.results">
          <BaseMovieCard :movie="movie" />
        </template>
      </BaseTab>
      <BaseTab title="Animation" categoryMovieId="16">
        <div v-if="isLoading" class="text-white mx-auto">Loading movies...</div>
        <div v-if="error">{{ error.message }}</div>
        <template :key="movie.id" v-if="categoryMovies" v-for="movie in categoryMovies.results">
          <BaseMovieCard :movie="movie" />
        </template>
      </BaseTab>
      <BaseTab title="Aventure" categoryMovieId="12">
        <div v-if="isLoading" class="text-white mx-auto">Loading movies...</div>
        <div v-if="error">{{ error.message }}</div>
        <template :key="movie.id" v-if="categoryMovies" v-for="movie in categoryMovies.results">
          <BaseMovieCard :movie="movie" />
        </template>
      </BaseTab>
      <BaseTab title="Comédie" categoryMovieId="35">
        <div v-if="isLoading" class="text-white mx-auto">Loading movies...</div>
        <div v-if="error">{{ error.message }}</div>
        <template :key="movie.id" v-if="categoryMovies" v-for="movie in categoryMovies.results">
          <BaseMovieCard :movie="movie" />
        </template>
      </BaseTab>
      <BaseTab title="Documentaire" categoryMovieId="99">
        <div v-if="isLoading" class="text-white mx-auto">Loading movies...</div>
        <div v-if="error">{{ error.message }}</div>
        <template :key="movie.id" v-if="categoryMovies" v-for="movie in categoryMovies.results">
          <BaseMovieCard :movie="movie" />
        </template>
      </BaseTab>
    </BaseTabs>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryMoviesStore } from "../stores/categoryMoviesStore";
import BaseMovieCard from "../components/BaseMovieCard.vue";
import BaseTab from "../components/BaseTab.vue";
import BaseTabs from "../components/BaseTabs.vue";
const { categoryMovies, isLoading, error } = storeToRefs(
  useCategoryMoviesStore()
);
const { fetchCategoryMovies } = useCategoryMoviesStore();

function getCategoryMovieById(value: number) {
  fetchCategoryMovies(value);
}

onMounted(() => {
  fetchCategoryMovies();
});
</script>
