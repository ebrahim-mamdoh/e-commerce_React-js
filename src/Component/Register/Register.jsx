import React, { useState } from "react";
import style from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

export default function Register() {
  let navigate = useNavigate();
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  async function registerSubmit(values) {
    setisLoading(true);
    try {
      const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);
      const { data } = response || {}; // تحقق من وجود البيانات
      if (data && data.message === "success") {
        setisLoading(false);
     
        navigate("/login");
      }
      console.log(data?.message); // استخدام optional chaining operator
    } catch (err) {
      setisLoading(false);
      seterror(err.response.data.message);
    }
  }
  let validation = Yup.object({
    name: Yup.string().min(3, "اقل عدد مسموح به من الحروف هو ثلاثه احرف").max(15, "max length must be 15 character").required("الاسم مطلوب"),
    email: Yup.string().email("Email invalid").required("الايميل مطلوب"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/,"password must start with upperCase and any lowerCase or number from 6:11")
      .required("كلمه السر مطلوبه"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "password and rePassword don`t match")
      .required(" كلمه السر مطلوبه"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "we need egyptian number")
      .required("رقم الهاتف مطلوب"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validation,
    onSubmit: registerSubmit,
  });

  return (
    <div className="w-75 mx-auto p-4 ">
      {error !== null ? <div className="alert alert-danger">{error}</div> : ""}
      <h1 className="mb-5">Register Now</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className="form-control mb-2"
          id="name"
          name="name"
        />
        {formik.errors.name && formik.touched.name ? (
          <div className="alert alert-danger py-2">{formik.errors.name}</div>
        ) : (
          ""
        )}

        <label htmlFor="email">Email</label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          className="form-control mb-2"
          id="email"
          name="email"
        />
        {formik.errors.email && formik.touched.email ? (
          <div className="alert alert-danger py-2">{formik.errors.email}</div>
        ) : (
          ""
        )}

        <label htmlFor="password">Password</label>
        <input value={formik.values.password}onChange={formik.handleChange} onBlur={formik.handleBlur} type="password"className="form-control mb-2" id="password" name="password"/>
        {formik.errors.password && formik.touched.password ? (
          <div className="alert alert-danger py-2">
            {formik.errors.password}
          </div>
        ) : (
          ""
        )}

        <label htmlFor="rePassword">rePassword</label>
        <input
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          className="form-control mb-2"
          id="rePassword"
          name="rePassword"
        />
        {formik.errors.rePassword && formik.touched.rePassword ? (
          <div className="alert alert-danger py-2">
            {formik.errors.rePassword}
          </div>
        ) : (
          ""
        )}

        <label htmlFor="phone">Phone</label>
        <input
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="tel"
          className="form-control mb-2"
          id="phone"
          name="phone"
        />
        {formik.errors.phone && formik.touched.phone ? (
          <div className="alert alert-danger py-2">{formik.errors.phone}</div>
        ) : (
          ""
        )}

        {isLoading ? (
          <button className="btn bg-main text-white mt-2" type="button">
            <i className="fas fa-spinner fa-spin"></i>
          </button>
        ) : (
          <button type="submit" className="btn bg-main text-white">
            Register
          </button>
        )}
      </form>
    </div>
  );
}
