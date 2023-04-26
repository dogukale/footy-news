<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, computed, toRefs } from "vue";

import NewsGridItem from "../../components/news/NewsGridItem.vue";

const store = useStore();
const router = useRouter();

const error = ref(null);

async function loadNews() {
  try {
    await store.dispatch("favorites/loadArticles");
  } catch (err) {
    error.value = err.message || "Something went wrong!";
  }
}

loadNews();

const favorites = computed(() => store.getters["favorites/favorites"]);
const hasFavorites = computed(() => store.getters["favorites/hasFavorites"]);
const author = computed(() => store.getters["auth/userEmail"].split('@')[0]);
</script>

<template>
  <section class="max-w-screen-xl mx-auto py-10 px-5 text-center">
    <h1 class="text-gunmetal text-6xl mb-5">Welkom, {{ author }}</h1>
    <p class="text-gunmetal text-3xl">Maak een nieuwe artikel aan voor je nieuwe lijst.
      <router-link class="underline"
                   to="/favorites/register">Klik hier
      </router-link>
    </p>
  </section>

  <section class="max-w-screen-xl mx-auto py-10 px-5">
    <h2 v-if="hasFavorites" class="text-gunmetal text-5xl mb-8">Mijn Artikelen</h2>
    <h2 v-else class="text-gunmetal text-5xl mb-8 text-center">Je hebt (nog) geen artikelen :(</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      <NewsGridItem v-for="item in favorites"
                    :key="item?.id"
                    :id="item?.id"
                    :author="item?.author"
                    :title="item?.title"
                    :url-to-image="item?.urlToImage"
                    :published-at="item?.publishedAt" />
    </ul>
  </section>
</template>
