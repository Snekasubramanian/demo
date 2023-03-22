import React from "react";
import TopHeading from "../component/TopHeading";
import BanneDetails from "../component/BanneDetails";
import MoreLike from "../component/MoreLike";
import { Image } from "react-bootstrap";
import { Ship } from "../assets/img";
import Trailer from "../component/Trailer";
const MovieDetails = () => {
  return (
    <div className="entertain-pages">
      <TopHeading type="entertainment" />
      <div className="baner-deisng">
        <Image className=" w-100" src={Ship} alt="First slide" />
        <div className="con-abols">
          <BanneDetails />
        </div>
      </div>
      <Trailer />
      <div className="my-4">
        <MoreLike />
      </div>
    </div>
  );
};
export default MovieDetails;
