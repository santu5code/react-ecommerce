import React from 'react'
import { Navbar,Container, Nav, NavDropdown,  } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../assets/ecommerce.svg'
import cart from '../assets/cart.png';
import { useCart } from './Cart';

const NavBar = () => {
    const items = useCart();
    return (
        <>
        <Navbar bg="light" collapseOnSelect expand="lg">
        <Container>
            
                    <Navbar.Brand as={Link} to="/" > 
                        <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"/><span className="logo-text ">E-Commerce</span>
                    </Navbar.Brand> 
                
                    <Navbar.Brand  as={Link}  to='/cart'><img src={cart} alt=" cart" /><span className="logo-text">({items.length})</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="#link">About Us</Nav.Link>
                            <NavDropdown  title="Products" id="collasible-nav-dropdown">
                                <NavDropdown.Item  as={Link} to="#action/3.1">Men</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#action/3.2">Women</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#action/3.3">Contact Us</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="#action/3.4">Cart</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    
               
                
                    
                
            
        </Container>
        </Navbar>
        </>
    )
}

export default NavBar
