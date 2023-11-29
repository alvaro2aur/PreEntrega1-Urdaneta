import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CardWidget from '../CardWidget/CardWidget';


const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Geumil perfumes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Women</Nav.Link>
            <Nav.Link href="#action1">Man</Nav.Link>
            <Nav.Link href="#action2">Kids</Nav.Link>
            <NavDropdown title="Fragrances" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Floral</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Wood</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Spring</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
 
export default NavBar;
