import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { Logo } from "../assets/img";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg   navbar-design w-95">
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

            <button data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              onClick={() => navigate("/")}
              className={
                splitLocation[1] === "home" ? "nav-link active" : "nav-link"
              }  >  Home  </button>

          </li>

          <li className="nav-item">
            <button data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              onClick={() => navigate("/entertainment")}

              className={
                splitLocation[1] === "entertainment"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Entertainment
            </button>
          </li>
          <li className="nav-item">
            <button data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              onClick={() => navigate("/live")}
              className={
                splitLocation[1] === "live" ? "nav-link active" : "nav-link"
              }
            >
              Live Shows
            </button>
          </li>
          <li className="nav-item">
            <button data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              onClick={() => navigate("/news")}
              className={
                splitLocation[1] === "news" ? "nav-link active" : "nav-link"
              }
            >
              News
            </button>
          </li>
          <li className="nav-item">
            <button data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              onClick={() => navigate("/about")}
              className={
                splitLocation[1] === "about" ? "nav-link active" : "nav-link"
              }
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              onClick={() => navigate("/privacy")}
              className={
                splitLocation[1] === "privacy" ? "nav-link active" : "nav-link"
              }
            >
              Privacy Policy
            </button>
          </li>
          <li className="nav-item">
            <button data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              onClick={() => navigate("/talenthub")}
              className={
                splitLocation[1] === "talenthub" ? "nav-link active" : "nav-link"
              }
            >
              Talent Hub
            </button>
          </li>
          <li className="nav-item">
            <button data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              onClick={() => navigate("/career")}
              className={
                splitLocation[1] === "career" ? "nav-link active" : "nav-link"
              }
            >
              Careers
            </button>
          </li>
          <li className="nav-item">
            <button data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              onClick={() => navigate("/auditions")} 
              className={
                splitLocation[1] === "auditions"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Auditions
            </button>
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
