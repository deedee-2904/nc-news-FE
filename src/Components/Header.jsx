import "./Header.css";

export default function Header() {
	return (
		<header>
			<img className="site-logo" src="/logo.png" alt="Been There, News That! logo" />
			<div className="title-and-slogan">
				<h1>Been There? News That!</h1>
				<p>Report any news no matter how big or small!</p>
			</div>
		</header>
	);
}
