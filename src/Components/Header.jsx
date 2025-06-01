import "./Header.css";

export default function Header() {
	return (
		<header>
			<img className="site-logo" src="/logo.png" alt="Been There, News That! logo" />
			<div className="title-and-slogan">
				<h1>Been There, News That!</h1>
				<p>Never be in the unknown again!</p>
			</div>
		</header>
	);
}
