import React, { useContext, useEffect, useState } from 'react'
import style from "./Cart.module.css"
import { CartContext } from '../../Context/CartContext'
import { Triangle } from 'react-loader-spinner'






export default function Cart() {
  const [cartItems, setCartItems] = useState(null)
  const [loading, setLoading] = useState(true)

 let {getCart}= useContext(CartContext)

async function getCartItems(){
let {data} =await getCart()
setCartItems(data)
setLoading(false)
}

useEffect(()=>{
  getCartItems()
},[])



  return <>

{loading?
  <div className='w-100 d-flex justify-content-center'>
  <Triangle
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>:
   <div className="row bg-main-Light">
  <h2>Shop Cart</h2>
  <h2>TotalPrice : {cartItems.totalCartPrice}</h2>
    </div>
}
   

  </>    

 
}
