export default {
	setNews(state, payload) {
		state.news = payload;
	},
	setFetchTimestamp(state) {
		state.lastFetch = new Date().getTime();
	}
};