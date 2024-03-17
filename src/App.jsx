import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Cart from './Component/Cart/Cart';
import Categories from './Component/Categories/Categories';
import Brands from './Component/Brands/Brands';
import Home from './Component/Home/Home';
import Notfound from './Component/Notfound/Notfound';
import Products from './Component/Products/Products';
import Login from './Component/Login/Login';
import Checkout from './Component/Checkout/Checkout';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Register from './Component/Register/Register';
import UserTokenProvider from './Context/UserToken';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import { Offline, Online } from "react-detect-offline";
import CartContextProvider from './Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';


export default function App() {
  let routers = createBrowserRouter(
    [
      {
        path: '/',element: <Layout />,
        children: [
          {  index:true, element: <ProtectedRoute><Home /></ProtectedRoute>  },
          { path: 'cart', element:<ProtectedRoute><Cart /></ProtectedRoute>  },
          { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
          { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
          { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
          { path: 'checkout/:id', element: <ProtectedRoute><Checkout /></ProtectedRoute> },
          { path: 'productDetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
          { path: 'login', element: <Login /> },
          { path: 'register', element:<Register />},
          { path: '*', element: <Notfound /> },
        ],
      },
    ]
  );

  return (
    <>
    <CartContextProvider>
    <UserTokenProvider>
    <RouterProvider router={routers}></RouterProvider>
    <div>
      {/* check your wifi  */}
    <Online>
    <div className='position-fixed bottom-0  right-0 mx-3 my-2'>
        <i className='fas fa-wifi text-main'></i>
      </div>
    </Online>
    <Offline>
      <div className='position-fixed bottom-0  right-0 mx-3 my-2'>
        <i className='fas fa-wifi text-danger'></i>
      </div>
    </Offline>
    </div>
    <Toaster/>
    </UserTokenProvider>
    </CartContextProvider>
    </>
  );
}
