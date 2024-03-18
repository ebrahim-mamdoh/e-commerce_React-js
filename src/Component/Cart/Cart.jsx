import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import { CartContext } from "../../Context/CartContext";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getCart, removeCartItem, updateCart } = useContext(CartContext);

  async function updateCount(id, count) {
    let { data } = await updateCart(id, count);
    console.log(data);
    setCartItems(data);
  }

  async function removeItem(id) {
    let { data } = await removeCartItem(id);
    setCartItems(data);
  }

  async function getCartItems() {
    let { data } = await getCart();
    setCartItems(data);
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <div className="container">
        {loading ? (
          <div className="w-100  d-flex justify-content-center ">
            <Triangle
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className=" bg-main-light  p-4 mt-2">
            <h2>Shop Cart</h2>
            {cartItems && cartItems.data ? (
              <>
                <h2 className="h6 text-main">
                  TotalPrice : {cartItems.data.totalCartPrice} EGP
                </h2>
                <h2 className="h6 text-main">
                  Total Cart Items : {cartItems.numOfCartItems} item
                </h2>
                {cartItems.data.products.map((product) => (
                  <div key={product._id} className="row border-bottom py-3">
                    <div className="col-md-1">
                      <img
                        src={product.product.imageCover}
                        className="w-100"
                        alt=""
                      />
                    </div>

                    <div className="col-md-11 d-flex justify-content-between">
                      <div>
                        <h3 className="h6 fw-bold">
                          {product.product.title
                            .split(" ")
                            .slice(0, 7)
                            .join(" ")}
                        </h3>
                        <h2 className="h6 text-main  p-2">
                          Price : {product.price} EGP
                        </h2>
                        <button
                          className="btn p-0"
                          onClick={() => removeItem(product.product.id)}
                        >
                          <i className="fas fa-trash-can text-main"></i> Remove
                        </button>
                      </div>

                      <div className="d-flex align-items-center">
                        <button
                          onClick={() =>
                            updateCount(product.product._id, product.count + 1)
                          }
                          className="btn btn-sm border "
                        >
                          +
                        </button>
                        <span className="p-2">{product.count}</span>
                        <button
                          onClick={() =>
                            updateCount(product.product._id, product.count - 1)
                          }
                          className="btn btn-sm border "
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <Link to={`/checkout/${cartItems.data._id}`}>
                  <button className="btn bg-main text-white">Checkout</button>
                </Link>
              </>
            ) : (
              <p>No items in the cart</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
