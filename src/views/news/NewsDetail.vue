<script setup>
import { useStore } from "vuex";
import { ref, computed, watch, toRef } from "vue";

const props = defineProps([
  "id"
]);

import NewsMostSeenItem from "../../components/news/NewsMostSeenItem.vue";

const store = useStore();
const articleId = toRef(props, "id");

const error = ref(null);
const articles = ref(null);
const selectedArticle = ref(null);

function loadSelectedArticle() {
  try {
    const favorites = store.getters["favorites/favorites"];
    articles.value = store.getters["news/getNews"].concat(favorites);

    selectedArticle.value = articles.value.find(
        (article) => article.id === parseInt(articleId.value)
    );
  } catch (err) {
    error.value = err.message || "Something went wrong!";
  }
}

loadSelectedArticle();

const mostSeenArticles = computed(() => [
  articles.value[90],
  articles.value[91],
  articles.value[92],
  articles.value[93],
  articles.value[94]
]);

const author = computed(() => selectedArticle.value.author);
const title = computed(() => selectedArticle.value.title);
const description = computed(() => selectedArticle.value.description);
const content = computed(() => selectedArticle.value.content);
const urlToImage = computed(() => selectedArticle.value.urlToImage);
const publishedAt = computed(() => new Date(selectedArticle.value.publishedAt).toLocaleDateString());

watch(articleId, (newRoute) => {
  loadSelectedArticle(newRoute);
});
</script>

<template>
  <article class="max-w-screen-xl mx-auto py-10 px-10 lg:px-5 grid grid-cols-1 lg:grid-cols-8">
    <section class="lg:col-span-5 mb-10">
      <figure class="mb-10">
        <img :src="urlToImage"
             :alt="description">
      </figure>
      <h2 class="text-gunmetal text-4xl md:text-5xl lg:text-6xl mb-10">{{ title }}</h2>
      <p class="text-silver mb-2">
        <font-awesome-icon icon="clock" />
        {{ publishedAt }}
      </p>
      <p class="text-silver mb-5 py-5">{{ author }}</p>
      <p class="text-gunmetal">{{ content }}</p>
    </section>
    <section class="lg:col-span-3 lg:ml-10">
      <h2 class="text-gunmetal text-4xl lg:text-5xl mb-8">Populair op Footy</h2>
      <ul class="flex flex-col gap-10">
        <NewsMostSeenItem v-for="item in mostSeenArticles"
                          :key="item?.id"
                          :id="item?.id"
                          :title="item?.title"
                          :description="item?.description"
                          :url-to-image="item?.urlToImage" />
      </ul>
    </section>
  </article>
</template>

<style scoped>
article section p:nth-of-type(2) {
  border-top: 1px solid #C3C3C3;
  border-bottom: 1px solid #C3C3C3;
}
</style>