import React from "react";
import { Image } from "react-bootstrap";
import Fiction from "../component/Fiction";
import { TalentBg } from "../assets/img";

const Live = () => {
    return (
        <div className="live-shows">
            <div className="baner-design">
                <Image src={TalentBg} className="w-100" />
                <h5>Live Shows</h5>
            </div>
            <Fiction />
        </div>
    );
};
export default Live;