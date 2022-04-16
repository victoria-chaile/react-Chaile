import { Navbar, Container, Nav } from "react-bootstrap/";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(params) {
  const { totalQuantity } = useCartContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className="navbar-text text-light" to="/">
          <Navbar.Brand>Black and White</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="navbar-text text-light" to="/category/mochilas">
              <button type="button" className="btn btn-light">
                Mochilas
              </button>
            </NavLink>
            <NavLink
              className="navbar-text text-light"
              to="/category/billeteras"
            >
              <button type="button" className="btn btn-light">
                Billeteras
              </button>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className="navbar-text text-light" to="/carrito">
              <div className="row">
                {totalQuantity ? (
                  <div className="col">
                    <button type="button" className="btn btn-danger">
                      {totalQuantity}
                    </button>
                  </div>
                ) : null}

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
