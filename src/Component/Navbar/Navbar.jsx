import React, { useContext } from 'react'
import style from "./Navbar.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { UserToken } from '../../Context/UserToken'
import logo from '../../Assets/images/freshcart-logo.svg'
import { CartContext } from '../../Context/CartContext'
export default function Navbar() {
let navigate= useNavigate

let {numOfCartItems} =useContext(CartContext)

  //استدعيت التوكن بتاعت اليوزر
let {userToken,setUsertoken} =useContext(UserToken)


// logOut that do :
// 1- delet token
// 2- delet localStorage
// 3- navegate
function logOut(){
  localStorage.removeItem('userToken');
  setUsertoken(null)
  navigate('/login')
}



  return <>
<nav className="navbar navbar-expand-lg bg-body-tertiary position fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
     {/* //////// hide Navbar if you dont have a token ////////// use ternary oprator */}
    {userToken?<ul className="navbar-nav">
        
      <li className="nav-item">
        <Link className="nav-link"to={''}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to={'products'}>Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to={'categories'}>Categories</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to={'features'}>Features</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to={'cart'}><i className='fas fa-shopping-cart '></i> {numOfCartItems}</Link>
      </li>
    </ul>:''
    
  }


      <ul className="navbar-nav ms-auto">
        <li className='d-flex align-items-center'>
          <i className='fab fa-facebook mx-1'></i>
          <i className='fab fa-youtube mx-1'></i>
          <i className='fab fa-instagram mx-1'></i>
          <i className='fab fa-tiktok mx-1'></i>
        </li>
     {/* //////// hide login &register if you have a token ////////// use ternary oprator */}

        {userToken?<li className="nav-item">
          <Link onClick={()=>logOut()} className="nav-link"to={'logout'}>Logout</Link>
        </li>
        :<> <li className="nav-item">
        <Link className="nav-link"to={'login'}>Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to={'register'}>Register</Link>
      </li></> }
        
        
      </ul>
    </div>
  </div>
</nav>  
  </>    

 
}
