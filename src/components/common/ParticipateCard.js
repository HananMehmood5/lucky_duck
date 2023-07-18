import React, { useState } from "react";
import "./ParticipateCard.scss";
import Carousel from "react-bootstrap/Carousel";
import { CUButton } from "./common";
import Participate from "../modals/Participate";

const ParticipateCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="participate-card">
      <Carousel variant="light">
        <Carousel.Item>
          <img className="d-block w-100" src={props.img} alt={props.title} />
          <Carousel.Caption>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.img} alt={props.title} />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.img} alt={props.title} />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="img-heading">
        <div className="justify-content-between d-flex" id="value">
          <h6>Category</h6>
          <h6 className="text-white">Pools</h6>
        </div>
        <div className="justify-content-between d-flex" id="value">
          <h6>Value pools</h6>
          <h6 className="text-white">
            $ {Math.floor(props.ticketValue / 1000)}K
          </h6>
        </div>
        <div className="justify-content-between d-flex" id="value">
          <h6>Total Prize</h6>
          <h6 className="text-white">$ 500</h6>
        </div>
        <div className="participate-btn">
          <CUButton
            className="text-center"
            onClick={handleShow}
            style={{ marginTop: 20, paddingtop: 10 }}
          >
            <span style={{ margin: "10px" }}>Participate Now</span>
          </CUButton>
        </div>
      </div>
      <Participate id={props.id} show={show} handleClose={handleClose} />
    </div>
  );
};

export default ParticipateCard;
