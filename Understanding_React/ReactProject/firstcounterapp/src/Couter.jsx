import React from 'react'
import { useState } from 'react';

function Couter() {
    const [counter, setCounter] = useState(0);

    const handleDecrement = () => {
        setCounter(counter-1);
    }

    const handleIncrement = () => {
        setCounter(counter+1);
    }

  return (
    <div>
        <h2>{counter}</h2>
      <button onClick={handleIncrement}>Click +1</button>
      <button onClick={handleDecrement}>Click -1</button>
    </div>
  )
}

export default Couter
