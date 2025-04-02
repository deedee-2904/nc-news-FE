import { Card, Container } from "react-bootstrap";

export default function CommentCard({ comment }) {
	return (
		<Container className="comment-card">
			<Card>
				<Card.Header>{comment.author}<br/>{new Date(comment.created_at).toLocaleString()}</Card.Header>
                <Card.Body>
                    <blockquote><p>{comment.body}</p></blockquote>
                </Card.Body>
                <Card.Body>Votes: {comment.votes}</Card.Body>
			</Card>
		</Container>
	);
}
