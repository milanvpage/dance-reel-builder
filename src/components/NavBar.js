import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
export default function NavBar() {
    return (
<>
<Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/">Home</NavLink>
                -
                <NavLink to="/commercial">Commercial</NavLink>
                -
                <NavLink to="/theater">Theater</NavLink>
                -
                <NavLink to="/concert">Concert</NavLink>
                
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
</>
    )
}
