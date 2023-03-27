import React from "react";
import { Image } from "react-bootstrap";
import { TalentBg } from "../assets/img"; 
const CareerBG = () => {
    return (
        <div className="care-page">
            <div className="bage-img">
                <Image src={TalentBg} className="w-100" />
                <h5>Career</h5>
            </div>
        </div>

    );
};
export default CareerBG;
