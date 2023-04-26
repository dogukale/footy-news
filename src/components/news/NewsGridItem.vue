<script setup>
import { computed } from "vue";

const props = defineProps([
  "id",
  "author",
  "title",
  "urlToImage",
  "publishedAt"
]);

const detailLink = computed(() => "/news/" + props.id);
</script>

<template>
  <RouterLink :to="detailLink">
    <li class="">
      <figure class="h-[20vh]">
        <img class="h-full w-full object-cover"
             :src="urlToImage"
             :alt="title">
      </figure>
      <h2 class="text-gunmetal mt-2">{{ title }}</h2>
      <p class="text-silver mt-2">{{ author }}</p>
    </li>
  </RouterLink>
</template>