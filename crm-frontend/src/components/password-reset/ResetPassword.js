import React from 'react'
import './ResetPassword.css'

const ResetPassword = ({email,password,handleChange,handleSubmit}) => {
  return (
    <div className="reset_form">
    <h1>Login Form</h1>
    <form action="" onSubmit={handleSubmit}>
      <div className="label">
    <i class="fa-solid fa-envelope"></i>
      <label htmlFor="">Email</label>
      </div>
      
      
      <input name='email' value={email} type="email" onChange={handleChange}/>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default ResetPassword