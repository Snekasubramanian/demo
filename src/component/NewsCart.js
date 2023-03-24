import React from "react";
import { Image } from "react-bootstrap";
import { NewC } from "../assets/img";
const NewsCart = () => {

    return (
        <div className="news-session">
            <div className="new-img">

                <Image src={NewC} />
            </div>
            <div className="news-design">
                <div className="new-dates">
                    <h6>  25th Jan 23 & 9.30 am</h6>
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
    );
};
export default NewsCart;
