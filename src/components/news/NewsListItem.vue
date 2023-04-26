<script setup>
import { computed } from "vue";

const props = defineProps([
  "id",
  "title",
  "description",
  "urlToImage",
  "publishedAt"
]);

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 10);
const date = new Date(props.publishedAt).toLocaleDateString();
const detailLink = computed(() => "/news/" + props.id);
</script>

<template>
  <RouterLink :to="detailLink">
    <li class="grid grid-cols-5">
      <section class="col-span-2">
        <img class="h-full object-cover"
             :src="urlToImage"
             :alt="description">
      </section>
      <section class="col-span-3 pl-5 flex flex-col justify-around">
        <div class="flex justify-between text-silver">
          <p>{{ date }}</p>
          <p>
            <font-awesome-icon icon="clock" />
            {{ rndInt }} minuten
          </p>
        </div>
        <h2 class="text-gunmetal sm:text-3xl">{{ title }}</h2>
      </section>
    </li>
  </RouterLink>
</template>

<style scoped>

</style>