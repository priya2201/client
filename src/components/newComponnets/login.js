import { useDispatch,useSelector } from "react-redux";

import {login} from '../../react-redux-new/authenticationAction'

import React from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    const dispatch=useDispatch()
    const navigate =useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const username=e.target.username.value;
        const password=e.target.password.value
        dispatch(login(username,password))
        .then(()=>{
            navigate ('/dashboard')
        })
        .catch((error)=>{
            console.error('login failed',error)
        })
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>  )
}

export default Login