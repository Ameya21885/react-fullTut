import { Button } from '@mui/material'
import React,{useState} from 'react'

const LoginLogout = () => {

    const Login = "Login"
    const LogOut= "LogOut"
    const [login, setLogin]= useState(Login)

    const CheckLogin=()=>{
        if ("Login" === login) {
            setLogin("LogOut")
        }else if("LogOut"=== LogOut){
            setLogin("Login")
        }
    }

  return (
    <>
  <h1>Events</h1>
    <Button onClick={CheckLogin}>{login}</Button>
    </>
  )
}

export default LoginLogout