import React from "react";
import PoolCard from "../common/PoolCard";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap";
import { useSelector } from "react-redux";

import { CUButton } from "../common/common.js";
import { SocialButton } from "../common/common.js";
import "./Profile.scss";

const Profile = () => {
  const address = localStorage.getItem("address");
  const poolData = useSelector((state) => state.pool).filter((el) =>
    el.participators.includes(address)
  );
  return (
    <div className="wallet main-container">
      <div className="d-flex align-item-center mb-2">
        <SocialButton src="/assets\image\icons\back.svg" url="" />
        <h6 style={{ marginBottom: 0, marginLeft: 10 }}>Back To Pools</h6>
      </div>
      <div
        className="d-block mb-3"
        style={{ background: "#25294C", padding: "10px", borderRadius: "15px" }}
      >
        <div className="d-flex justify-content-left align-items-center">
          <a href="/profile">
            <Image id="photo_img" src="/assets\image\photos\user.svg" />
          </a>
          <div className="d-block ms-4">
            <h3>John Smith</h3>
            <h6 style={{ color: "#8C90B7" }}>johnsmith_24@gmail.com</h6>
          </div>
        </div>
        <div id="divider"></div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-around">
            <CUButton
              className="text-center  ms-2"
              style={{ marginTop: 5, justifyContent: "center", paddingtop: 10 }}
            >
              <span style={{ margin: "5px", minWidth: "100px" }}>
                My Pools - 08
              </span>
            </CUButton>
            <CUButton
              className="text-center ms-2"
              style={{ marginTop: 5, justifyContent: "center", paddingtop: 10 }}
            >
              <span style={{ margin: "5px", minWidth: "100px" }}>Overview</span>
            </CUButton>
          </div>
          <div style={{ display: "inherit" }}>
            <SocialButton src="/assets\image\icons\google.svg" url="" />
            <SocialButton src="/assets\image\icons\linkedin.svg" url="" />
            <SocialButton src="/assets\image\icons\instagram.svg" url="" />
            <SocialButton src="/assets\image\icons\facebook.svg" url="" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around">
        {poolData && poolData.map((el) => <PoolCard key={el.id} {...el} />)}

        {/* <PoolCard src="\assets\image\cards\image1.svg" />
        <PoolCard src="\assets\image\cards\image1.svg" />
        <PoolCard src="\assets\image\cards\image1.svg" />
        <PoolCard src="\assets\image\cards\image1.svg" />
        <PoolCard src="\assets\image\cards\image1.svg" />
        <PoolCard src="\assets\image\cards\image1.svg" />
        <PoolCard src="\assets\image\cards\image1.svg" /> */}
      </div>
    </div>
  );
};

export default Profile;
