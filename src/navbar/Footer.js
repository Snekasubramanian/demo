import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-design">
      <div className="d-flex-wrap w-95">
        <Col md={3} xs={12} className="my-2 px-3">
          <div className="fote-design">
            <ul>
              <li>
                <Link to="/"></Link>
              </li>
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
        <Col md={3} xs={12} className="my-2 px-3">
          <div className="fote-design">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/live">Live Shows</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={3} xs={12} className="my-2 px-3">
          <div className="fote-design">
            <ul>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>

              <li>
                <Link to="/talenthub">Talent Hub</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/auditions">Auditions</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={3} xs={12} className="my-2 px-3">
          <div className="soci-design">
            <h5>Social Media</h5>
            <ul className="d-flex-wrap">
              <li>
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </li>

              <li>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaPinterestP />
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </div>
    </div>
  );
};
export default Footer;
