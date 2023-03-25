import React, { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import { TestImg, TestA } from "../assets/img";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ImQuotesRight } from "react-icons/im";
const Testimonoial = () => {
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
    const [testModal, setTestModal] = useState(false);

    return (
        <div className="test-design my-4 ">
            {/* <h3>About Say our Clients</h3> */}
            <div className="w-90 my-4">
                <OwlCarousel className="owl-theme " loop margin={40} nav {...options}>
                    <div class="item">
                        <Link onClick={() => setTestModal(true)}>
                            <div className="test-movie mb-3">
                                <Image src={TestImg} />
                                <ImQuotesRight />
                            </div>
                            <p>“ Everything is great about this website, we liked it. ”</p>
                            <h5>John Rolph</h5>
                            <h6>Film export</h6>
                        </Link>
                    </div>
                    <div class="item">
                        <Link onClick={() => setTestModal(true)}>
                            <div className="test-movie mb-3">
                                <Image src={TestA} />
                                <ImQuotesRight />
                            </div>
                            <p>“ Everything is great about this website, we liked it. ”</p>
                            <h5>John Rolph</h5>
                            <h6>Film export</h6>
                        </Link>
                    </div>

                </OwlCarousel>
            </div>
            <Modal
                className="des-monal"
                show={testModal}
                size="md"
                centered
                onHide={() => setTestModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton></Modal.Header>
                <div className="test-design">
                    <div className="test-movie mb-3">
                        <Image src={TestImg} />
                        <ImQuotesRight />
                    </div>
                    <p>“ Everything is great about this website, we liked it. ”</p>
                    <h5>John Rolph</h5>
                    <h6>Film export</h6>
                </div>
            </Modal>
        </div>
    );
};
export default Testimonoial;
