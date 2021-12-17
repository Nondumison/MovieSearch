import React from "react";
import MoviesGrid from "./MoviesGrid";
import { Container, Row } from "react-bootstrap";

const Main = () => {
  return (
        
      
    <div className="container">
      <Row md={2} lg={5}>
        <MoviesGrid />
      </Row>
    </div>
     
     
  );
};

export default Main;
