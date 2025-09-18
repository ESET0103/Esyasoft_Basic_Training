import React, { useState } from 'react'


const LoginForm = () => {

    const [LoginSate,setLoginState] =useState({userName:"", password: ""})

    const handleOnChangeUserName = (e) => {
        setLoginState({
            ...LoginSate, userName: e.target.value
        })
        // console.log(LoginSate)
    }

    const handleOnChangePassword = (e) => {
        setLoginState({
            ...LoginSate, password: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(LoginSate)
    }

  return (
    <div>
      Welcome Dude ..!
      <form onSubmit={handleSubmit}>
        <input type='text' value={LoginSate.userName} onChange={handleOnChangeUserName}/>
        <br/>
        <input type='password' value={LoginSate.password} onChange={handleOnChangePassword}/>
        <br/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
