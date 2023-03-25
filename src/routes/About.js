import React from "react";
import TopHeading from "../component/TopHeading";
import Testimonoial from "../component/Testimonoial";
import { Col, Image } from "react-bootstrap";
import { Abouts } from "../assets/img";
import { AiOutlineUser } from "react-icons/ai";
import { TbAward } from "react-icons/tb";
import { RiMovie2Line } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import CountUp from "react-countup";
import MostMovie from "../component/MostMovie";

const About = () => {
    return (
        <div className="about-pages">
            <TopHeading type="about" />
            <div className="d-flex-al w-95 my-4 about-us">
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
            <div className="my-3 d-flex-wrap">
                <Col md={3} sm={6} xs={12} className="my-2 px-3">
                    <div className="cou-des">
                        <AiOutlineUser />
                        <h5> <CountUp delay={1} end={200} /><sup>+</sup>  </h5>
                        <h6>Year of Experience</h6>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12} className="my-2 px-3">
                    <div className="cou-des">
                        <TbAward />
                        <h5> <CountUp delay={1} end={200} /><sup>+</sup>  </h5>
                        <h6>Winning Awards</h6>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12} className="my-2 px-3">
                    <div className="cou-des">
                        <RiMovie2Line />
                        <h5> <CountUp delay={1} end={200} /><sup>+</sup>  </h5>
                        <h6> Project Complete</h6>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12} className="my-2 px-3">
                    <div className="cou-des">
                        <BiCameraMovie />
                        <h5> <CountUp delay={1} end={200} /><sup>+</sup>  </h5>
                        <h6>Professional Team</h6>
                    </div>
                </Col>

            </div>
            <Testimonoial />
            <div className="entertain-pages">
                <MostMovie />
            </div>
        </div>
    );
};
export default About;
