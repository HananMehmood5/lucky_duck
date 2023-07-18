import React from "react";
import { Row, Col } from "react-bootstrap";
import Article from "../common/Article.js";

const Faq = () => {
  let title = "Accordion Item #1";
  let content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div>
      <div className="background">
        <Row className="pt-5">
          <Col
            md={{ span: 10, offset: 2 }}
            sm={{ span: 10, offset: 2 }}
            xs={{ span: 10, offset: 2 }}
          >
            <p className="title mx-2">FAQ</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 8, offset: 2 }}
            sm={{ span: 8, offset: 2 }}
            md={{ span: 8, offset: 2 }}
          >
            <Article title={title} content={content} />
            <Article title={title} content={content} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Faq;
