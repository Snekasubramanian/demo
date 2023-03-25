import React from "react";
import { Image } from "react-bootstrap";
import { NewsBg } from "../assets/img";
import AuditDesign from "../component/AuditDesign";

const Auditions = () => {
    return (
        <div className="news-page">
            <div className="bage-img">
                <Image src={NewsBg} className="w-100" />
                <h5>Auditions</h5>
            </div>
            <AuditDesign /> 
        </div>
    );
};
export default Auditions;
