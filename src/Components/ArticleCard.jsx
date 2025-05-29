import { Card } from "react-bootstrap";
import "./Articles.css";
import { Link } from "react-router-dom";
import { PencilFill } from "react-bootstrap-icons";
import { HandThumbsUpFill } from "react-bootstrap-icons";
import { ChatLeftTextFill } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";

export default function ArticleCard({ article }) {
	return (
		<Link
			to={`/articles/${article.article_id}`}
			className="card-link"
			aria-label={`${article.title}`}
		>
			<Card className="article-card">
				<Card.Img
					variant="top"
					src={article.article_img_url ? article.article_img_url : "src/assets/img_not_found"}
					alt={`Thumbnail for ${article.title}`}
				/>
				<Card.Body>
					<Card.Title className="card-title">{article.title}</Card.Title>
					<Card.Text>
						<List size={25} /> Topic: {article.topic}
					</Card.Text>
					<Card.Text>
						<PencilFill size={25} /> Written by: {article.author}
					</Card.Text>
					<div className="container">
						<Card.Text>
							<HandThumbsUpFill size={25} /> {article.votes} 
						</Card.Text>
						<Card.Text>
							<ChatLeftTextFill size={25} /> {article.comment_count}
						</Card.Text>
					</div>
				</Card.Body>
			</Card>
		</Link>
	);
}
