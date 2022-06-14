import React, { useState } from 'react'
import Login from '../../components/login/Login'
import ResetPassword from '../../components/password-reset/ResetPassword'

const Entry = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const handleChange = (e) =>{
        const {name,value} = e.target
        if(name == 'email'){
            setEmail(value)
        }else{
            setPassword(value)
        }
        

    }
    const handleSubmit = e =>{
        e.preventDefault();
    if(!email || !password){
        alert('please fill the field')
    }
      
}


  return (
    <div>
             <Login handleSubmit={handleSubmit} handleChange={handleChange}  email={email} password={password}/>
            
        

        
        
    </div>
  )
}

export default Entry