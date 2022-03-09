import { Navbar } from 'react-bootstrap/'
import { Container } from 'react-bootstrap/'
import { NavDropdown } from 'react-bootstrap/'
import { Nav } from 'react-bootstrap/'

function NavBar(params) {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Moda Chic</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Pañuelos</Nav.Link>
            <Nav.Link href="#pricing">Sweater</Nav.Link>
            <NavDropdown title="Varios" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pantalones</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Camperas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
            
}

export default NavBar