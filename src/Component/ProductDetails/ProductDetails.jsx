import React from "react";
import style from "./ProductDetails.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export default function ProductDetails() {
  let { id } = useParams();
  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  let { data, isLoading, isFetching, isError } = useQuery("details", () =>
    getProductDetails(id)
  );
  console.log(data?.data.data);
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3">
            <img className="w-100 " src={data?.data.data.imageCover} alt="" />
          </div>
          <div className="col-md-9 d-flex align-items-center">
            <div>
              <h2 className="h4">{data?.data.data.title}</h2>
              <p className="text-muted">{data?.data.data.description}</p>
            <h2 className="h5 fw-bold text-main">{data?.data.data.category.name}</h2>
              <div className="d-flex justify-content-between"><span>{data?.data.data.price}EGP</span>
                <span> <i className="fas fa-star rating-color"></i>{data?.data.data.ratingsAverage} </span>
                </div>
                <button type="button" class="w-100 btn bg-main text-white my-3">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
