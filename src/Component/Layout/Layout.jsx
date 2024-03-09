import React, { useContext, useEffect } from 'react'
import style from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { UserToken } from '../../Context/UserToken'

export default function Layout() {
// handel user refresh 
 let {setUserToken}=useContext(UserToken)
 if(localStorage.getItem('userToken')){
  setUserToken(localStorage.getItem('userToken'))
}
  // to run this code in the component Didmount
  useEffect(()=>{
    if(localStorage.getItem('userToken')){
      setUserToken(localStorage.getItem('userToken'))
    }
  },[])

  return <>

  <Navbar/>
  <Outlet></Outlet>
  <Footer/>
  </>    

 
}
