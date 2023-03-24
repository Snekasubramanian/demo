import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import NewsCart from "./NewsCart";
const CurrentNews = () => {
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
        <div className="other-news my-4 w-95">
            <h3>We Have Best Latest News</h3>
            <div className="lates-ses my-4 px-3">
                <OwlCarousel className="owl-theme" loop margin={35} nav {...options}>
                    <div class="item">
                        <Link to="/news/newsview">
                            <NewsCart />
                        </Link>
                    </div>

                </OwlCarousel>
            </div>
        </div>
    );
};
export default CurrentNews;
