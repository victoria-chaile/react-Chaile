import { Navbar, NavbarBrand } from "react-bootstrap/";
import { Container } from "react-bootstrap/";
import { NavDropdown } from "react-bootstrap/";
import { Nav } from "react-bootstrap/";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar(params) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className="navbar-text text-light" to="/">
          <Navbar.Brand>Black and White</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className="navbar-text text-light"
              to="/categoria/mochilas"
            >
              <p className="navbar-text text-light">Mochilas &nbsp;</p>
            </NavLink>
            <NavLink
              className="navbar-text text-light"
              to="/categoria/billeteras"
            >
              <p className="navbar-text text-light">Billeteras</p>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className="navbar-text text-light" to="/contacto">
              <p>Contacto &nbsp;</p>
            </NavLink>
            <NavLink className="navbar-text text-light" to="/carrito">
              <p>Carrito</p>
            </NavLink>
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
