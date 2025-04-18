import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { getArticles } from "../api";
import SingleArticleCard from "./SingleArticleCard";
import Comments from "./Comments";

export default function SingleArticle() {
	const [article, setArticle] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const { article_id } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getArticles(article_id)
			.then((article) => {
				setArticle(article);
			})
			.catch((err) => {
				throw err;
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [article_id]);

	if (isLoading) return <Loading />;

	return (
		<div className="button-container">
			<Button id="articles-button" href="/articles">
				Return to All Articles
			</Button>
			<Container className="card-container">
				<SingleArticleCard article={article} />
			</Container>
			<br />
			<Comments />
			<br />
		</div>
	);
}
