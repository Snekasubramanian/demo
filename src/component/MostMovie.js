import React from "react";
import { Image } from "react-bootstrap";
import { Ship, Man,Star } from "../assets/img";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { BsPlayCircle } from "react-icons/bs";

const MostMovie = () => {
  const options = {
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1000: {
        items: 4,
      },
    },
  };
  return (
    <div className="poular-movie my-4 w-95 px-3">
      <h2>The Most Popular movie</h2>
      <div className="  my-4">
        <OwlCarousel className="owl-theme" loop margin={42} nav {...options}>
          <div class="item">
            <Link to="/entertainment/moviedetails">
              <div className="pop-enter">
                <Image src={Ship} />
                <div className="hover-cont">
                  <div className="play-design">
                    <BsPlayCircle />
                  </div>

                  <h3>Ship of full moon</h3>
                  <div className="d-flex-al-jb">
                    <p>1hr 54min</p>
                    <p className="d-flex-al">
                      <Image src={Star} className="img-width"/> 5.6
                    </p>
                  </div>
                <h6>Drama - 12 Feb 23</h6>
                </div>
              </div>
            </Link>
          </div>
          <div class="item">
            <Link to="/entertainment/moviedetails">
              <div className="pop-enter">
                <Image src={Man} />
                <div className="hover-cont">
                  <div className="play-design">
                    <BsPlayCircle />
                  </div>

                  <h3>My generation</h3>
                  <div className="d-flex-al-jb">
                    <p>1hr 54min</p>
                    <p className="d-flex-al">
                      <Image src={Star} className="img-width"/> 5.6
                    </p>
                  </div>
                <h6>Drama - 12 Feb 23</h6>
                </div>
              </div>
            </Link>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
export default MostMovie;
