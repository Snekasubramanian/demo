import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Logo } from "../assets/img";

const TalentNavBar = () => {
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
              to="/talenthub"
              className={
                splitLocation[1] === "talenthub"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Talent Hub
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/talentregister"
              className={
                splitLocation[1] === "talentregister"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Talent Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default TalentNavBar;
