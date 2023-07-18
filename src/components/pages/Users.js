import { Container, Row, Col } from "react-bootstrap";
import User from "../common/User.js";
import WalletIcon from "../../images/wallet.svg";
import UserAvatar from "../../images/user1.svg";
import SearchIcon from "../../images/search.svg";
import { useSelector } from "react-redux";

import "./Users.scss";

const Users = () => {
  const userData = useSelector((state) => state.user);

  let wallet, type, username, address;
  wallet = "0x72C7gg45ZpQR...976F";
  type = "USDT";
  username = "Courtney Henry";
  address = "johonsmith_24@gmail.com";
  return (
    <div className="background">
      <Container fluid>
        <Col className="pt-5 d-flex justify-content-between">
          <div className="title mx-3">Users</div>
          <div className="d-flex justify-content-center align-items-center px-2">
            <div className="search-icon p-4 d-flex align-items-center">
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
          <Col md={4} lg={4} xl={4}>
            Wallet Address
          </Col>
          <Col md={3} lg={3} xl={3}>
            Name
          </Col>
          <Col md={3} lg={3} xl={3}>
            Email Address
          </Col>
          <Col
            md={2}
            lg={2}
            xl={2}
            className="justify-content-end d-flex px-5 mx-2"
          >
            Actions
          </Col>
        </Col>
        <Row>
          <Col>
            {userData &&
              userData.map((el) => (
                <User
                  key={el.id}
                  WalletIcon={WalletIcon}
                  UserAvatar={el.img}
                  wallet={wallet}
                  type={type}
                  username={el.name}
                  address={el.email}
                />
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Users;
