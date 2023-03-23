import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Movie } from "../assets/img";
const FindTalent = () => {
  return (
    <div className="find-talent my-4 w-95">
      <h3>Creating a project? Find Talent</h3>
      <div className="d-flex-wrap">
        <Col md={3} sm={6} xs={12} className="my-2 px-3">
          <Link to="/talentview">
            <div className="proje-boxs">
              <Image src={Movie} className="prj-img"/>
              <h6>Modals</h6>
            </div>
          </Link>
        </Col>
      </div>
    </div>
  );
};
export default FindTalent;
