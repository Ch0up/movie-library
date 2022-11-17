<template>
  <v-navigation-drawer theme="dark" v-model="drawer" location="left" temporary>
    <div class="py-10 d-flex justify-center">
      <router-link class="text-red  font-weight-bold text-h5" :to="{ name: 'TrendingMovies' }" aria-current="page">
        VueFlix
      </router-link>
    </div>
    <v-list v-if="linksItems" v-for="link in linksItems" :key="link" class="mr-5 pa-5">
      <router-link class="text-white font-weight-bold text-h6" :to="{ name: link.urlViewName }" aria-current="page">{{
          link.title
      }}
      </router-link>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar class="border-custom" elevation="0" theme="dark">
    <v-app-bar-nav-icon class="d-sm-none" variant="text" @click.stop="drawer = !drawer">
      <svg height="40" width="40">
        <path d="M6.083 28.417v-1h27.834v1Zm0-7.917v-1h27.834v1Zm0-7.917v-1h27.834v1Z" fill="#fff" />
      </svg>

    </v-app-bar-nav-icon>

    <v-app-bar-title>
      <div>
        <router-link class="text-red font-weight-bold text-h5" :to="{ name: 'TrendingMovies' }" aria-current="page">
          VueFlix
        </router-link>
      </div>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <div class="d-none d-sm-block mr-5 pa-3" v-if="linksItems" v-for="link in linksItems" :key="link">
      <router-link class="text-white font-weight-bold  text-h6" :to="{ name: link.urlViewName }" aria-current="page">{{
          link.title
      }}
      </router-link>
    </div>
  </v-app-bar>

</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from 'vue'

const drawer = ref(false);
const linksItems: Ref<object> = ref([
  {
    urlViewName: 'MovieList',
    title: 'Films',
  },
  {
    urlViewName: 'MovieWishlist',
    title: 'Ma liste',
  },
]);
</script>

<style scoped>
a {
  text-decoration: none;
}

.border-custom {
  border-bottom: 1px solid rgba(250, 250, 250, 0.2);
}
</style>