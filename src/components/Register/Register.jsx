import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import  { useState } from 'react'
import {regSchema} from '../schemas/register.jsx'
import { useNavigate } from 'react-router-dom'
import './Register.Module.css'
export default function Register() {
  let [error, setError] = useState([]);
  let navigate = useNavigate()
  let {errors, values , handleChange ,handleSubmit , touched ,handleBlur} = useFormik({
    initialValues:{
      email:"",
      name:"",
      password:"",
      cPassword:""
    }, validationSchema: regSchema,
    onSubmit: sendRegisterData,

  })

  async function sendRegisterData(values) {

    let { data } = await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup', values)
    // .catch((err) => {
    //   setStutasErrors(err.message.data.message);
    // })
    if (data.message == 'success') {
      console.log('welcome');
      navigate('/Login')
    } else {
      setError(data.err[0]);
    }
  
  }
  return (
    <>
    <div className='Register-body '>
      <div className="row my-5 ">
    
       <div className="col-xl-12">
        <div className="Register-child ">
    
      
        
      <form className='form  ' onSubmit={handleSubmit}>
        {error.map((err) => {
        return <div className='alert alert-danger'>{err.message}</div>
      })}    <h2 className='h2reg'>Create New Customer Account</h2>
     
      <h5 className='small text-black '>Sign-in Information</h5>
      <div className="form-reg d-flex">
      <div className="userinfo me-5 ">
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-black" >Email</label>
          <input type="email" placeholder="User Email"  value={values.email} onChange={handleChange} onBlur={handleBlur} className={`form-control ${errors.email && touched.email?"is-invalid":""}`} id="exampleInputEmail1" name='email' aria-describedby="emailHelp" />
      
        
        
          <label htmlFor="exampleInputName" className="form-label text-black">Name</label>
          <input type="text" value={values.name} placeholder="User Name" onChange={handleChange}  onBlur={handleBlur} className={`form-control ${errors.name && touched.name?"is-invalid":""}`} id="exampleInputName" name='name' aria-describedby="emailHelp" />
        </div>
        </div>
        <div className="pass">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label text-black">Password</label>
          <input type="password" placeholder="User password" className={`form-control ${errors.password && touched.password?"is-invalid":""}`} value={values.password} onBlur={handleBlur} onChange={handleChange}  name='password' id="exampleInputPassword1" />
       
          <label htmlFor="exampleInputPassword2" className="form-label text-black">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" className={`form-control ${errors.cPassword && touched.cPassword?"is-invalid":""}`} name='cPassword'value={values.cPassword}  onBlur={handleBlur} onChange={handleChange}  id="exampleInputPassword2" />
        </div>
</div>
</div>
        <button type="submit" className=" mt-3 text-white">Create</button>
      </form>
</div>
    </div>
    </div>
        </div>

    </>
  )
}
