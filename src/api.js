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
			throw err;
		});
};

const getComments = (article_id) => {
	let endpoint = `/articles/${article_id}/comments`;
	return api.get(endpoint).then(({ data }) => {
		return data.comments;
	});
};

const patchArticleVotes = (article_id, inc_votes) => {
	let endpoint = `/articles/${article_id}`;
	return api.patch(endpoint, { inc_votes }).then(({ data: { article } }) => {
		return article;
	});
};

const postNewComment = (article_id,{body}) => {
	let endpoint = `/articles/${article_id}/comments`;
	return api.post(endpoint, { username: "jessjelly", body }).then(({ data: { comment } }) => {
		return comment;
	});
};

export { getArticles, getComments, patchArticleVotes, postNewComment };
