import React from "react";
import { Image } from "react-bootstrap";
import { Ship } from "../assets/img";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const LastestNews = () => {
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
    <div className="home-enter my-4 w-95">
      <h3>We Have Best Lastest News</h3>
      <div className="lates-ses my-4">
        <OwlCarousel className="owl-theme" loop margin={35} nav {...options}>
          <div class="item">
            <Link to="/news">
              <div className="news-session">
                <div className="new-img">
                  <Image src={Ship} />
                </div>
                <div className="news-design">
                  <div className="new-dates">
                    <h6>Movie - 25th Jan 23</h6>
                  </div>
                  <h5>New Broken Dolls poster shared by movie Director</h5>
                  <p>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
export default LastestNews;
