import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Wallet.scss";

import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ImageCard from "../common/ImageCard";
import Image from "react-bootstrap/Image";
// import Form from 'react-bootstrap/Form';
import { CUButton } from "../common/common.js";
import { CUSelect2 } from "../common/common.js";
import RegisterPools from "../modals/RegisterPools.js";
import { fetchPools } from "../../redux/reducer/pools.reducer";

// import image1 from "../assets/image/cards/image1.svg";
// import image1 from "/assets/image/cards/image1.svg";

const Wallet = () => {
  const dispatch = useDispatch();
  const poolData = useSelector((state) => state.pool.data);
  const [pools, setPools] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchPools());
  }, [dispatch])
  
  useEffect(() => {
    const dt = poolData.filter((el) => el.status === 0);
    setPools(dt);
  }, [poolData]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getNumberOfStatus = (status) => {
    return poolData.filter((el) => el.status === status).length;
  };

  const handleNavClick = (status) => {
    const dt = poolData.filter((el) => el.status === status);
    console.log(dt);
    setPools(dt);
  };

  return (
    <div className="wallet main-container">
      <div className="d-flex justify-content-between mb-3">
        <div>
          <h3>Pools</h3>
        </div>
        <div>
          <CUButton onClick={handleShow} style={{ padding: "10px" }}>
            <span>
              <Image id="icon" src="/assets\image\icons\plus.svg" />
            </span>
            <span style={{ margin: "10px" }}>Register Pools</span>
          </CUButton>
        </div>
      </div>
      <div>
        <Tab.Container id="pool-tabs" defaultActiveKey="first">
          <div className="d-flex justify-content-between" id="id_tabbars">
            <div id="id_tab">
              <Nav variant="pills" className="flex-row">
                <Nav.Item>
                  <Nav.Link onClick={() => handleNavClick(0)}>
                    {`Published ${getNumberOfStatus(0)}`}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => handleNavClick(1)}>
                    {`Drafts ${getNumberOfStatus(1)}`}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => handleNavClick(2)}>
                    {`Closed ${getNumberOfStatus(2)}`}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div id="category">
              {/* <CUSelect2 /> */}
              <div id="select_input">
                <CUSelect2
                  heading={""}
                  options={["Daily", "Weekly", "Houly", "Yearly"]}
                />
              </div>
            </div>
          </div>
          <div>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {pools &&
                  pools.map((el, idx) => (
                    <ImageCard
                      key={el._id}
                      src={el.img ? el.img : "/assets/image/cards/default.svg"}
                      poolData={el}
                    />
                  ))}
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>

      <RegisterPools show={show} handleClose={handleClose} />
    </div>
  );
};

export default Wallet;
