import React from "react";
import { Image } from "react-bootstrap";
import { Movie, Ship } from "../assets/img";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ResentPost = () => {
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
        items: 3,
      },
    },
  };
  return (
    <div className="fit-ction my-4 w-95  ">
      <h3>Resent Post</h3>
      <div className="  my-2">
        <OwlCarousel className="owl-theme" loop margin={30} nav {...options}>
          <div class="item">
            <div className=" yout-vied">
              <Link to="/live/showsview" >
                <Image src={Movie} />
                <h5>King Of Skull</h5>
              </Link>
            </div>
          </div>
          <div class="item">
            <div className=" yout-vied">
              <Link to="/live/showsview" >
                <Image src={Ship} />
                <h5>King Of Skull</h5>
              </Link>
            </div>
          </div>

        </OwlCarousel>
      </div>
    </div>
  );
};
export default ResentPost;
