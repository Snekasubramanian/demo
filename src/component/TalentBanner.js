import React from "react";
import { Image } from "react-bootstrap";
import { TalentBg } from "../assets/img";
const TalentBanner = () => {
    return (
        <div className="baner-design">
            <Image src={TalentBg} className="w-100" />
            <h5>Actors</h5>
        </div>
    );
};
export default TalentBanner;
