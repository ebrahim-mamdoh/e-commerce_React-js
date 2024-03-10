import React, { useContext, useEffect } from 'react';
import style from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { UserToken } from '../../Context/UserToken';

export default function Layout() {
  const { setUserToken } = useContext(UserToken);

  useEffect(() => {
    const storedUserToken = localStorage.getItem('userToken');

    if (storedUserToken) {
      setUserToken(storedUserToken);
    }
  }, [setUserToken]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
