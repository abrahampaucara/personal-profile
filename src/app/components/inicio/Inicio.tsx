"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Inicio.css";
import { CButton } from "@coreui/react";
import Section1 from "../seccion1/Section1";
import Section2 from "../seccion2/Section2";
import Section3 from "../seccion3/Section3";

const Inicio = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const buttonHoverStyle = {
    backgroundColor: "lightgreen",
    borderColor: "#007bff",
    border: "none",
    padding: "10px",
    display: "block",
    width: "max-width",
    margin: "auto",
    color: "white",
  };

  return (
    <Container fluid>
      <Section1 />
      <Section2/>
      <Section3/>
    </Container>
  );
};

export default Inicio;
