import { createStore } from "vuex";

import newsModule from "./modules/news/index.js";
import authModule from "./modules/auth/index";
import favoritesModule from "./modules/favorites/index";

const store = createStore({
	modules: {
		news: newsModule,
		auth: authModule,
		favorites: favoritesModule
	}
});

export default store;