import React, { useContext } from 'react'
import style from "./Checkout.module.css"
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import { useFormik } from 'formik';

export default function Checkout() {
  let {id}=  useParams()
  console.log(id);

  // destruct the onlinePayment from cartContext
  let {onlinePayment} = useContext(CartContext)

  async function checkout(values){
     let response = await onlinePayment(id, values)
    console.log(response);
    if (response?.data.status=='success') {
      window.location.href= response.data.session.url
    }
  }
 
  let formik = useFormik({
    initialValues:{
      details:'',
      phone:'',
      city:''
    },
    onSubmit: checkout // corrected the case of onSubmit
  })

  return (
    <div className="w-50 mx-auto p-5">
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="details">details</label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.details} type="text" name='details' className='form-control mb-3' />
        
        <label htmlFor="phone">phone</label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="tel" name='phone' className='form-control mb-3' />
        
        <label htmlFor="city">city</label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} type="text" name='city' className='form-control mb-3' />

        <button className='btn bg-main w-100 text-white my-2'>Pay</button>
      </form>
    </div>
  );
}
