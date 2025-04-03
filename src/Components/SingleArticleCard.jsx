import { Card } from "react-bootstrap";
import "./Articles.css";
import Votes from "./Votes";

export default function SingleArticleCard({ article }) {
	return (
		<Card className="single-article-card" style={{ width: "40rem" }}>
			<Card.Img
				variant="top"
				src={article.article_img_url ? article.article_img_url : "src/assets/img_not_found"}
				alt="Article cover photo"
			/>
			<Card.Body>
				<Card.Title>{article.title}</Card.Title>
				<Card.Text>Topic: {article.topic}</Card.Text>
				<Card.Text>Written by: {article.author}</Card.Text>
				<Card.Text>
					Published on: {new Date(article.created_at).toLocaleDateString("en-GB")}
				</Card.Text>
				<Card.Text id="article-body">{article.body}</Card.Text>
				<Card.Text id="article-votes">
					<Votes votes={article.votes} article_id={article.article_id}/>
				</Card.Text>
				<Card.Text>Comment Count: {article.comment_count}</Card.Text>
			</Card.Body>
		</Card>
	);
}
