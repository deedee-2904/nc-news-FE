import { useState } from "react";
import { Button } from "react-bootstrap";
import { patchArticleVotes } from "../api";
import Error from "./Error";

export default function Votes({ article_id, votes }) {
	const [likes, setLikes] = useState(votes);
	const [error, setError] = useState(null);

	function handleVote(inc_votes) {
        setError(null)
		setLikes((likes) => {
			const updatedLikes = likes + inc_votes;
			patchArticleVotes(article_id, inc_votes).catch((err) => {
				setLikes(updatedLikes - inc_votes);
				setError(err);
			});
			return updatedLikes;
		});
	}

	return (
		<>
			{error ? <Error message={error.message} />:<></>}
			<Button onClick={() => handleVote(1)}>👍</Button> {likes}{" "}
			<Button onClick={() => handleVote(-1)}>👎</Button>
		</>
	);
}
