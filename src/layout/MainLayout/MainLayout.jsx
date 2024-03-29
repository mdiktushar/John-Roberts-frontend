import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="px-9">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
