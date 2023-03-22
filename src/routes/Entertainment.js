import React from "react";
import TopHeading from "../component/TopHeading";
import EntertainmentBanner from "../component/EntertainmentBanner";
import MostMovie from "../component/MostMovie";
import Moviesee from "../component/Moviesee";

const Entertainment = () => {
  return (
    <div className="entertain-pages">
      <TopHeading type="entertainment" />
      <EntertainmentBanner />
      <MostMovie />
      <Moviesee/>
      
    </div>
  );
};
export default Entertainment;
