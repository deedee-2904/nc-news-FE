import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";
import "./Articles.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getArticles()
			.then((articles) => {
				console.log(articles, "<<<from inside then");
				setArticles(articles);
				console.log(articles, "<<<after set");
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (isLoading) return <Loading />;

	return (
		<Container className="text-center">
			<h2 className="mt-4">All Articles</h2>
			<Row xs={1} md={2} className="justify-content-center">
				{articles.map((article) => (
					<Col className="d-flex justify-content-center" key={article.article_id}>
						<ArticleCard article={article}/>
					</Col>
				))}
			</Row>
		</Container>
	);
}
