<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card max-width="350" max-height="650" elevation="3" class="rounded-lg">
      <v-img
        max-height="500"
        cover
        :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
        :alt="movie.title"
        v-bind="props"
      >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out v-card--reveal text-h2"
          >
            <div class="pa-3 text-center">
              <div class="text-h5 mb-4">Résumé</div>
              <div class="text-subtitle-2">{{ movie.overview }}</div>
            </div>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-title>
        <div class="text-center text-subtitle-1 font-weight-bold title-custom">
          {{ movie.title }}
        </div>
      </v-card-title>
      <v-card-actions>
        <div class="d-flex align-center">
          <svg height="40" width="40" class="mb-1">
            <path
              d="m12.958 32.167 1.875-8-6.208-5.375 8.167-.709L20 10.542l3.208 7.541 8.167.709-6.208 5.375 1.875 8L20 27.917Z"
              fill="#f5c518"
            />
          </svg>
          <div>
            {{ movie.vote_average.toFixed(1) }}
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          :class="{ active: isMovieInMyList }"
          icon
          @click="
            isMovieInMyList
              ? removeMovieInWishlist(movie.id)
              : addMovieToWishlist(movie)
          "
        >
          <svg width="28" height="26" viewBox="0 0 18 16">
            <path
              d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z"
              :stroke="isMovieInMyList ? 'red' : '#2D2D2D'"
              :fill="isMovieInMyList ? 'red' : 'transparent'"
            />
          </svg>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { useWishlistMoviesStore } from "../stores/wishlistMoviesStore";
import { storeToRefs } from "pinia";
import { toRef } from "vue";

const wishlistStore = useWishlistMoviesStore();
const { wishlist } = storeToRefs(wishlistStore);

export default {
  props: ["movie"],
  setup(props: any) {
    const movies = toRef(props, "movie");
    const movieId = movies.value.id;

    return { wishlistStore, movieId };
  },
  methods: {
    addMovieToWishlist(movie: Object) {
      const wishlist = {
        ...movie,
        inWishlist: true,
      };
      wishlistStore.addToWishlist(wishlist);
    },
    removeMovieInWishlist(wishlistIdMovie: number) {
      wishlistStore.removeFromWishlist(wishlistIdMovie);
    },
  },
  computed: {
    isMovieInMyList() {
      return this.wishlistStore.wishlist.find(({ id }) => id === this.movieId);
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  background-color: rgb(21, 21, 21, 0.9);
  color: white;
  align-items: center;
  bottom: 0;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
}

.title-custom {
  white-space: normal;
}

.vote-average-custom {
  background-color: var(--main-color);
  color: white;
  border-radius: 25px;
  min-width: 48px;
  text-align: center;
  padding: 10px;
}
</style>
