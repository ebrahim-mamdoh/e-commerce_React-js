import axios from "axios";

const{createContext}=require('react')


export const CartContext = createContext();

export default function CartContextProvider(props) {
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
function getCart(){
  //send headers to now whos this user
  return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
    headers
  })
  .then((res)=>res)
  .catch((err)=>err)
}
  return (
    <CartContext.Provider value={{ addToCart,getCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
