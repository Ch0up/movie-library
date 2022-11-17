<template>
  <div class="tab-content" v-show="title === selectedTitle">
    <div class="movies-container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { inject } from "vue";
export default {
  props: ["title"],
  setup() {
    const selectedTitle = inject<string>("selectedTitle");
    return { selectedTitle };
  },
};
</script>
