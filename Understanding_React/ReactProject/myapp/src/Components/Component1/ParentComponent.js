import React,{useState} from 'react'

const ParentComponent = () => {

  const [count, setCount] = useState(0);
   const increment = () => {
    setCount(prev => prev + 1);
    }

  const decrement = () => {
    setCount(prev => prev-1);
  }

  return (
    <div>
      <h1>Welcome to the parent component...</h1>
      <Sibling1 count = {count}/>
      <Sibling2 increment={increment} decrement={decrement}/>
    </div>
  )
}


const Sibling1 = ({count}) => {
  return (
    <>
      <div>{count}</div>
    </>
  )
}

const Sibling2= ({increment, decrement}) => {

 
    return (
      <>
      <button onClick={increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
      </>
    )
}




export default ParentComponent
