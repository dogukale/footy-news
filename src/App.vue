<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, computed, watch } from "vue";

import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

const router = useRouter();
const store = useStore();

const error = ref(null);

async function isLoggedIn() {
  try {
    await store.dispatch("auth/tryLogin");
  } catch (err) {
    error.value = err.message;
  }
}

isLoggedIn();

const didAutoLogout = computed(() => store.getters["auth/didAutoLogout"]);

watch(didAutoLogout, (curValue, oldValue) => {
  if (curValue && curValue !== oldValue) {
    router.replace("/news");
  }
});
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>