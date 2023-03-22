import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Movie } from "../assets/img";
import { BsPlayCircle } from "react-icons/bs";
import PopularCarousel from "../component/PopularCarousel";
const Banner = () => {
  return (
    <div className="bane-desin">
      <div className="d-flex-al w-95">
        <Col md={6} xs={12} className="px-2 my-2">
          <div className="cont-des">
            <div className="d-flex-wrap vr-line">
              <div class="vr"></div> <h6> High Rated</h6>
            </div>
            <div className="movi-bane mt-3">
              <h1>King of Skull</h1>
              <p>
                Lorem ipsum, in graphical and textual context, refers to filler
                text that is placed in a document or visual presentation
              </p>
              <ul>
                <li>Director : ABC Group</li>
                <li>Season : 1 - (Episodes 1)</li>
              </ul>
              <div className="view-des mt-4">
                <Link to="/enter" className="play-btn ">
                  <lord-icon
                    src="https://cdn.lordicon.com/dpohzien.json"
                    trigger="hover"
                    colors="primary:#121331"
                    state="hover"
                  ></lord-icon>
                  View more
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} xs={12} className="px-2 my-2">
          <Link to="/entertainment/movieplay">
            <div className="movie-box  ">
              <Col className="image-box" md={8} xs={11}>
                <Image src={Movie} className="w-100" />
                <div className="abs-box">
                  <BsPlayCircle />
                 
                  <h6>Watch Trailer</h6>
                </div>
              </Col>
              <PopularCarousel />
            </div>
          </Link>
        </Col>
      </div>
    </div>
  );
};
export default Banner;
