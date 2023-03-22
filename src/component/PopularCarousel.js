import React from "react";
import { Image } from "react-bootstrap";
import { Ship, Man } from "../assets/img";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const PopularCarousel = () => {
  const options = {
    responsiveClass: true,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3500,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 3,
      },

      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className="pop-week my-3">
      <h3>Popular Shows this week</h3>
      <div className="  my-3">
        <OwlCarousel className="owl-theme " loop margin={20} nav {...options}>
          <div class="item">
            <Link to="/entertainment/moviedetails">
              <div className="owl-desig">
                <Image src={Ship} />
                <p>Ship Of moon</p>
              </div>
            </Link>
          </div>
          <div class="item">
            <Link to="/entertainment/moviedetails">
              <div className="owl-desig">
                <Image src={Man} />
                <p>Common Man's idea</p>
              </div>
            </Link>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
export default PopularCarousel;
