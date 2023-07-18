import React from "react";
import Modal from "react-bootstrap/Modal";
import "./ConnectWallet.scss";
const WalletBtn = ({ title, iconUrl, onClick }) => {
  return (
    <div className="wallet-btn">
      <div>
        <h3>{title}</h3>
      </div>
      <img src={iconUrl} />
    </div>
  );
};
const ConnectWallet = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="connect-wallet">
        <div id="triangle"></div>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Select Wallet</h3>
            {/* <a href="" id="btn-close">*</a> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WalletBtn
            title="MetaMask"
            iconUrl="assets/image/icons/MetaMask_Fox 1.png"
          />
          <WalletBtn title="Core" iconUrl="assets/image/icons/Core 1.png" />
          <WalletBtn
            title="Trust Wallet"
            iconUrl="assets/image/icons/TWT 1.png"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConnectWallet;
