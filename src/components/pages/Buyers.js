import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import Buyer from "../common/Buyer.js";
import WalletIcon from "../../images/wallet.svg";
import PortfolioIcon from "../../images/portfolio.svg";
import SearchIcon from "../../images/search.svg";
import "./Buyers.scss";
import Part1 from "../../images/part1.svg";
import Part2 from "../../images/part2.svg";
import Part3 from "../../images/part3.svg";
import Part4 from "../../images/part4.svg";
import Part5 from "../../images/part5.svg";

const Buyers = () => {
  const poolData = useSelector((state) => state.pool);
  let wallet,
    type,
    cash,
    portfolio,
    date,
    participate = [],
    amount;
  participate[0] = Part1;
  participate[1] = Part2;
  participate[2] = Part3;
  participate[3] = Part4;
  participate[4] = Part5;
  wallet = "0x72C7gg45ZpQR...976F";
  type = "USDT";
  cash = "2.8951 BTC";
  portfolio = "Bitcoin";
  date = "20, Jan, 2023";
  amount = "$ 255.99";

  return (
    <div className="background">
      <Container fluid>
        <Col className="pt-5 d-flex justify-content-between">
          <div className="title mx-3">All Pools Buyers</div>
          <div className="d-flex justify-content-center align-items-center px-2">
            <div className="search-icon p-4 d-flex align-items-center ">
              <img src={SearchIcon} alt="search_icon" />
            </div>
            <input
              className="mr-3 p-4"
              type="text"
              placeholder="Search"
            ></input>
          </div>
        </Col>
        <Col className="table-header m-2 p-3 d-flex">
          <Col md={3} lg={3} xl={3}>
            Wallet
          </Col>
          <Col md={2} lg={2} xl={2} className="disp-show">
            Portfolio
          </Col>
          <Col md={2} lg={2} xl={2} className="disp-show">
            Total number of draws
          </Col>
          <Col md={2} lg={2} xl={2} className="disp-show">
            Participate
          </Col>
          <Col md={2} lg={2} xl={2} className="disp-show">
            Amount of Contributed
          </Col>
          <Col md={1} lg={1} xl={1}>
            Buyer's detail{" "}
          </Col>
        </Col>
        <Row>
          <Col className="">
            {poolData &&
              poolData.map((el) => (
                <Buyer
                  key={el.id}
                  WalletIcon={WalletIcon}
                  PortfolioIcon={PortfolioIcon}
                  wallet={wallet}
                  cash={cash}
                  type={type}
                  date={el.drawDate}
                  portfolio={portfolio}
                  participate={participate}
                  amount={el.ticketValue}
                />
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buyers;
