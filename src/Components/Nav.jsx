import { Navbar, Nav } from "react-bootstrap";

export default function () {
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/articles">Articles</Nav.Link>
            </Nav>
		</Navbar>
	);
}
