"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../inicio/Inicio.css";
import { CButton } from "@coreui/react";

const Section3 = () => {
  return (
<Row
        id="section2"
        className="justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "pink",
          padding: "10px",
        }}
      >
        <Col className="text-center">
          <h2>Section Two</h2>
          <p>
            ReactJS is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. It is an open-source, component-based
            front-end library that is responsible only for the view layer of the
            application.
          </p>
          <br/>
              <div className="d-grid gap-2 col-2 mx-auto">
                <CButton color="primary" size="lg">Ve mi trabajo !!!</CButton>
              </div>
        </Col>
      </Row>
  )
}

export default Section3
