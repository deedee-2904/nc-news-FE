import Lottie from "lottie-react";
import spinningWorld from "../assets/spiningWorld.json";
import "../Home.css";

export default function Home() {
	return (
		<>
			<h2> Welcome to the Most* Reliable News Source Out There!</h2>
			<h6 id="note">*Please Note: The articles on this site are NOT moderated!</h6>
			<div className="animation-container">
				<Lottie className="spinning-world" animationData={spinningWorld} loop={true} />
			</div>
		</>
	);
}
