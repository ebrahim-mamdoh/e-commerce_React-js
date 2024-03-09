import React, { useState } from "react";
import style from "./Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

export default function Login() {
  let navigate = useNavigate();
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  async function loginSubmit(values) {
    setisLoading(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .catch((err) => {setisLoading(false);
        seterror(err.response.data.message);
      });
    if (data.message === "success") {
      setisLoading(false);
      navigate("/");
    }
    console.log(data.message);
  }
  let validation = Yup.object({
    email: Yup.string().email("Email invalid").required("الايميل مطلوب"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/,"password must start with upperCase and any lowerCase or number from 6:11").required("كلمه السر مطلوبه"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: loginSubmit,
  });

  return (
    <div className="w-75 mx-auto p-4 ">
      {error !== null ? <div className="alert alert-danger">{error}</div> : ""}
      <h1 className="mb-5">Login Now</h1>
      <form onSubmit={formik.handleSubmit}>
        
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
