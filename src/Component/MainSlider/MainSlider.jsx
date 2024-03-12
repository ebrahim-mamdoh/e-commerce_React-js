import React from 'react'
import style from "./MainSlider.module.css"
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return <>
  <div>MainSlider</div>
  <Slider {...settings}></Slider>

  </>    

 
}
