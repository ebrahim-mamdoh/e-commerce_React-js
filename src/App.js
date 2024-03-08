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
import Register from './Component/Register/Register';

export default function App() {
  let routers = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'cart', element: <Cart /> },
          { path: 'brands', element: <Brands /> },
          { path: 'categories', element: <Categories /> },
          { path: 'products', element: <Products /> },
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
          { path: '*', element: <Notfound /> },
        ],
      },
    ]
  );

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
