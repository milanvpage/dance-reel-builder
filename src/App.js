import './App.css';
// import React from 'react';

import React, { Component } from 'react'
import Pages from './components/pages/Pages';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'



export default class App extends Component {
  render() {
    return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/commercial">Commercial</NavLink>
        <NavLink to="/theater">Theater</NavLink>
        <NavLink to="/concert">Concert</NavLink>
        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Pages />
</div>
    )
  }
}

