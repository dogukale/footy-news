export default {
	favorites(state, _, _2, rootGetters) {
		const userId = rootGetters["auth/userId"];
		return state.favorites.filter(req => req.userId === userId);
	},
	hasFavorites(_, getters) {
		return getters.favorites && getters.favorites.length > 0;
	}
};