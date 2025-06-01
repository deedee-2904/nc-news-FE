import Lottie from "lottie-react";
import loading from "../assets/loading.json";
import "./Loading.css";

export default function Loading() {
	return (
		<>
			<Lottie animationData={loading} loop={true} aria-label="Loading animation"/>
			<p id="loading-text">Loading please wait...</p>
		</>
	);
}
