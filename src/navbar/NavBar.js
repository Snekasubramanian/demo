import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { Logo } from "../assets/img"; 
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <nav className="navbar navbar-expand-lg px-3 navbar-design w-95">
      <Link className="navbar-brand" to="/">
        <Image src={Logo} />
      </Link>
      <Button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <HiOutlineMenuAlt2 />
      </Button>

      <div
        className="collapse navbar-collapse justify-content-end min-nav"
        id="collapsibleNavbar"
      >
        <ul className="navbar-nav nav_a">
          <li className="nav-item">
            <Link
              to="/"
              className={
                splitLocation[1] === "home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/entertainment"
              className={
                splitLocation[1] === "entertainment"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/live"
              className={
                splitLocation[1] === "live" ? "nav-link active" : "nav-link"
              }
            >
              Live Shows
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/news"
              className={
                splitLocation[1] === "news" ? "nav-link active" : "nav-link"
              }
            >
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                splitLocation[1] === "about" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/privacy"
              className={
                splitLocation[1] === "privacy" ? "nav-link active" : "nav-link"
              }
            >
              Privacy Policy
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/talenthub"
              className={
                splitLocation[1] === "talenthub" ? "nav-link active" : "nav-link"
              }
            >
              Talent Hub
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/career"
              className={
                splitLocation[1] === "career" ? "nav-link active" : "nav-link"
              }
            >
              Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/auditions"
              className={
                splitLocation[1] === "auditions"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Auditions
            </Link>
          </li>
        </ul>
        <div className="view-des my-mlg-0 my-3">
          <Link to="/login" className="btn-design ">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
