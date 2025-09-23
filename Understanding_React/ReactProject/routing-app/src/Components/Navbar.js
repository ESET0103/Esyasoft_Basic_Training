import React from 'react'
import {  Link } from 'react-router-dom'

const Navbar = () => {

    // const Navigate = useNavigate()

  return (
    <div style={{ width:'100%', background:'blue', borderRadius:'60px' }}>
      <div style={{paddingLeft:'10px', paddingTop:'1px', paddingBottom:'1px'}}>
        <ul>
            <li> <Link to ='/home' style={{color:'white'}}>Home </Link> </li>
            <li> <Link to ='/about' style={{color:'white'}}>About </Link> </li>
            <li> <Link to ='/api' style={{color:'white'}}>API </Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
