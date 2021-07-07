import React from "react";
import "./_homeScreen.scss";

import { Container, Row, Col } from "react-bootstrap";

import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/Video";

function homeScreen() {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map((element, index) => (
          <Col lg={3} md={4} key={index}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default homeScreen;
