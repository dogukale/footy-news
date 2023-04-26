<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, computed } from "vue";

const store = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const formIsValid = ref(true);
const mode = ref("login");
const error = ref(null);
const isLoading = ref(false);

const submitButtonCaption = computed(() => {
  if (mode.value === "login") {
    return "Inloggen";
  } else {
    return "Registeren";
  }
});

const loginMode = computed(() => mode.value === "login");

function switchAuthMode() {
  if (mode.value === "login") {
    mode.value = "signup";
  } else {
    mode.value = "login";
  }
}

function handleError() {
  error.value = null;
}

async function submitForm() {
  formIsValid.value = true;
  if (
      email.value === "" ||
      !email.value.includes("@") ||
      password.value.length < 6
  ) {
    formIsValid.value = false;
    return;
  }

  isLoading.value = true;

  const actionPayload = {
    email: email.value,
    password: password.value
  };

  try {
    if (mode.value === "login") {
      await store.dispatch("auth/login", actionPayload);
    } else {
      await store.dispatch("auth/signup", actionPayload);
    }
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
      <h1 v-if="loginMode"
          class="text-gunmetal text-5xl mb-5">Inloggen</h1>
      <h1 v-else
          class="text-gunmetal text-5xl mb-5">Registreren</h1>
      <p v-if="loginMode"
         class="text-gunmetal text-3xl mb-8">Log in en profiteer van een eigen blog. Nog geen account?
        <span class="underline hover:cursor-pointer"
              @click="switchAuthMode">Maak er één aan.</span>
      </p>
      <p v-else
         class="text-gunmetal text-3xl mb-8">Maak een account aan en profiteer van je eigen blog. Al een acount?
        <span class="underline hover:cursor-pointer"
              @click="switchAuthMode">Log in.</span>
      </p>
      <base-dialog :show="!!error"
                   title="Er is een fout opgetreden"
                   @close="handleError">
        <p>{{ error }}</p>
      </base-dialog>
      <base-dialog :show="isLoading"
                   title="Je wordt ingelogd..."
                   fixed>
        <base-spinner></base-spinner>
      </base-dialog>
      <form @submit.prevent="submitForm">
        <div class="flex flex-col mb-8">
          <label class="text-gunmetal text-3xl"
                 for="email">E-mail</label>
          <input class="border-solid border border-silver py-2.5 px-5"
                 type="email"
                 id="email"
                 v-model.trim="email" />
        </div>
        <div class="flex flex-col mb-8">
          <label class="text-gunmetal text-3xl"
                 for="password">Wachtwoord</label>
          <input class="border-solid border border-silver py-2.5 px-5"
                 type="password"
                 id="password"
                 v-model.trim="password" />
        </div>
        <p v-if="!formIsValid"
           class="mb-5 text-red-500">Voer een geldig e-mailadres en wachtwoord in (moet minimaal 6 tekens lang
          zijn).</p>
        <base-button class="w-full text-center mb-5">{{ submitButtonCaption }}</base-button>
      </form>
    </section>
  </article>
</template>

