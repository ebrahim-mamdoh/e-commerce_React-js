import axios from "axios";

const { createContext, useEffect, useState } = require('react')


export const CartContext = createContext();

export default function CartContextProvider(props) {

const [numOfCartItems, setnumOfCartItems] = useState(0)

 async function getCartCount(){
  let {data}= await getCart()
  if (data?.status=='success') {
    setnumOfCartItems(data.numOfCartItems)
  }
}
  useEffect(()=>{
    getCartCount()
  },[])





  let userToken = localStorage.getItem('userToken');
  let headers = {
    token: userToken
  };

  function addToCart(id) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
      productId: id
    }, {
      headers
    }).then((res) => res)
      .catch((err) => err);
  }
  function getCart() {
    //send headers to now whos this user
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers
    })
      .then((res) => res)
      .catch((err) => err)
  }

  function removeCartItem(id){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
      headers
    })
      .then((res) => res)
      .catch((err) => err)
  }

  function updateCart(id ,count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
      count
    },{
      headers
    })
      .then((res) => res)
      .catch((err) => err)
  }

  function onlinePayment(cartId ,shippingAddress){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
      shippingAddress
    },{
      headers
    })
      .then((res) => res)
      .catch((err) => err)
  }
  return (
    <CartContext.Provider value={{setnumOfCartItems,numOfCartItems,onlinePayment, addToCart, getCart, removeCartItem, updateCart}}>
      {props.children}
    </CartContext.Provider>
  );
}
