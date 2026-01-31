import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
    const { count } = useSelector( state => state.counterSlice )
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink className={( { isActive } ) => isActive ? 'nav-link text-danger ' : 'nav-link'} to="/">Home</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? 'nav-link text-danger ' : 'nav-link'} to="/products">Products ({count})</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? 'nav-link text-danger ' : 'nav-link'} to="/counter">Counter</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
