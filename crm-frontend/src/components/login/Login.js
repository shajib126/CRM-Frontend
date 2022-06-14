import React, { useState } from 'react'
import ResetPassword from '../password-reset/ResetPassword'
import './Login.css'

const Login = ({email,password,handleChange,handleSubmit}) => {
  
  return (
    <>
    
    <div className="login_form">
    <h1>Login Form</h1>
    <form action="" onSubmit={handleSubmit}>
      <div className="label">
    <i class="fa-solid fa-envelope"></i>
      <label htmlFor="">Email</label>
      </div>
      
      
      <input name='email' value={email} type="email" onChange={handleChange}/>
      <div className="label">
      <i class="fa-solid fa-key"></i>
      <label>Password</label>
      </div>
      <input name='password' value={password} type="password" onChange={handleChange} />
      <button type='submit'>Login</button>
      
      <a href="/reset">forgot password</a>
    </form>
    
    </div>
    </>
  )
}

export default Login