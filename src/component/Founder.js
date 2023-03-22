import React from "react";
import { Col, Image } from "react-bootstrap";
import { About } from "../assets/img";
import { BsArrowRightCircle } from "react-icons/bs";
const Founder = () => {
  return (
    <div className="founder-des my-3">
      <div className="d-flex-al w-95">
        <Col md={6} xs={12} className="px-2 my-2">
          <div className="left-font">
            <div className="img-fond ">
              <Image src={About} className="w-70" />
            </div>
            <div className="fd-box">
              <p>
                The beautiful theater is not just about making, but it contains
                meaning in it.
              </p>
              <h4>Jacob Derulo</h4>
              <p>Ceo & Founder</p>
            </div>
          </div>
        </Col>
        <Col md={6} xs={12} className="px-2 my-2">
          <div className="about-home ">
            <h2>Making a Difference Theater</h2>
            <p>
              Lorem ipsum, in graphical and textual context, refers to filler
              text that is placed in a document or visual presentation. Lorem
              ipsum is derived from the Latin "dolorem ipsum" roughly translated
              as "pain itself."Lorem ipsum, in graphical and textual context,
              refers to filler text that is placed in a document or visual
              presentation.
            </p>
            <ul className="my-4">
              <li>
                <BsArrowRightCircle /> The Cultural & Heritage sector
              </li>
              <li>
                <BsArrowRightCircle /> The Cultural & Heritage sector
              </li>
              <li>
                <BsArrowRightCircle /> The Cultural & Heritage sector
              </li>
              <li>
                <BsArrowRightCircle /> The Cultural & Heritage sector
              </li>
            </ul>
          </div>
        </Col>
      </div>
    </div>
  );
};
export default Founder;
