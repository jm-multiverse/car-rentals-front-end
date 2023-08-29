import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faGlobe, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faLocationArrow} className='pe-3' />
          Car Rentals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faGlobe} className='pe-2' />
              English
            </Nav.Link>
            <Nav.Link href="#link">Trips</Nav.Link>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Call</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Email
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Chat</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                FAQs
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#sign-in">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;