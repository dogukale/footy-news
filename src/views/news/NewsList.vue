<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";

import NewsFeaturedItem from "../../components/news/NewsFeaturedItem.vue";
import NewsListItem from "../../components/news/NewsListItem.vue";
import NewsGridItem from "../../components/news/NewsGridItem.vue";
import NewsLatestItem from "../../components/news/NewsLatestItem.vue";
import NewsMostSeenItem from "../../components/news/NewsMostSeenItem.vue";

const store = useStore();
const error = ref(null);

async function loadAllNews(refresh = false) {
  try {
    await store.dispatch("news/loadNews", {
      forceRefresh: refresh
    });
  } catch (err) {
    error.value = err.message || "Something went wrong!";
  }
}

loadAllNews();

const articles = computed(() => store.getters["news/getNews"]);

const featuredArticle = computed(() => articles.value[0]);
const listArticles = computed(() => [
  articles.value[20],
  articles.value[21],
  articles.value[22],
  articles.value[23]
]);
const gridArticles = computed(() => [
  articles.value[50],
  articles.value[51],
  articles.value[52],
  articles.value[53],
  articles.value[54]
]);

const latestArticles = computed(() => [
  articles.value[70],
  articles.value[71],
  articles.value[72],
  articles.value[73],
  articles.value[74],
  articles.value[75],
  articles.value[76],
  articles.value[77],
  articles.value[78],
  articles.value[79],
  articles.value[80]
]);

const mostSeenArticles = computed(() => [
  articles.value[85],
  articles.value[86],
  articles.value[87],
  articles.value[88]
]);
</script>

<template>
  <article class="max-w-screen-xl mx-auto py-10 px-5 grid lg:grid-cols-5">
    <section class="relative max-w-full h-auto mb-6 lg:mb-0 lg:col-span-3">
      <NewsFeaturedItem
          :id="featuredArticle?.id"
          :author="featuredArticle?.author"
          :title="featuredArticle?.title"
          :description="featuredArticle?.description"
          :url-to-image="featuredArticle?.urlToImage" />
    </section>
    <section class="lg:col-span-2">
      <ul class="flex flex-col justify-between h-full lg:px-5 gap-6">
        <NewsListItem v-for="item in listArticles"
                      :key="item?.id"
                      :id="item?.id"
                      :title="item?.title"
                      :url-to-image="item?.urlToImage"
                      :published-at="item?.publishedAt" />
      </ul>
    </section>
  </article>

  <section class="max-w-screen-xl mx-auto py-10 px-5">
    <h2 class="text-gunmetal text-5xl font-bold mb-8">Top Stories</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      <NewsGridItem v-for="item in gridArticles"
                    :key="item?.id"
                    :id="item?.id"
                    :author="item?.author"
                    :title="item?.title"
                    :url-to-image="item?.urlToImage"
                    :published-at="item?.publishedAt" />
    </ul>
  </section>

  <article class="max-w-screen-xl mx-auto py-10 px-10 lg:px-5 grid grid-cols-1 md:grid-cols-8">
    <section class="md:col-span-5 mb-10">
      <h2 class="text-gunmetal text-5xl font-bold mb-8">Laatste voetbalnieuws</h2>
      <ul class="">
        <NewsLatestItem v-for="item in latestArticles"
                        :key="item?.id"
                        :id="item?.id"
                        :title="item?.title"
                        :published-at="item?.publishedAt" />
      </ul>
    </section>
    <section class="md:col-span-3 h-full">
      <h2 class="text-gunmetal text-5xl font-bold mb-8">Populair op Footy</h2>
      <ul class="flex flex-col gap-5 p-5 border-solid border border-silver">
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