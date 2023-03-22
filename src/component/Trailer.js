import React from "react";
import { Image, Col } from "react-bootstrap";
import { Ship } from "../assets/img";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
const Trailer = () => {
  return (
    <div className="poular-movie my-4 w-95">
      <h2>Trailers & Extras</h2>
      <div className=" d-flex-wrap my-2">
        <Col className="px-3 my-2" md={3} xs={12} sm={6}>
          <Link to="/entertainment/movieplay">
            <div className="pop-enter">
              <Image src={Ship} />
              <div className="hover-cont">
                <h3>Ship of full moon - Trailer</h3>
                <div className="d-flex-al-jb">
                  <p>
                    <FaPlay />
                    1hr 54min
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col className="px-3 my-2" md={3} xs={12} sm={6}>
          <Link to="/entertainment/movieplay">
            <div className="pop-enter">
              <Image src={Ship} />
              <div className="hover-cont">
                <h3>Ship of full moon - Trailer1</h3>
                <div className="d-flex-al-jb">
                  <p>
                    <FaPlay />
                    1hr 54min
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </div>
    </div>
  );
};
export default Trailer;
