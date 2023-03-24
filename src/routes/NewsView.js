import React from "react";
import { Image, Col } from "react-bootstrap";
import { NewsBg, News, NewB } from "../assets/img";
import RecentTag from "../component/RecentTag";
import TopMovie from "../component/TopMovie";
const NewsView = () => {
    return (
        <div className="news-page">
            <div className="bage-img">
                <Image src={NewsBg} className="w-100" />
                <h5>Our Work</h5>
            </div>
            <div className="my-4 w-95">
                <div className="d-flex-wrap">
                    <Col lg={8} md={7} xs={12} className="my-2 px-3">
                        <div className="title-nes">
                            <div className="video-play ">
                                <video controls>
                                    <source src={News} type="video/mp4" />
                                </video>
                            </div>
                            <h4>The Best Live Streaming Equipment For Every Budget</h4>
                            <div className="new-dates  ">
                                <h6>  25th Jan 23  &  9.30 am</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={5} xs={12} className="my-2 px-3">

                        <RecentTag />
                        <TopMovie />
                    </Col>
                </div>
            </div>
        </div>
    );
};
export default NewsView;
