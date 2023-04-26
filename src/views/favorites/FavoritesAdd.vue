<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, computed } from "vue";

const store = useStore();
const router = useRouter();

const title = ref("");
const description = ref("");
const content = ref("");
const url = ref("");
const formIsValid = ref(true);
const error = ref(null);
const isLoading = ref(false);

function handleError() {
  error.value = null;
}

async function submitForm() {
  formIsValid.value = true;
  isLoading.value = true;

  const actionPayload = {
    title: title.value,
    description: description.value,
    content: content.value,
    urlToImage: url.value,
    publishedAt: new Date().getTime()
  };

  try {
    await store.dispatch("favorites/registerArticle", actionPayload);
    router.replace("/favorites");
  } catch (err) {
    error.value = err.message || "Failed to authenticate, try later.";
  }

  isLoading.value = false;
}

</script>

<template>
  <article class="max-w-screen-xl mx-auto py-10 px-5 h-auto grid place-items-center">
    <section class="flex flex-col justify-center w-4/5 md:w-3/5 lg:w-2/5">
      <h1 class="text-gunmetal text-5xl mb-5">Een nieuwe artikel</h1>
      <p class="text-gunmetal text-3xl mb-8">Voeg een nieuwe artikel toe aan je favoriete lijst.</p>
      <base-dialog :show="!!error"
                   title="An error occured"
                   @close="handleError">
        <p>{{ error }}</p>
      </base-dialog>
      <base-dialog :show="isLoading"
                   title="Artikel aan het toevoegen..."
                   fixed>
        <base-spinner></base-spinner>
      </base-dialog>
      <form @submit.prevent="submitForm">
        <div class="flex flex-col mb-8">
          <label class="text-gunmetal text-3xl"
                 for="title">Titel</label>
          <input class="border-solid border border-silver py-2.5 px-5"
                 type="text"
                 id="title"
                 v-model.trim="title" />
        </div>
        <div class="flex flex-col mb-8">
          <label class="text-gunmetal text-3xl"
                 for="description">Beschrijving</label>
          <input class="border-solid border border-silver py-2.5 px-5"
                 type="text"
                 id="description"
                 v-model.trim="description" />
        </div>
        <div class="flex flex-col mb-8">
          <label class="text-gunmetal text-3xl"
                 for="content">Content</label>
          <textarea class="border-solid border border-silver py-2.5 px-5"
                    rows="5"
                    id="content"
                    v-model.trim="content" />
        </div>
        <div class="flex flex-col mb-8">
          <label class="text-gunmetal text-3xl"
                 for="url">Afbeelding (URL)</label>
          <input class="border-solid border border-silver py-2.5 px-5"
                 type="url"
                 id="url"
                 v-model.trim="url" />
        </div>
        <p v-if="!formIsValid"
           class="mb-5 text-red-500">Voer een geldig e-mailadres en wachtwoord in (moet minimaal 6 tekens lang
          zijn).</p>
        <base-button class="w-full text-center mb-5">Nieuws toevoegen</base-button>
      </form>
    </section>
  </article>
</template>
