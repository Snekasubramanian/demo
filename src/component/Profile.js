import React from "react";
import { Col, Image } from "react-bootstrap";
import { ProfA, ProfB, ProfC, ProfD } from "../assets/img";
import { Link } from "react-router-dom";
const Profile = () => {
    return (
        <div className="my-4 w-95 d-flex-wrap">
            <Col md={3} sm={6} xs={12} className="my-3 px-3">
                <Link to="/talenthub/profileview">
                    <div className="profi-box">
                        <Image className="w-100" src={ProfA} />
                        <h6>Briyan Bluci</h6>
                    </div>
                </Link>
            </Col>
            <Col md={3} sm={6} xs={12} className="my-3 px-3">
                <Link to="/talenthub/profileview">
                    <div className="profi-box">
                        <Image className="w-100" src={ProfB} />
                        <h6>Ilina Bluci</h6>
                    </div>
                </Link>
            </Col>
            <Col md={3} sm={6} xs={12} className="my-3 px-3">
                <Link to="/talenthub/profileview">
                    <div className="profi-box">
                        <Image className="w-100" src={ProfC} />
                        <h6>Helosi Iranian</h6>
                    </div>
                </Link>
            </Col>
            <Col md={3} sm={6} xs={12} className="my-3 px-3">
                <Link to="/talenthub/profileview">
                    <div className="profi-box">
                        <Image className="w-100" src={ProfD} />
                        <h6>Rammodal</h6>
                    </div>
                </Link>
            </Col>
            <Col md={3} sm={6} xs={12} className="my-3 px-3">
                <Link to="/talenthub/profileview">
                    <div className="profi-box">
                        <Image className="w-100" src={ProfA} />
                        <h6>Briyan Bluci</h6>
                    </div>
                </Link>
            </Col>
            <Col md={3} sm={6} xs={12} className="my-3 px-3">
                <Link to="/talenthub/profileview">
                    <div className="profi-box">
                        <Image className="w-100" src={ProfB} />
                        <h6>Ilina Bluci</h6>
                    </div>
                </Link>
            </Col>
            <Col md={3} sm={6} xs={12} className="my-3 px-3">
                <Link to="/talenthub/profileview">
                    <div className="profi-box">
                        <Image className="w-100" src={ProfC} />
                        <h6>Helosi Iranian</h6>
                    </div>
                </Link>
            </Col>
            <Col md={3} sm={6} xs={12} className="my-3 px-3">
                <Link to="/talenthub/profileview">
                    <div className="profi-box">
                        <Image className="w-100" src={ProfD} />
                        <h6>Rammodal</h6>
                    </div>
                </Link>
            </Col>
        </div>
    );
};
export default Profile;
