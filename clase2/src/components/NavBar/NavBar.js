import { Navbar, NavbarBrand } from "react-bootstrap/";
import { Container } from "react-bootstrap/";
import { Nav } from "react-bootstrap/";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";

function NavBar(params) {
  const { totalCantidad } = useCartContext();

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
            <NavLink className="navbar-text text-light" to="/carrito">
              <div className="row">
                <div className="col">
                  <p>{totalCantidad ? totalCantidad : null}</p>
                </div>
                <div className="col">
                  <CartWidget />
                </div>
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
