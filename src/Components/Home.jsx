import React from "react";
import Lottie from "lottie-react";
import spinningWorld from "../assets/spiningWorld.json";
import "../Home.css";

export default function Home() {
	return (
		<>
			<h2>Welcome to NC News</h2>
			<Lottie className="spinning-world" animationData={spinningWorld} loop={true} />
		</>
	);
}
