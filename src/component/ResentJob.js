import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { Col, Button } from "react-bootstrap";
import { HiOutlineLocationMarker, HiOutlineShoppingBag } from "react-icons/hi";
const ResentJob = () => {
    const options = {
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },

            600: {
                items: 2,
            },

            1000: {
                items: 3,
            },
        },
    };
    return (
        <div className="aud-design my-4  w-90 ">
            <h3>You may also like this </h3>
            <div className=" mt-4">
                <OwlCarousel className="owl-theme" loop margin={30} nav {...options}>
                    <div className="item">
                        <Link to="/career/careerview">
                            <div className="carer-design">
                                <h4>Production Designer</h4>
                                <p>We are looking for an  customer success manager to join our team.
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                </p>

                                <div className="d-flex-wrap">
                                    <Col md={6} className="px-2 my-2 ">
                                        <div className="d-flex-al car-boxs">
                                            <HiOutlineLocationMarker />
                                            <h6>Chennai</h6>
                                        </div>
                                    </Col>
                                    <Col md={6} className="px-2 my-2 ">
                                        <div className="d-flex-al car-boxs">
                                            <HiOutlineShoppingBag />
                                            <h6>3-4 years</h6>
                                        </div>
                                    </Col>
                                    <Col md={6} className="px-2 my-2 ">
                                        <div className=" d-flex-al car-boxs">
                                            <AiOutlineCalendar />
                                            <h6>12-04-2023</h6>
                                        </div>
                                    </Col>
                                </div>
                                <Button className="btn-design my-3" to="/career/careerview">Apply Now</Button>
                            </div>
                        </Link>
                    </div>


                </OwlCarousel>
            </div >
        </div >
    );
};
export default ResentJob;
