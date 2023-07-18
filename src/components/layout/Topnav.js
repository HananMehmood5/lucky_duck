import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CUButton } from "../common/common.js";
import Image from "react-bootstrap/Image";
import ConnectWallet from "../modals/ConnectWallet.js";
import "./Topnav.scss";

import { ConnectButton } from "@rainbow-me/rainbowkit";
const Topnav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="topnav">
      <style type="text/css">
        {`
      #cus_navbar {
        background-color: #191C38 !important;
        color: white;
      }
      .nav-link{
        color:white !important;
        font-family: 'Inter' !important;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
      }
      .dropdown-toggle::after {
        border:0px;
        color:#85FF10;
      }
      .navbar-nav img{
        margin:auto;
        width:30px;
        margin-right:5px;
      }
      .user-profile .connect-btn{
        display:table;
        margin: auto;
        width:220px !important;
        height: 52px;
        background-color:#F16922;
        border-color:#F16922;
        border-radius: 10px;
        font-size: 14px;
        line-height: 17px;
      }
      .user-profile > .connect-btn span img {
        vertical-align: middle;
        display: table-cell;
        margin-right:10px;
      }
      .user-profile > .connect-btn  span{
        vertical-align: middle;
        display: table-cell;
      }
    `}
      </style>
      <Navbar
        id="cus_navbar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        {/* <Image id="logo_img" src='assets\image\logo.svg' /> */}
        <Container>
          {/* <Image id="logo_img" src={Logo} width="150px" />
           */}
          <Image
            id="logo_img"
            src={process.env.PUBLIC_URL + "assets/image/logo.svg"}
          />

          {/* <Navbar.Brand href="#home">R eact-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              <Nav.Link as={NavLink} to="/pools">
                Pools
              </Nav.Link>
              <Nav.Link as={NavLink} to="/prizepools">
                Prize Pools
              </Nav.Link>
              <Nav.Link as={NavLink} to="/buyers">
                Buyers
              </Nav.Link>
              <Nav.Link as={NavLink} to="/faq">
                FAQ
              </Nav.Link>
              <Nav.Link as={NavLink} to="/settings">
                Settings
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <div className="user-profile">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <CUButton onClick={openConnectModal} type="button">
                          <div>
                            <Image
                              id="icon"
                              src={
                                process.env.PUBLIC_URL +
                                "assets/image/icons/wallet.svg"
                              }
                            />
                          </div>
                          <div style={{ margin: "10px" }}>Connect Wallet</div>
                        </CUButton>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <CUButton onClick={openChainModal} type="button">
                          <div>
                            <Image
                              id="icon"
                              src={
                                process.env.PUBLIC_URL +
                                "assets/image/icons/wallet.svg"
                              }
                            />
                          </div>
                          <div style={{ margin: "10px" }}>Wrong network</div>
                        </CUButton>
                      );
                    }
                    localStorage.setItem("address", account.address);
                    return (
                      <div style={{ display: "flex", gap: 12 }}>
                        <button
                          onClick={openChainModal}
                          style={{ display: "flex", alignItems: "center" }}
                          type="button"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? "Chain icon"}
                                  src={chain.iconUrl}
                                  style={{ width: 12, height: 12 }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>

                        <button onClick={openAccountModal} type="button">
                          {account.displayName}
                          {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ""}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
          {/* <CUButton onClick={handleShow} >
            <div>
              <Image id="icon" src='assets\image\icons\wallet.png' />
            </div>
            <div style={{ margin: "10px" }}>Connect Wallet</div>
          </CUButton> */}
          {/* <YourApp/> */}
          <a href="/profile">
            <Image
              id="photo_img"
              src={process.env.PUBLIC_URL + "assets/image/photos/user.svg"}
            />
          </a>
        </div>

        <ConnectWallet show={show} handleClose={handleClose} />
      </Navbar>
    </div>
  );
};

export default Topnav;
