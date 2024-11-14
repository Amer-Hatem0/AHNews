import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logSchema } from '../schemas/login.jsx'

import { Link } from 'react-router-dom';

export default function Login({ getUser }) {
  let [error, setError] = useState([]);
  let navigate = useNavigate()
  let { errors, values, handleChange, handleSubmit, touched, handleBlur } = useFormik({
    initialValues: {
      email: "",

      password: ""

    }, validationSchema: logSchema,
    onSubmit: sendRegisterData,

  })

  async function sendRegisterData(values) {

    let { data } = await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signin', values)
    if (data.message === 'success') {
      console.log('registred');
      localStorage.setItem('token', data.token)
      getUser()
      navigate('/')
    } else {
      setError(data.err[0]);
    }

  }
  return (
    <>
      <div className='Register-body my-5'>

        <div className="log-child log ">
          <div className="row">

            <div className="col-md-6">
              <form className='w-75  mt-5 form ' onSubmit={handleSubmit}>
                {error.map((err) => {
                  return <div className='alert alert-danger'>{err.message}</div>
                })}

                <div className="mb-3">
                  <h3 className='Registered-Customers text-dark h2reg'>Registered Customers</h3>
                  <p className='p-Registered '>If you have an account, sign in with your email address</p>
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" placeholder="User Email" value={values.email} onChange={handleChange} onBlur={handleBlur} className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`} id="exampleInputEmail1" name='email' aria-describedby="emailHelp" />


                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" placeholder="User password" className={`form-control ${errors.password && touched.password ? "is-invalid" : ""}`} value={values.password} onBlur={handleBlur} onChange={handleChange} name='password' id="exampleInputPassword1" />
                </div>


                <button type="Submit" className="mt-3 text-white btn-Submit ">Submit</button>
              </form></div>
            <div className="col-md-6 log-Create">
              <h3 className='text-dark mt-3 h2reg'>New Customers</h3>
              <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
              <button type="Submit" className='btn-Create'>
                <Link className=" nav-link text-white d-block " to="register" > Create an Account </Link>

              </button>

            </div>
          </div>
        </div>
      </div>


    </>
  )
}
