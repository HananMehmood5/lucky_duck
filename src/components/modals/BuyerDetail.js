import React from "react";
import Modal from "react-bootstrap/Modal";
import { CUInput, CUButton } from "../common/common";
const InfoItem = ({ title, info }) => {
  return (
    <div className="d-flex justify-content-between">
      <style type="text/css">
        {`
                    h5{
                        font-family: 'Inter';
                        font-size:14px;
                        font-weight: 400;
                        line-height: 17px;
                        font-style: normal;
                        margin-bottom:6px;
                    }
                `}
      </style>
      <h5 style={{ color: "#8C90B7" }}>{title}</h5>
      <h5 style={{ color: "white" }}>{info}</h5>
    </div>
  );
};
const BuyerDetail = ({
  show,
  handleClose,
  name,
  waddress,
  contributed,
  totaljoined,
  chain,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdropClassName="blur-back"
      dialogClassName="register-pools"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Buyer Details</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InfoItem title="Buyer Name" info="John Smith" />
        <div id="divider"></div>
        <InfoItem title="Wallet Address" info="0xc83747288d7724422" />
        <div id="divider"></div>
        <InfoItem title="Total contributed" info="$1000" />
        <div id="divider"></div>
        <InfoItem title="Total Contributed" info="120" />
        <div id="divider"></div>
        <InfoItem title="Total Pools Joined" info="John Smith" />
        <div id="divider"></div>
        <InfoItem title="Joined date" info="12/10/2022" />
        <div id="divider"></div>
        <InfoItem title="Chain" info="Polygon" />
      </Modal.Body>
    </Modal>
  );
};

export default BuyerDetail;
