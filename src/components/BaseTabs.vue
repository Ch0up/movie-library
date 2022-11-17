<template>
  <div class="tabs">
    <ul v-if="tabsDefaultProps" class="tabs-header d-sm-flex justify-center mb-4">
      <li v-for="tab in tabsDefaultProps" :key="tab.categoryMovieId" :class="{ selected: tab.title === selectedTitle }"
        @click="
  selectedTitle = tab.title;
$emit('categoryMovieById', tab.categoryMovieId);
        ">
        {{ tab.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script lang="ts">
import { ref, provide } from "vue";

export default {
  setup(props, { slots }) {
    const tabsDefaultProps = ref(slots.default().map((tab) => tab.props));

    const selectedTitle = ref(tabsDefaultProps.value[0].title);

    provide("selectedTitle", selectedTitle);

    return {
      selectedTitle,
      tabsDefaultProps,
    };
  },
};
</script>

<style scoped>
.tabs-header {
  list-style: none;
  padding: 0;
  gap: 1em;
}

.tabs-header li {
  text-align: center;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s all ease-out;
  margin-bottom: 10px;
}

.tabs-header li.selected {
  background-color: rgb(3, 61, 61);
  color: white;
}
</style>
