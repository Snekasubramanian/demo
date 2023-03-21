import React from "react";
import { Image } from "react-bootstrap";
import { Ship } from "../assets/img";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const PopularCarousel = () => {
  const options = {
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
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
        <OwlCarousel className="owl-theme " loop margin={30} nav {...options}>
          <div class="item">
            <div className="owl-desig">
              <Image src={Ship} />
              <p>Ship Of moon</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
export default PopularCarousel;
