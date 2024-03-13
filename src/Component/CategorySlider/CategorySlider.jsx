import React, { useEffect, useState } from 'react'
import style from "./CategorySlider.module.css"
import Slider from "react-slick";
import axios from 'axios';
import {  useQuery } from 'react-query';

export default function CategorySlider() {
  const [categoris, setCategoris] = useState(null)
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
  async function getCategories(){
   let{data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  setCategoris(data.data)

  }
 useEffect(()=>{
  getCategories()
 },[])
 return (
  <>
  <div className='container'>


  <h2 className='h4'>Shop popular Category</h2>
  <div className='my-2 '>
     <Slider {...settings}>
      {categoris && categoris.map((category) => (
        <img key={category._id} src={category.image} height={200} alt={category.name} className="w-100 " />
      ))}
    </Slider>
  </div>
  </div>
  </>
);

}
