import React from "react";
import CareerBG from "../component/CareerBG";
import { Col, Image, Button } from "react-bootstrap";
import { CarViw } from "../assets/img";
import JobModal from "../component/JobModal";
import ResentJob from "../component/ResentJob";
const CareerView = () => {
    return (
        <div className="care-page">
            <CareerBG />
            <div className="care-view my-3 d-flex-al w-90">
                <Col md={5} xs={12} className="my-2 px-3">
                    <Image src={CarViw} className="w-100" />
                </Col>
                <Col md={7} xs={12} className="my-2 px-3">
                    <div className="des-design">
                        <h4>Job Descriptions</h4>
                        <p>Ensure to execute test cases prepared for testing Software builds on the mobile platform
                            Perform daily quality checks as per established guidelines and report deviations accurately
                            Understand and ramp up on testing procedures, guidelines and policies for new devices and apply the same in day-to-day work.
                            Be comfortable with capturing results,
                        </p>
                        <div className="d-flex-wrap">
                            <Col xs={6} className="my-2 px-2">
                                <h5>Job Function</h5>

                            </Col>
                            <Col xs={6} className="my-2 px-2">
                                <h6>Video Editor</h6>
                            </Col>
                            <Col xs={6} className="my-2 px-2"> 
                                <h5>Role</h5>

                            </Col>
                            <Col xs={6} className="my-2 px-2"> 
                                <h6>Video Editor</h6>

                            </Col>
                            <Col xs={6} className="my-2 px-2"> 
                                <h5>Job ID</h5>

                            </Col>
                            <Col xs={6} className="my-2 px-2">
                                <h6>3456</h6>
                            </Col>
                            <Col xs={6} className="my-2 px-2">
                                <h5>Desired Skills</h5>
                            </Col>
                            <Col xs={6} className="my-2 px-2">
                                <h6>Skills</h6>
                            </Col>
                        </div>
                        <h4>Job Descriptions</h4>
                        <div className="d-flex-wrap px-2 ">
                            <Col xs={6}>
                                <h5>Qualification</h5>

                            </Col>
                            <Col xs={6}>
                                <h6>B.Tech</h6>

                            </Col>
                        </div>
                        <JobModal />
                    </div>
                </Col>
            </div>
            <ResentJob />
        </div>

    );
};
export default CareerView;
