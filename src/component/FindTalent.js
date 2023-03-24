import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Shape, TalA, TalB, TalC, TalD } from "../assets/img";
const FindTalent = () => {
  return (
    <div className="find-talent my-4 w-95">
      <h3>Creating a project? Find Talent</h3>
      <div className="d-flex-wrap my-3">
        <Col md={4} sm={6} xs={12} lg={3} className="my-3 px-3">
          <Link to="/talenthub/talentview">
            <div className="proje-boxs">
              <Image src={Shape} className="abs-img" />
              <Image src={TalA} className="prj-img" />
              <h6>Modals</h6>
            </div>
          </Link>
        </Col>
        <Col md={4} sm={6} xs={12} lg={3} className="my-3 px-3">
          <Link to="/talenthub/talentview">
            <div className="proje-boxs">
              <Image src={Shape} className="abs-img" />
              <Image src={TalB} className="prj-img" />
              <h6>Actors</h6>
            </div>
          </Link>
        </Col>
        <Col md={4} sm={6} xs={12} lg={3} className="my-3 px-3">
          <Link to="/talenthub/talentview">
            <div className="proje-boxs">
              <Image src={Shape} className="abs-img" />
              <Image src={TalC} className="prj-img" />
              <h6>VO Artists</h6>
            </div>
          </Link>
        </Col>
        <Col md={4} sm={6} xs={12} lg={3} className="my-3 px-3">
          <Link to="/talenthub/talentview">
            <div className="proje-boxs">
              <Image src={Shape} className="abs-img" />
              <Image src={TalD} className="prj-img" />
              <h6>Post Production Crew</h6>
            </div>
          </Link>
        </Col>
        <Col md={4} sm={6} xs={12} lg={3} className="my-3 px-3">
          <Link to="/talenthub/talentview">
            <div className="proje-boxs">
              <Image src={Shape} className="abs-img" />
              <Image src={TalD} className="prj-img" />
              <h6>Production Crew</h6>
            </div>
          </Link>
        </Col>
        <Col md={4} sm={6} xs={12} lg={3} className="my-3 px-3">
          <Link to="/talenthub/talentview">
            <div className="proje-boxs">
              <Image src={Shape} className="abs-img" />
              <Image src={TalB} className="prj-img" />
              <h6>All Technicians</h6>
            </div>
          </Link>
        </Col>
        <Col md={4} sm={6} xs={12} lg={3} className="my-3 px-3">
          <Link to="/talenthub/talentview">
            <div className="proje-boxs">
              <Image src={Shape} className="abs-img" />
              <Image src={TalA} className="prj-img" />
              <h6>Modals</h6>
            </div>
          </Link>
        </Col>
        <Col md={4} sm={6} xs={12} lg={3} className="my-3 px-3">
          <Link to="/talenthub/talentview">
            <div className="proje-boxs">
              <Image src={Shape} className="abs-img" />
              <Image src={TalB} className="prj-img" />
              <h6>Actors</h6>
            </div>
          </Link>
        </Col>
      </div>
    </div>
  );
};
export default FindTalent;
