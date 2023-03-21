import React from "react";
import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="page-design">
      <div className="top-design">
        <NavBar />
      </div>
      <div className="body-design">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
