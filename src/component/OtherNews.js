import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import NewsCart from "../component/NewsCart";
const LastestNews = () => {

    return (
        <div className="other-news my-4 w-95">
            <h3>Other News</h3>
            <div className="d-flex-wrap my-4 ">
                <Col md={4} xs={12} className="my-3 px-3">
                    <Link to="/news/newsview ">
                        <NewsCart />
                    </Link>
                </Col>
                <Col md={4} xs={12} className="my-3 px-3">
                    <Link to="/news/newsview">
                        <NewsCart />
                    </Link>
                </Col>
                <Col md={4} xs={12} className="my-3 px-3">
                    <Link to="/news/newsview">
                        <NewsCart />
                    </Link>
                </Col>
                <Col md={4} xs={12} className="my-3 px-3">
                    <Link to="/news/newsview">
                        <NewsCart />
                    </Link>
                </Col>
                <Col md={4} xs={12} className="my-3 px-3">
                    <Link to="/news/newsview">
                        <NewsCart />
                    </Link>
                </Col>
                <Col md={4} xs={12} className="my-3 px-3">
                    <Link to="/news/newsview">
                        <NewsCart />
                    </Link>
                </Col>

            </div>
        </div>
    );
};
export default LastestNews;
