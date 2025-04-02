import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-0nn8.onrender.com/api" });

const getArticles = (article_id) => {
	let endpoint = "/articles";
	if (article_id) endpoint += `/${article_id}`;
	return api
		.get(endpoint)
		.then(({ data }) => {
			if (article_id) {
				return data.article;
			}
			return data.articles;
		})
		.catch((err) => {
			throw err
		});
};


export { getArticles };
