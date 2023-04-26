<script setup>
import { computed } from "vue";

const props = defineProps([
  "id",
  "title",
  "description",
  "urlToImage"
]);

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(10000, 100000);
const detailLink = computed(() => "/news/" + props.id);
</script>

<template>
  <RouterLink :to="detailLink">
    <li class="grid grid-cols-3">
      <section class="col-span-1">
        <img class="h-full object-cover"
             :src="urlToImage"
             :alt="description">
      </section>
      <section class="col-span-2 pl-5 flex flex-col justify-around">
        <h2 class="text-gunmetal text-2xl">{{ title }}</h2>
        <p class="text-silver">{{ rndInt }} keer bekeken</p>
      </section>
    </li>
  </RouterLink>
</template>