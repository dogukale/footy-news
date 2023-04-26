import newsMutations from "./mutations";
import newsActions from "./actions";
import newsGetters from "./getters";

export default {
	namespaced: true,
	state() {
		return {
			lastFetch: null,
			news: [],
			favorites: []
		};
	},
	mutations: newsMutations,
	actions: newsActions,
	getters: newsGetters
};