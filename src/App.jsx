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
import UserTokenProvider from './Context/UserToken';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';


export default function App() {
  let routers = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <ProtectedRoute><Home /></ProtectedRoute>  },
          { path: 'cart', element:<ProtectedRoute><Cart /></ProtectedRoute>  },
          { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
          { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
          { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
          { path: 'login', element: <Login /> },
          { path: 'register', element:<Register />},
          { path: '*', element: <Notfound /> },
        ],
      },
    ]
  );

  return (
    <>
    <UserTokenProvider>
    <RouterProvider router={routers}></RouterProvider>
    </UserTokenProvider>
    </>
  );
}
