import { Card } from "react-bootstrap";
import "./Articles.css";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
	return (
		<Link to={`/articles/${article.article_id}`} className="card-link">
			<Card className="article-card" >
				<Card.Img
					variant="top"
					src={article.article_img_url ? article.article_img_url : "src/assets/img_not_found"}
					alt="Article cover photo"
				/>
				<Card.Body>
					<Card.Title className="card-title">{article.title}</Card.Title>
					<Card.Text>Topic: {article.topic}</Card.Text>
					<Card.Text>Written by: {article.author}</Card.Text>
					<Card.Text>Votes: {article.votes}</Card.Text>
					<Card.Text>Comment Count: {article.comment_count}</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
}
