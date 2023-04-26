<script setup>
import { computed } from "vue";

const props = defineProps([
  "id",
  "title",
  "publishedAt"
]);

const time = new Date(props.publishedAt).toLocaleTimeString();
const detailLink = computed(() => "/news/" + props.id);
</script>

<template>
  <RouterLink :to="detailLink">
    <li class="flex">
      <p class="text-silver pr-5">{{ time }}</p>
      <p class="text-gunmetal pr-10">{{ title }}</p>
    </li>
  </RouterLink>
</template>