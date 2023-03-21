import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Capture = () => {
  return (
    <div className="capb-bg my-3">
      <h5>Ready To Capture your Brand vision ?</h5>
      <p>
        Lorem ipsum, in graphical and textual context, refers to filler text
        that is placed in a document or visual presentation. Lorem ipsum is
        derived from the Latin "dolorem ipsum" roughly translated as "pain
        itself."Lorem ipsum, in graphical and textual context, refers to filler
        text that is placed in a document or visual presentation.
      </p>
      <div className="view-des mt-4">
        <Link to="/enter" className="play-btns ">
          Contact Us
        </Link>
      </div>
    </div>
  );
};
export default Capture;
