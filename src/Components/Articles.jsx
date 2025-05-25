import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";
import "./Articles.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticles()
			.then((data) => {
				setArticles(data);
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
			<Row xs={1} md={2} lg={3} className="justify-content-center">
				{articles.map((article) => (
					<Col className="d-flex justify-content-center" key={article.article_id}>
						<ArticleCard article={article}/>
					</Col>
				))}
			</Row>
		</Container>
	);
}
