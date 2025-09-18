import React from 'react'
import { useState } from 'react'

const Login = () => {
    // const [formData, setFormData] = useState({})
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        if(userName === "mantu" && password ===  "123" && email === "mantu@gmail.com"){
            console.log(e.target.value)
            alert("Login Successfully...")
            return 
        }
        else{

          alert("wrong credentials ...")
          return
        }
        
    }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' value={userName} onChange={(e) => {setUserName(e.target.value)}}></input>
        <input type ='email'  placeholder='abc@gmail.com' value ={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
        <input placeholder='password' type='password' value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
