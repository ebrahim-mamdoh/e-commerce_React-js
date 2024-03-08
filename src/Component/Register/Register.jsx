import React from "react";
import style from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from 'yup'




export default function Register() {
  //display output from data 
  function registerSubmit(values){
    console.log(values );
    console.log(formik.errors.name);
  }

let valedation =Yup.object({
name:Yup.string().min(3,'اقل عدد من الاحرف هو3').max(15,'اقصي عدد من الاحرف هو15').required('الاسم مطلوب'),
email:Yup.string().email('الاميل غير صالح').required('الايميل مطلوب'),
password:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/ ,'يجب ان يبدا بحرف كبير ثم عد من الارقام او الاحرف').required('الايميل مطلوب'),
rePassword:Yup.string().oneOf([Yup.ref('password')],'غير متطابق').required('اعد كتابه الرقم السري'),
phone:Yup.string().matches(/^01[0125][0-9]{8}$/ ,' يجب ان يكون رقم مصري').required('رقم الهاتف مطلوب'),
})


  // setup UI for form
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    valedationSchema:valedation,
    onSubmit:registerSubmit,
  })




  return (
    <>
      <div className="w-75 mx-auto p-4">

      <h2>Register Now</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="mt-3">Name</label>
        <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="text" id="name" name="name" />
        {formik.errors.name && formik.touched.name?<div className="alert alert-danger">{formik.errors.name}</div>:''}

        <label htmlFor="email" className="mt-3">Email</label>
        <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="email" id="email" name="email" />
        {formik.errors.email && formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>:''}

        <label htmlFor="password" className="mt-3">Password</label>
        <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="password" id="password" name="password" />
        {formik.errors.password && formik.touched.password?<div className="alert alert-danger">{formik.errors.password}</div>:''}

        <label htmlFor="rePassword" className="mt-3">rePassword</label>
        <input value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="password" id="rePassword" name="rePassword" />
        {formik.errors.rePassword && formik.touched.rePassword?<div className="alert alert-danger">{formik.errors.rePassword}</div>:''}

        <label htmlFor="phone" className="mt-3">Phone</label>
        <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="tel" id="phone" name="phone" />
        {formik.errors.phone && formik.touched.phone?<div className="alert alert-danger">{formik.errors.phone}</div>:''}

        <button type="submit" className="btn bg-main text-white mt-3">Register</button>
      </form>
      </div>
      
    </>
  );
}
