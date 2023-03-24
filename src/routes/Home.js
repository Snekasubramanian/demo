import React from "react";
import TopHeading from "../component/TopHeading";
import Banner from "../component/Banner";
import PopularEntertainment from "../component/PopularEntertainment";
import Founder from "../component/Founder";
import LatestNews from "../component/LatestNews";
import Capture from "../component/Capture";

const Home = () => {
  return (
    <div className="home-pages">
      <TopHeading type="home" />
      <Banner />
      <PopularEntertainment />
      <Founder />
      <LatestNews />
      <Capture />
    </div>
  );
};
export default Home;
