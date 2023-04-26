<script setup>
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();
const router = useRouter();

function logout() {
    store.dispatch("auth/logout");
    router.replace("/news");
}

const isLoggedIn = computed(() => store.getters["auth/isAuthenticated"]);

function openNav() {
    let navList = document.querySelector("ul");
    let classList = navList.classList;
    classList.contains("hidden") ? classList.remove("hidden") : classList.add("hidden");
}
</script>

<template>
    <header class="bg-verdigris w-full">
        <nav class="md:flex justify-between place-items-center max-w-screen-xl mx-auto py-10 px-5">
            <div class="flex justify-between place-items-center w-full">
                <h1 class="text-white text-5xl font-bold transition hover:text-gunmetal">
                    <RouterLink to="/">Footy News</RouterLink>
                </h1>
                <font-awesome-icon class="icon cursor-pointer md:hidden text-white"
                                   icon="bars-staggered"
                                   size="xl"
                                   @click="openNav"/>
            </div>
            <ul class="hidden md:flex md:justify-end w-full mt-10 md:mt-0">
                <li class="mb-5 md:mb-0 md:mr-20 text-3xl text-white transition hover:text-gunmetal">
                    <RouterLink to="/">Net binnen</RouterLink>
                </li>
                <li class="mb-5 md:mb-0 md:mr-20 text-3xl text-white transition hover:text-gunmetal">
                    <RouterLink to="/news">Nieuws</RouterLink>
                </li>
                <li v-if="isLoggedIn"
                    class=" mb-5 md:mb-0 md:mr-20 text-3xl text-white transition hover:text-gunmetal">
                    <RouterLink to="/favorites">Mijn Footy</RouterLink>
                </li>
                <li v-if="!isLoggedIn"
                    class="text-white transition hover:cursor-pointer hover:text-gunmetal">
                    <RouterLink to="/auth">
                        <font-awesome-icon icon="user"/>
                    </RouterLink>
                </li>
                <li v-else
                    class="text-white transition hover:cursor-pointer hover:text-gunmetal">
                    <RouterLink to="/auth"
                                @click="logout">
                        <font-awesome-icon icon="arrow-right-from-bracket"/>
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
    <section class="bg-pale-spring-bud w-full">
        <p v-if="!isLoggedIn"
           class="text-center text-gunmetal p-3">
            <font-awesome-icon icon="user-check"
                               size="3xs"
                               class="pr-4"/>
            Maak een
            <router-link to="/auth"
                         class="underline">account
            </router-link>
            aan en creëer jouw eigen voetbalnieuws
        </p>
        <p v-else
           class="text-center text-gunmetal p-3">👋 Welkom! Voeg een
            <router-link to="/favorites/register"
                         class="underline">nieuwe artikel
            </router-link>
            toe aan je favoriete lijst.
        </p>
    </section>
</template>