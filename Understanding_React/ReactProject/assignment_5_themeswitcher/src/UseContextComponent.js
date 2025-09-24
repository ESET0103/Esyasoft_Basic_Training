import React, { useContext } from 'react'
import { Theme } from './App'

const UseContextComponent = () => {

    const [theme, setTheme] = useContext(Theme)
  return (
    <>
      {theme ? (
        <div style={{ background: 'black', color: 'white', height:'100vh', width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <h1>Dark mode is enabled...</h1>
        </div>
      ) : (
        <div style={{ height:'100vh',display:'flex', alignItems:'center', justifyContent:'center'}} >
          <h1>Light mode is enabled...</h1>
        </div>
      )}
    </>
  );
}

export default UseContextComponent
