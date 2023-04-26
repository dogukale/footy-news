import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", name: "home", redirect: "/news" },
		{ path: "/news", name: "news", component: () => import("../views/news/NewsList.vue") },
		{ path: "/news/:id", name: "detail", component: () => import("../views/news/NewsDetail.vue"), props: true },
		{ path: "/favorites", name: "favorites", component: () => import("../views/favorites/FavoritesList.vue") },
		{
			path: "/favorites/register",
			name: "register",
			component: () => import("../views/favorites/FavoritesAdd.vue")
		},
		{ path: "/auth", name: "auth", component: () => import("../views/auth/UserAuth.vue") }
	],
	linkActiveClass: "active"
});

export default router;
