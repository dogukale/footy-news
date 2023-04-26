<script setup>
import { computed } from "vue";

const props = defineProps([
  "id",
  "author",
  "title",
  "description",
  "urlToImage"
]);

const detailLink = computed(() => "/news/" + props.id);
</script>

<template>
  <RouterLink :to="detailLink">
    <figure class="h-full">
      <img class="h-full w-full object-cover"
           :src="urlToImage"
           :alt="title">
    </figure>
    <p class="absolute top-12 right-16 bg-verdigris px-6 py-3 text-white">{{ author }}</p>
    <h2 class="absolute bottom-28 sm:bottom-36 px-10 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{{ title }}</h2>
    <h3 class="absolute bottom-12 sm:bottom-20 px-10 text-white md:text-3xl lg:text-4xl">{{ description }}</h3>
  </RouterLink>
</template>