import React from "react";
import { Image } from "react-bootstrap";
import { PrivacyImg } from "../assets/img";
import { GiFallingStar } from "react-icons/gi";

const Privacy = () => {
    return (
        <div className="privacy-page w-90">
            <div className="pr-img">
                <Image src={PrivacyImg} className="w-50" />
            </div>
            <h5>Quality Policy Statement</h5>
            <ul>
                <li> <GiFallingStar />Most prominently, our quality policy states that the eminence of our products and services are 100% assured as per the customer requirements. This objective has helped us to earn our customer satisfaction</li>
                <li> <GiFallingStar />We significantly believe in a working environment which supports the mutual contribution from the both client as well as contractor. As a result, the policy statements can be completely fulfilled along with the consistent efforts in improving the service quality. We have structured 3 basic principles upon which all our quality policy is based on.</li>

                <li> <GiFallingStar />Ensure to identify and conform to the customer needs.</li>
                <li> <GiFallingStar />Identification of errors at the earliest and take necessary steps to eliminate.</li>

                <li><GiFallingStar />We maintain the transparent environment among the staff members which allows the easy reach of quality policy principles and objectives. Along with this, the training is provided as an integral part of policy statements.</li>
                <li><GiFallingStar />We maintain the transparent environment among the staff members which allows the easy reach of quality policy principles and objectives. Along with this, the training is provided as an integral part of policy statements.</li>
                <li><GiFallingStar />We maintain the transparent environment among the staff members which allows the easy reach of quality policy principles and objectives. Along with this, the training is provided as an integral part of policy statements.</li>
                <li><GiFallingStar />We maintain the transparent environment among the staff members which allows the easy reach of quality policy principles and objectives. Along with this, the training is provided as an integral part of policy statements.</li>
                <li><GiFallingStar />We maintain the transparent environment among the staff members which allows the easy reach of quality policy principles and objectives. Along with this, the training is provided as an integral part of policy statements.</li>
            </ul>
        </div>
    );
};
export default Privacy;
