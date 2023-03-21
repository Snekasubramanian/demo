import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-design">
      <div className="d-flex-wrap w-95">
        <Col md={3} xs={12} className="my-2 px-3">
          <div className="fote-design">
            <ul>
              <li>
                <Link to="mailto:support@gmail.com">Support@gmail.com</Link>
              </li>
              <li>
                <Link to="tel:+97908076741">+91 97908 076741</Link>
              </li>
              <li>
                <Link to="#">
                  601 - Ram Nagar , India Omex City 245 , America
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={3} xs={12} className="my-2 px-3"></Col>
        <Col md={3} xs={12} className="my-2 px-3"></Col>
        <Col md={3} xs={12} className="my-2 px-3"></Col>
      </div>
    </div>
  );
};
export default Footer;
