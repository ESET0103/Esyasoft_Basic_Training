import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    const handleIncrementAndDecrement = (e) => {
        if(e.target.value === 1){
            setCount(count + 1);
        }
        else{
            setCount(count - 1);
        }
    }
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'red', fontSize:'200px',textAlign:'center', marginBottom: '20px'}}>{count}</h1>
      <button onClick={handleIncrementAndDecrement} value= {1} style={{color:'green', fontSize:'50px',textAlign:'center', marginRight: '30px'}}>hit me +1</button>
      <button onClick={handleIncrementAndDecrement} value= {2}  style={{color:'green', fontSize:'50px',textAlign:'center'}}>hit me -1</button>
    </div>
  )
}

export default Counter
