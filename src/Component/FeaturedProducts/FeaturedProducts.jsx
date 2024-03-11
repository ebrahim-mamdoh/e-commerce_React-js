import React, { useEffect, useState } from "react";
import style from "./FeaturedProducts.module.css";
import axios from "axios";
import { useQuery } from "react-query";

export default function FeaturedProducts() {
  function getFeatureProducts(){
    return  axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
 let {data,isLoading,isFetching,isError}= useQuery('featuedProduct',getFeatureProducts)
 //using null seafty??????? to verify from arrive the first data
console.log(data?.data.data);

  // const [FeaturedProducts, setFeaturedProducts] = useState([])
  //return data from api and store it in var that name is data
  // async function getFeatureProducts(){
  //  let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  // setFeaturedProducts(data.data)
  // }
  // useEffect(()=>{getFeatureProducts()},[])

  return (
    <>
      <div className="row">
        {data?.data.data.map((product) => (
          <div key={product.id} className="col-md-3 col-lg-2   gy-4 gx-4 ">
            <img src={product.imageCover} className="w-100" alt="" />
            <h2 className="font-sm text-main fw-bold">
              {product.category.name}
            </h2>
            <h2 className="h5 fw-bold ">
              {product.title.split(" ").slice(0, 2).join(" ")}
            </h2>
            <div className="d-flex justify-content-between">
              <span>{product.price}EGP</span>
              <span>
                <i className="fas fa-star rating-color"></i>
                {product.ratingsAverage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
