import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div className="navtes">
      <Navbar
        // style={{ backgroundColor: "#fff" }}
        expand="lg"
        fixed="top"
        className="navbar"
      >
        <div className="d-flex flex-column align-items-center">
          <div>
            <Navbar.Brand className="fs-1 fw-bold" href="/">
              Tugas II4031
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Brand className="fs-5" href="/">
              By Josua and Ceavin
            </Navbar.Brand>
          </div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
            <NavDropdown
              className="nav-link1"
              title="Ciphers"
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item as={NavLink} to="/vignere">
                Vigenere Cipher
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/extended-vignere">
                Extended Vigenere Cipher
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/playfair">
                Playfair Cipher
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product">
                Product Cipher
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/affine">
                Affine Cipher
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/autokey-vigenere">
                Autokey Vigenere Cipher
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
