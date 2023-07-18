import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Buyer.scss";
import Arrow from "../../images/arrow.svg";
import CopyIcon from "../../images/copy.svg";
import LinkIcon from "../../images/link.svg";
import LineIcon from "../../images/line.svg";
import { CUButton } from "./common";
import { Row, Col, Button } from "react-bootstrap";
import BuyerDetail from "../modals/BuyerDetail";
const Buyer = (props) => {
  const {
    wallet,
    portfolio,
    participate,
    amount,
    type,
    cash,
    date,
    WalletIcon,
    PortfolioIcon,
  } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/users");
  };

  return (
    <div className="buyer-wrapper m-2 p-3 d-flex table-header">
      <Col md={3} lg={3} xl={3} className="d-flex">
        <img src={WalletIcon} />
        <div className="descrition px-3 d-grid">
          <div>{wallet}</div>
          <div>{type}</div>
        </div>
        <div className="d-flex align-items-center">
          <img className="mx-1" src={LinkIcon} />
          <img className="mx-1" src={LineIcon} />
          <img className="mx-1" src={CopyIcon} />
        </div>
      </Col>
      <Col md={2} lg={2} xl={2} className="disp-show">
        <div className="d-flex">
          <img src={PortfolioIcon} />
          <div className="descrition px-3 d-grid">
            <div>{portfolio}</div>
            <div>{cash}</div>
          </div>
        </div>
      </Col>
      <Col md={2} lg={2} xl={2} className=" disp-show">
        {date}
      </Col>
      <Col md={2} lg={2} xl={2} className=" disp-show">
        {participate.map((value, index) => (
          <img className="participate" src={value} />
        ))}
      </Col>
      <Col md={2} lg={2} xl={2} className=" disp-show">
        $ {amount}
      </Col>
      <Col
        xs={4}
        md={2}
        lg={1}
        xl={1}
        className="disp-btn d-flex justify-content-center"
        onClick={handleShow}
      >
        {/* <div className='btn'>View More<img src={Arrow} /></div> */}
        <CUButton
          onClick={handleButtonClick}
          style={{ width: "100%", padding: "5px", paddingLeft: "5px" }}
        >
          View More
          <img src={Arrow} />
        </CUButton>
      </Col>
      <BuyerDetail show={show} handleClose={handleClose} />
    </div>
  );
};

export default Buyer;
