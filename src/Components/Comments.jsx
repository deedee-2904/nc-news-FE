import { useEffect, useState } from "react";
import { getComments, postNewComment } from "../api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Accordion, Button, Card, Container, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap";
import CommentCard from "./CommentsCard";
import "./Comments.css";
import Error from "./Error";

export default function Comments() {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { article_id } = useParams();
	const [isOpen, setIsOpen] = useState(false);
	const [comment, setComment] = useState("");
	const [isPosting, setIsPosting] = useState(false);
	const [error, setError] = useState(null);
	const [validated, setValidated] = useState(false);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getComments(article_id)
			.then((comments) => {
				setComments(comments);
			})
			.catch((err) => {
				setError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [article_id]);

	function CustomToggle({ eventKey }) {
		const decoratedOnClick = useAccordionButton(eventKey, () => setIsOpen((res) => !res));
		return (
			<button type="button" style={{ backgroundColor: "blue" }} onClick={decoratedOnClick}>
				{isOpen ? `Hide Comments (${comments.length})` : `View Comments (${comments.length})`}
			</button>
		);
	}

	function handleInputChange(e) {
		setComment(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setValidated(true);

		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
			return;
		}

		setIsPosting(true);
		
		postNewComment(article_id, { body: comment })
			.then((newComment) => {
				setComments((prev) => [newComment, ...prev]);
				setComment("");
				setError(null);
				setValidated(false);
				setShowModal(true);
				setTimeout(()=>{
					setShowModal(false)
				},3000)
			})
			.catch((err) => {
				console.log(err);
				setError(err);
			})
			.finally(() => {
				setIsPosting(false);
			});
	}

	if (isLoading) return <Loading />;

	return (
		<Container>
			<Accordion>
				<Card>
					<Card.Header>
						<CustomToggle eventKey="0">"View All Comments"</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							{error ? <Error message={error.message} /> : null}
							<Form noValidate validated={validated} onSubmit={handleSubmit} action="/#">
								<FloatingLabel label="Leave a new comment here!">
									<Form.Control
										as="textarea"
										placeholder="Leave a comment here"
										value={comment}
										onChange={handleInputChange}
										required
									/>
									<Form.Control.Feedback type="invalid">Please add a comment</Form.Control.Feedback>
								</FloatingLabel>

								<br />
								<Button type="submit" disabled={isPosting}>
									{isPosting ? "Posting..." : "Submit"}
								</Button>
							</Form>
							<Modal show={showModal} onHide={() => setShowModal(false)} centered>
								<Modal.Header closeButton>
									<Modal.Title>Success</Modal.Title>
								</Modal.Header>
								<Modal.Body>Your comment has been posted! 🎉</Modal.Body>
								<Modal.Footer>
									<Button variant="success" onClick={() => setShowModal(false)}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
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
