import React from "react";
import { Image } from "react-bootstrap";
import { Ship, Man } from "../assets/img";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const PopularEntertainment = () => {
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
        items: 3,
      },

      1000: {
        items: 4,
      },
    },
  };
  return (
    <div className="home-enter my-4 w-95">
      <h3>Popular Entertainment</h3>
      <div className="  my-4">
        <OwlCarousel className="owl-theme" loop margin={35} nav {...options}>
          <div class="item">
            <Link to="/entertainment">
              <div className="pop-movie">
                <Image src={Ship} />
              </div>
              <div className="movi-time mt-4">
                <p>
                  1hr 54min <span>.Action</span>
                </p>
                <h6>Ship of full moon</h6>
              </div>
            </Link>
          </div>
          <div class="item">
            <Link to="/entertainment">
              <div className="pop-movie">
                <Image src={Man} />
              </div>
              <div className="movi-time mt-3">
                <p>
                  1hr 54min <span>.Action</span>
                </p>
                <h6>Common Man's idea</h6>
              </div>
            </Link>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
export default PopularEntertainment;
