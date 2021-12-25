import CartWidget from './CartWidget'

import {Navbar} from 'reactstrap'
import {Nav} from 'reactstrap'
import {NavDropdown} from 'react-bootstrap'
import { Container } from 'reactstrap'
import logo from '../NavBar/logo.png'
import { Link } from "react-router-dom";



const NavBar =() => {
return (
<>
  <Navbar collapseOnSelect expand="lg">

    <Container>

      <Link to="/">
      <Navbar.Brand>
        <img src={logo} className="logo" alt= "logo " />
      </Navbar.Brand>
      </Link>


      <Navbar.Toggle aria-controls="responsive-navbar-nav" style= {{backgroundColor: "white"}} />
      <Navbar.Collapse id="responsive-navbar-nav" style= {{backgroundColor: "rgb(14, 14, 14)", borderRadius: "10px", zIndex: "10"}} >
        <Nav className="me-auto" >

          <Nav.Link to="/" className="nav-link"> Home</Nav.Link>

          <Nav.Link to="/#nosotros" className="nav-link"> Nosotros</Nav.Link>

          
      
          
          <NavDropdown.Item>
              <Link to="/#conjuntoIconos" className="categorias">
              PC COMPLETA
              </Link>
            </NavDropdown.Item>
  
            <NavDropdown.Item>
              <Link to="/categoria/gabinete/#conjuntoIconos" className="categorias">
              GABINETE
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
            <Link to="/categoria/monitores/#conjuntoIconos" className="categorias">
              MONITORES
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
            <Link to="/categoria/accesorios/#conjuntoIconos" className="categorias">
              ACCESORIOS
              </Link>
            </NavDropdown.Item>
          
       
        </Nav>
        <Nav>
          <Nav.Link href="cart">
          <Link to="/cart">
            <CartWidget />
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

</>

)}

export default NavBar