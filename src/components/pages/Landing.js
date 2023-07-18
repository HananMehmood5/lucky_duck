import React from "react";
const Landing = () => {
  return (
    <>
      <style type="text/css">
        {`
        #landing_logo{
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0px;
          top: 0px;
          background-image: url("/assets/image/landing_logo.svg")!important;
          background-size: 30% 30%;
          background-repeat: no-repeat;
          background-position: center center; 
          cursor: pointer;
        }
        #back_color{
          height:100vh;
          background: #1E1E1E !important
        }
      `}
      </style>
      <div id="back_color"></div>
      <a
        href="/pools"
        id="landing_logo"
        className="d-flex justify-content-center"
      ></a>
    </>
  );
};

export default Landing;
