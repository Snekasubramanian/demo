import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NewB, NewA, NewC } from "../assets/img";
const RecentTag = () => {
    return (
        <div className="recent-news my-3">
            <h4>Recent News</h4>
            <div className=" bor-botn my-2">
                <Link className="d-flex align-items-center " to="/news/newsview">
                    <div className="my-2 px-2">
                        <Image src={NewA} className=" " />
                    </div>
                    <div className="my-2 px-2">
                        <h5>The Best Live Streaming Equipment For Every Budget</h5>
                        <p>  25th Jan 23  &  9.30 am</p>
                    </div>
                </Link>
            </div>
            <div className=" bor-botn my-2">
                <Link className="d-flex align-items-center " to="/news/newsview">
                    <div className="my-2 px-2">
                        <Image src={NewC} className=" " />
                    </div>
                    <div className="my-2 px-2">
                        <h5>The Best Live Streaming Equipment For Every Budget</h5>
                        <p>  25th Jan 23  &  9.30 am</p>
                    </div>
                </Link>
            </div>
            <div className=" bor-botn my-2">
                <Link className="d-flex align-items-center " to="/news/newsview">
                    <div className="my-2 px-2">
                        <Image src={NewB} className=" " />
                    </div>
                    <div className="my-2 px-2">
                        <h5>The Best Live Streaming Equipment For Every Budget</h5>
                        <p>  25th Jan 23  &  9.30 am</p>
                    </div>
                </Link>
            </div>

        </div>
    );
};
export default RecentTag;
