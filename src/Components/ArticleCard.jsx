import { Card } from "react-bootstrap";
import "./Articles.css";

export default function ArticleCard({ article }) {
	return (
		<Card className="article-card" style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={article.article_img_url ? article.article_img_url : "src/assets/img_not_found"} alt="Article cover photo"
			/>
			<Card.Body>
				<Card.Title>{article.title}</Card.Title>
				<Card.Text>Topic: {article.topic}</Card.Text>
				<Card.Text>Written by: {article.author}</Card.Text>
				<Card.Text>Votes: {article.votes}</Card.Text>
				<Card.Text>Comment Count: {article.comment_count}</Card.Text>
			</Card.Body>
		</Card>
	);
}
