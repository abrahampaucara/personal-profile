"use client";
import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Menu = () => {
  console.log("Menu");
  return (
    <div>
      <Navbar expand="lg" className="bg-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SoftBytes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">News Letter</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Code in GitHub
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Video Demo
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
