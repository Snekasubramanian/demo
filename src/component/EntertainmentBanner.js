import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import { Ship, Man } from "../assets/img";
import BanneDetails from "../component/BanneDetails";
const EntertainmentBanner = () => {
  return (
    <div className="carousel-design">
      <Carousel>
        <Carousel.Item>
          <Image className=" w-100" src={Ship} alt="First slide" />
          <Carousel.Caption>
            <BanneDetails />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className=" w-100" src={Man} alt="Second slide" />
          <Carousel.Caption>
            <BanneDetails />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
            <Image className=" w-100" src={Ship} alt="Third slide" />

            <Carousel.Caption>
              <BanneDetails />
            </Carousel.Caption>
     
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default EntertainmentBanner;
