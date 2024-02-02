"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../inicio/Inicio.css";
import { CButton } from "@coreui/react";

const Section1 = () => {
  return (
    <div>
        <Row
            id="homePage"
            className="wrapper justify-content-center align-items-center 
                       text-white"
            style={{ minHeight: "99vh" }}
          >
            <Col className="text-center">
              <h1 className="text-align: center; text2">
                Hola, Soy <span className="text1">Abraham Paucara.</span>
              </h1>
              <h1 className="text-align: center; text2">
                Soy un full-stack web developer.
              </h1>
              <br/>
              <div className="d-grid gap-2 col-2 mx-auto">
                <CButton color="primary" size="lg">Ve mi trabajo !!!</CButton>
              </div>
            </Col>
          </Row>   
    </div>
  )
}

export default Section1
