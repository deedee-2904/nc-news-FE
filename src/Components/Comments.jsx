import { useEffect, useState } from "react";
import { getComments } from "../api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Accordion, Card, Container } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap";
import CommentCard from "./CommentsCard";
import "./Comments.css";

export default function Comments() {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { article_id } = useParams();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getComments(article_id)
			.then((comments) => {
				setComments(comments);
				console.log(comments);
			})
			.catch((err) => {
				throw err;
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	function CustomToggle({ eventKey }) {
		const decoratedOnClick = useAccordionButton(eventKey, () => setIsOpen((res) => !res));
		return (
			<button type="button" style={{ backgroundColor: "purple" }} onClick={decoratedOnClick}>
				{isOpen ? "Hide Comments" : "View Comments"}
			</button>
		);
	}

	if (isLoading) return <Loading />;

	return (
		<Container>
			<Accordion>
				<Card>
					<Card.Header>
						<CustomToggle eventKey="0">View All Comments</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							{comments.length > 0 ? (
								comments.map((comment) => (
									<CommentCard key={comment.comment_id} comment={comment} />
								))
							) : (
								<p>No comments yet...</p>
							)}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Container>
	);
}
