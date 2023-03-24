import React from "react";
import TopHeading from "../component/TopHeading";
import { Col, Image } from "react-bootstrap";
import { Abouts } from "../assets/img";
const About = () => {
    return (
        <div className="about-pages">
            <TopHeading type="about" />
            <div className="d-flex-al w-90 my-4 about-us">
                <Col md={5} xs={12} className="my-2 px-3" >
                    <Image src={Abouts} />
                </Col>
                <Col md={7} xs={12} className="my-2 px-3" >
                    <div className="ab-design">
                        <h6> About US  </h6>
                        <h4>Bringing Your Ideas to Life Through Motion</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </Col>
            </div>

        </div>
    );
};
export default About;
