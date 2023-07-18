import React, { useState } from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "./Settings.scss";
import { Instagram, Discord, Twitter } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import orange from "../../images/orange.svg";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [instagram, setInstagrm] = useState("");
  const [discord, setDiscord] = useState("");
  const [twitter, setTwitter] = useState("");
  return (
    <div>
      <div className="background">
        <Row className="pt-5">
          <Col md={{ span: 1, offset: 2 }} xs={{ span: 8, offset: 2 }}>
            <p className="title">Settings</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 8, offset: 2 }}
            sm={{ span: 8, offset: 2 }}
            md={{ span: 8, offset: 2 }}
          >
            <Card className="card p-5">
              <Image className="set-img" src={orange} />
              <p id="hex" className="mt-4 mb-0">
                0x5dfe66d4C
              </p>
              <p id="space" className="mt-1">
                coderspace
              </p>
              <Row>
                <Col lg={{ span: 6 }}>
                  <p
                    style={{
                      color: "white",
                      borderBottom: "1px solid #3A3E61",
                      paddingBottom: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    Personal Informaion
                  </p>
                  <InputGroup className="mb-3">
                    {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                    <Form.Control
                      placeholder="Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className="input"
                      defaultValue={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                    <Form.Control
                      placeholder="Email"
                      aria-label="Username"
                      defaultValue={email}
                      aria-describedby="basic-addon1"
                      className="input"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                    <Form.Control
                      placeholder="Country"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      defaultValue={country}
                      className="input"
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Col>
                <Col lg={{ span: 6 }}>
                  <p
                    style={{
                      color: "white",
                      borderBottom: "1px solid #3A3E61",
                      paddingBottom: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    Social Media
                  </p>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <Instagram />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Instagram"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      defaultValue={instagram}
                      className="input no-left-border"
                      onChange={(e) => {
                        setInstagrm(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <Discord />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Discord"
                      defaultValue={discord}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className="input no-left-border"
                      onChange={(e) => {
                        setDiscord(e.target.value);
                      }}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <Twitter />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Twitter"
                      defaultValue={twitter}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className="input no-left-border"
                      onChange={(e) => {
                        setTwitter(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <div className="justify-content-center align-items-center">
                <Col
                  style={{ borderBottom: "1px solid #3A3E61", width: "100%" }}
                ></Col>
                .
                <Col className="btns d-flex justify-content-end">
                  <Button id="cancel" variant="outline-secondary">
                    Cancel
                  </Button>
                  <Button id="Save" variant="orange" type="submit">
                    Save
                  </Button>
                </Col>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Settings;
