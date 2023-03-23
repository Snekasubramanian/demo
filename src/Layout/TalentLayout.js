import React from "react";
import TalentNavBar from "../navbar/TalentNavBar";
import Footer from "../navbar/Footer";

import { Outlet } from "react-router-dom";
const TalentLayout = () => {
  return (
    <div className="page-design">
      <div className="top-design">
        <TalentNavBar />
      </div>
      <div className="body-design">
        <Outlet />
      </div>
      <div className="foot-des">
        <Footer />
      </div>
    </div>
  );
};
export default TalentLayout;
