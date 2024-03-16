import React from "react";
import style from "./MainSlider.module.css";
import Slider from "react-slick";
import slide2 from "../../Assets/images/slider-image-2.jpeg";
import slide1 from "../../Assets/images/slider-image-1.jpeg";
import slide3 from "../../Assets/images/slider-image-3.jpeg";
import img1 from '../../Assets/images/images (1).jpeg'
import img2 from '../../Assets/images/images (2).jpeg'

export default function MainSlider() {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className="container">
      <div className="row gx-0 mb-3">
        <div className="col-md-9">
          <Slider {...settings}>
            <img src={slide1} height={500} className="w-100" alt="" />
            <img src={slide2} height={500} className="w-100" alt="" />
            <img src={slide3} height={500} className="w-100" alt="" />
          </Slider>
        </div>
        <div className="col-md-3">
          <img src={img1} height={250} className='w-100' alt="" />
          <img src={img2} height={250} className='w-100' alt="" />
        </div>
      </div>
      </div>
    </>
  );
}
