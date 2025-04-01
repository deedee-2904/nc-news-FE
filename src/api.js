import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-0nn8.onrender.com/api" });

const getArticles = () => {
	let endpoint = "/articles";
	return api.get(endpoint)
    .then(({ data: { articles } }) => {
		return articles;
	});
};

export {getArticles}