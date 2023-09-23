import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const NavbarC = () => {
  return (
    <Navbar expand="lg" className="colornav">
      <Container fluid>
        <Navbar.Brand href="/">TANGO y SABORES</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/reservas" className={'nav-link'}>Reservas</NavLink>
            <NavLink to="/gallery"className={'nav-link'}>Galeria</NavLink>
            <NavLink to="/menu"className={'nav-link'}>Carta</NavLink>
            <NavLink to="/contact"className={'nav-link'}>Contacto</NavLink>
            <NavLink to="/about"className={'nav-link'}>Nosotros</NavLink>
          </Nav>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <NavLink to="/login"className={'nav-link'}>Iniciar Sesion</NavLink>
            <NavLink to="/register"className={'nav-link'}>Registrate</NavLink>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;