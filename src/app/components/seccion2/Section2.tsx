"use client";

import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../inicio/Inicio.css";
import { CButton, CNavbar, CContainer, CNavLink, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav } from "@coreui/react";


const Section2 = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Row
      id="section1"
      className="justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "lightblue",
        padding: "10px",
      }}
    >
      <CNavbar expand="lg" colorScheme="light" className="bg-light  ">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav component="nav">
              <CNavLink href="#" active>
                Home
              </CNavLink>
              <CNavLink href="#" className="text1">Features</CNavLink>
              <CNavLink href="#">Pricing</CNavLink>

            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </Row>
  );
};

export default Section2;
