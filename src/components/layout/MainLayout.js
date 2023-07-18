import React from "react";
import { Outlet } from "react-router-dom";
import Topnav from "./Topnav";

const MainLayout = () => {
  return (
    <>
      <Topnav />
      <Outlet />
    </>
  );
};

export default MainLayout;
