import React from 'react'
import style from "./MainSlider.module.css"
import Slider from "react-slick";
import slide2 from '../../Assets/images/slider-image-2.jpeg'
import slide1 from '../../Assets/images/slider-image-1.jpeg'
import slide3 from '../../Assets/images/slider-image-3.jpeg'


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
  <div className="row">
    <div className="col-md-10">
    <Slider {...settings}>
      <img src={slide1} className='w-100' alt="" />
      <img src={slide1} className='w-100' alt="" />
      <img src={slide1} className='w-100' alt="" />
    </Slider>

    </div>
  </div>
  <div>MainSlider</div>

  </>    

 
}
