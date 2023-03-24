import React from "react";
import { Image } from "react-bootstrap";
import CurrentNews from "../component/CurrentNews";
import OtherNews from "../component/OtherNews";
import { NewsBg } from "../assets/img";
const News = () => {
    return (
        <div className="news-page">
            <div className="bage-img">
                <Image src={NewsBg} className="w-100" />
                <h5>Our Work</h5>
            </div>
            <CurrentNews />
            <OtherNews />
        </div>
    );
};
export default News;
