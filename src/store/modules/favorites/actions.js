export default {
	async registerArticle(context, data) {
		const userId = context.rootGetters["auth/userId"];
		const userEmail = context.rootGetters["auth/userEmail"];
		const token = context.rootGetters["auth/token"];
		const newsLength = context.rootGetters["news/getNews"].length;
		const favoritesLength = context.getters.favorites.length;

		const favorite = { ...data, id: ((newsLength + favoritesLength) + 1), email: userEmail };

		const response = await fetch(
			`https://footy-news-5b146-default-rtdb.europe-west1.firebasedatabase.app/news/favorites/${userId}.json?auth=${token}`, {
				method: "POST",
				body: JSON.stringify(favorite)
			}
		);

		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message);
		}
	},
	async loadArticles(context) {
		const userId = context.rootGetters["auth/userId"];
		const token = context.rootGetters["auth/token"];
		const response = await fetch(
			`https://footy-news-5b146-default-rtdb.europe-west1.firebasedatabase.app/news/favorites/${userId}.json?auth=` + token
		);
		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message);
		}
		
		const favorites = [];

		for (const key in responseData) {
			const favorite = {
				id: responseData[key].id,
				author: responseData[key].email.substring(0, responseData[key].email.indexOf("@")),
				userId: userId,
				title: responseData[key].title,
				description: responseData[key].description,
				content: responseData[key].content,
				urlToImage: responseData[key].urlToImage,
				publishedAt: responseData[key].publishedAt
			};
			favorites.push(favorite);
		}

		context.commit("setFavorites", favorites);
	}
};
