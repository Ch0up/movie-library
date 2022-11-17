<script setup lang="ts">
import BaseNavbar from "./components/BaseNavBar.vue";
</script>

<template>
  <v-app>
    <BaseNavbar />
    <v-content class="h-100 background-custom">
      <RouterView />
    </v-content>
  </v-app>
</template>

<style scoped>
.background-custom {
  background-color: var(--main-background-color);
}
</style>