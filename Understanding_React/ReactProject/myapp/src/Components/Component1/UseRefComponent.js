import React, { useRef } from 'react'

const UseRefComponent = () => {

    // const [ref, setRef] = useRef(null);
    const ref = useRef(null)
    const handlonClick = () => {
        ref.current.focus();

    }
  return (
    <div>
      <input ref= {ref}></input>
      <button onClick={handlonClick}>Focus</button>
    </div>
  )
}

export default UseRefComponent
