import React from "react";
import { Image } from "react-bootstrap";
import { NewB, NewD } from "../assets/img";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
const ResentAudition = () => {
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
        <div className="aud-design my-4  ">
            <h3>You may also like this </h3>
            <div className="  my-3">
                <OwlCarousel className="owl-theme" loop margin={30} nav {...options}>
                    <div className="item">
                        <Link to="/auditions/auditionsview ">
                            <div className="auditions-session">
                                <div className="auditions-img">
                                    <Image src={NewD} />
                                </div>
                                <div className="auditions-design">
                                    <div className="auditions-dates d-flex-al-jb  my-2">
                                        <h6> <HiOutlineLocationMarker /> Chennai</h6>
                                        <h6>  <AiOutlineCalendar /> 25th Jan 23 & 9.30 am</h6>
                                    </div>
                                    <h5>The Best Live Streaming Equipment For Every Budget</h5>
                                    <p>
                                        Lorem ipsum, in graphical and textual context, refers to
                                        filler text that is placed in a document or visual
                                        presentation. Lorem ipsum is derived from the Latin "dolorem
                                        ipsum" roughly translated as "pain itself.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="/auditions/auditionsview ">
                            <div className="auditions-session">
                                <div className="auditions-img">
                                    <Image src={NewB} />
                                </div>
                                <div className="auditions-design">
                                    <div className="auditions-dates d-flex-al-jb  my-2">
                                        <h6> <HiOutlineLocationMarker /> Chennai</h6>
                                        <h6>  <AiOutlineCalendar /> 25th Jan 23 & 9.30 am</h6>
                                    </div>
                                    <h5>The Best Live Streaming Equipment For Every Budget</h5>
                                    <p>
                                        Lorem ipsum, in graphical and textual context, refers to
                                        filler text that is placed in a document or visual
                                        presentation. Lorem ipsum is derived from the Latin "dolorem
                                        ipsum" roughly translated as "pain itself.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                </OwlCarousel>
            </div >
        </div >
    );
};
export default ResentAudition;
