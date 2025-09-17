import React from 'react'

const EventComponent = () => {


    const handleOnclick = () =>{
        console.log("button is clicked")
    }

    const handleOnChange = (e) => {
        // console.log(e.target.value)
        if(e.target.value === "Mantu"){
            console.log("Yes")
        }
    }


  return (
    < >
        Welcome to Events
        <button onClick={handleOnclick}>
            Click me
        </button>
        <div style={{height:'100px', background:'#b460ff', textAlign:'center', display:'flex', justifyContent:'center',alignItems:'center', fontWeight:'bold', fontSize: '50px', color:'white'}}>
            This is Div block...
        </div>
        <input type=' text' min = {1} max={10} onChange={handleOnChange}></input>

    </>
  )
}

export default EventComponent
