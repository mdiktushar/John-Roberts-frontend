import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-9">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
