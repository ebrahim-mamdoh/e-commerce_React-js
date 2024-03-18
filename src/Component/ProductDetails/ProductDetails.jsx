import React, { useContext } from "react";
import style from "./ProductDetails.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Slider from "react-slick";
import {Helmet} from "react-helmet";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {
  let {addToCart ,setnumOfCartItems}= useContext(CartContext)
  async function addCart(id){
    let {data} =await addToCart(id)
    if (data.status=='success') {
      //to give you message add to cart
      toast.success(data.message,{
         duration: 4000,
        position: 'top-center',
      });
      setnumOfCartItems(data.numOfCartItems)
    }
  }
  let { id } = useParams();
  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  let { data, isLoading, isFetching, isError } = useQuery(
    "details",
    () => getProductDetails(id),
    {
      staleTime: 5000,
    }
  );
  var settings = {
    dots: true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(data?.data.data);

  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>{data?.data.data.title}</title>
            </Helmet>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3">
            <Slider {...settings}>
           {data?.data.data.images.map((image)=><img src={image} alt="product details" className="w-100"/>)}
            </Slider>
          </div>
          <div className="col-md-9 d-flex align-items-center">
            <div>
              <h2 className="h4">{data?.data.data.title}</h2>
              <p className="text-muted">{data?.data.data.description}</p>
              <h2 className="h5 fw-bold text-main">
                {data?.data.data.category.name}
              </h2>
              <div className="d-flex justify-content-between">
                <span>{data?.data.data.price}EGP</span>
                <span>
                  {" "}
                  <i className="fas fa-star rating-color"></i>
                  {data?.data.data.ratingsAverage}{" "}
                </span>
              </div>
              <button onClick={()=>addCart(data?.data.data.id)} type="button" class="w-100 btn bg-main text-white my-3">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
