import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cox from "../assets/Rectangle 1.png";
import sreemangal from "../assets/Sreemongol.png";
import sundarbans from "../assets/sundorbon.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-green-800 text-white p-3 rounded-full cursor-pointer z-10 hover:bg-gray-600"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer z-10 hover:bg-gray-600"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const DestinationSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const destinations = [
    { name: "Cox's Bazar", img: cox },
    { name: "Sreemangal", img: sreemangal },
    { name: "Sundarbans", img: sundarbans },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <div className="relative w-11/12 mx-auto my-10">
      <Slider {...settings}>
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="px-3 transition-transform duration-500 ease-in-out"
          >
            <div
              className={`relative overflow-hidden rounded-2xl shadow-lg transform ${
                index === activeSlide ? "scale-110 z-10" : "scale-90 opacity-70"
              } transition-all duration-700`}
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-center py-3">
                <h3 className="text-white font-bold text-lg">{dest.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationSlider;
