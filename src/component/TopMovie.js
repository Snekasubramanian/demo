import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Ship, Movie } from "../assets/img";
const TopMovie = () => {
    return (
        <div className="recent-news my-4">
            <h4>Top  Movie  </h4>
            <div className=" bor-botn my-2">
                <Link className="d-flex align-items-center " to="/entertainment/moviedetails">
                    <div className="my-2 px-2">
                        <Image src={Movie} className=" " />
                    </div>
                    <div className="my-2 px-2">
                        <h5> The Best Live Streaming Equipment For Every Budget </h5>
                    </div>
                </Link>
            </div>

            <div className=" bor-botn my-2">
                <Link className="d-flex align-items-center " to="/entertainment/moviedetails">
                    <div className="my-2 px-2">
                        <Image src={Ship} className=" " />
                    </div>
                    <div className="my-2 px-2">
                        <h5>The Best Live Streaming Equipment For Every Budget</h5>
                    </div>
                </Link>
            </div>

        </div>
    );
};
export default TopMovie;
