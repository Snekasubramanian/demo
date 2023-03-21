import React from "react";
import { Col, Image } from "react-bootstrap";
import TopHeading from "../component/TopHeading";
import Banner from "../component/Banner";
import PopularEntertainment from "../component/PopularEntertainment";
import Founder from "../component/Founder";
import LastestNews from "../component/LastestNews";
import Capture from "../component/Capture";

const Home = () => {
  return (
    <div className="home-pages">
      <TopHeading type="home" />
      <Banner />
      <PopularEntertainment />
      <Founder />
      <LastestNews />
      <Capture />
    </div>
  );
};
export default Home;
