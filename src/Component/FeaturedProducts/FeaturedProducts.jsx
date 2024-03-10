import React, { useEffect, useState } from 'react'
import style from "./FeaturedProducts.module.css"
import axios from 'axios'

export default function FeaturedProducts() {

  const [FeaturedProducts, setFeaturedProducts] = useState([])

  //return data from api and store it in var that name is data
async function getFeatureProducts(){
 let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
setFeaturedProducts(data.data)
}

useEffect(()=>{getFeatureProducts()},[])


  return <>
  <h3>featured product</h3>
  <div className="row">
      {FeaturedProducts.map((product)=>(
        <div key={product.id} className="col-md-3">
          <img src={product.imageCover} className='w-100' alt="" />

          <h2 className='h5'>{product.title}</h2>
           </div>
     ) )}
  </div>
  </>    

 
}
