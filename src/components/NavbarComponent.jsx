import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg">
        {/* <Container> */}
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
            <NavLink className="nav-link" to="/vignere">
              Vigenere Cipher
            </NavLink>
            <NavLink className="nav-link" to="/extended-vignere">
              Extended Vignere Cipher
            </NavLink>
            <NavLink className="nav-link" to="/playfair">
              Playfair Cipher
            </NavLink>
            <NavLink className="nav-link" to="/product">
              Product Cipher
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
