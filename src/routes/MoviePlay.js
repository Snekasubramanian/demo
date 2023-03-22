import React from "react";
import TopHeading from "../component/TopHeading";
import MoreLike from "../component/MoreLike";
import { Video } from "../assets/img";
const MoviePlay = () => {
  return (
    <div className="entertain-pages">
      <TopHeading type="entertainment" />
      <div className="video-play">
        <video controls>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="my-3 w-95 px-3 movi-descrip">
        <h2>Ship Of full moon</h2>
        <div className="d-flex mov-des">
          <ul className="red-tex">
            <li>.Action</li>
            <li>.Tamil</li>
          </ul>
          <ul>
            <li>.1 hrs 23mins</li>
            <li>.2022</li>
          </ul>
        </div>
        <div className="d-flex mov-des">
          <ul className="red-tex">
            <li>Actors :</li>
          </ul>
          <ul>
            <li> Vijay</li>
          </ul>
        </div>
        <p>
          Lorem ipsum, in graphical and textual context, refers to filler text
          that is placed in a document or visual presentation
        </p>
      </div>
      <div className="my-4">
        <MoreLike />
      </div>
    </div>
  );
};
export default MoviePlay;
