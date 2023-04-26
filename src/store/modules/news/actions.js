require('dotenv').config()

export default {
	async loadNews(context, payload) {
		if (!payload.forceRefresh && !context.getters.shouldUpdate) {
			return;
		}
		
		const response = await fetch(
			`https://footy-news-5b146-default-rtdb.europe-west1.firebasedatabase.app/news/api.json`
		);
		const responseData = await response.json();
		
		if (!response.ok) {
			throw new Error(responseData.message);
		}
		
		const articles = [];
		let id = 1;
		for (let key in responseData) {
			const article = {
				id: id,
				source: responseData[key].source,
				author: responseData[key].author || "Onbekend",
				title: responseData[key].title,
				description: responseData[key].description,
				content: responseData[key].content,
				url: responseData[key].url,
				urlToImage: responseData[key].urlToImage,
				publishedAt: responseData[key].publishedAt
			};
			articles.push(article);
			id++;
		}
		
		context.commit("setNews", articles);
		context.commit('setFetchTimestamp');
	},
	
	async saveNews() {
		const articles = [];
		
		// Fetch data from News API
		const responseApi = await fetch(
			`https://newsapi.org/v2/everything?q=football&language=nl&apiKey=${process.env.NEWSAPI_KEY}`
		);
		const responseDataApi = await responseApi.json();
		const news = responseDataApi.articles;
		
		if (!responseApi.ok) {
			throw new Error(responseDataApi.message);
		}
		
		let id = 1;
		for (const key in news) {
			const article = {
				id: id,
				source: news[key].source.name,
				author: news[key].author,
				title: news[key].title,
				description: news[key].description,
				content: news[key].content,
				url: news[key].url,
				urlToImage: news[key].urlToImage,
				publishedAt: news[key].publishedAt
			};
			articles.push(article);
			id++;
		}
		
		// Put data to Firebase database
		const responseDB = await fetch(
			`https://footy-news-5b146-default-rtdb.europe-west1.firebasedatabase.app/news/api.json`,
			{
				method: "PUT",
				body: JSON.stringify(articles)
			}
		);
		const responseDataDB = await responseDB.json();
		
		if (!responseDB.ok) {
			throw new Error(responseDataDB.message);
		}
	}
};