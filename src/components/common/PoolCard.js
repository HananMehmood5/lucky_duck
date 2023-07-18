import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { CUButton } from "./common";
import { Image } from "react-bootstrap";
import "./PoolCard.scss";

const PoolCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pool-card">
      <Carousel variant="light">
        <Carousel.Item>
          <img className="d-block w-100" src={props.img} alt={props.title} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.img} alt={props.title} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.img} alt={props.title} />
        </Carousel.Item>
      </Carousel>
      <div className="img-heading">
        <h3>{props.title}</h3>
        <div id="divider"></div>
        <div className="justify-content-between d-flex" id="value">
          <h6>Amount</h6>
          <h6 className="text-white">
            $ {Math.floor(props.ticketValue / 1000)}K
          </h6>
        </div>
        <div className="justify-content-between d-flex" id="value">
          <h6>Phone Number</h6>
          <h6 className="text-white">(239) 555-0108</h6>
        </div>
        <div className="pool-btn">
          <CUButton
            className="text-center"
            onClick={handleShow}
            style={{ marginTop: 20, paddingtop: 10 }}
          >
            <span style={{ margin: "10px" }}>Telegram</span>
            <div>
              <Image id="icon" src="/assets\image\icons\telegram.svg" />
            </div>
          </CUButton>
        </div>
      </div>
      {/* <Participate show={show} handleClose={handleClose} /> */}
    </div>
  );
};

export default PoolCard;
