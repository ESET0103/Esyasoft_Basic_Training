import React, { useReducer } from 'react'

const UseReducerComponent = () => {

  const reducer = (state, action) => {

    switch(action.type){
      case 'inc':
        return {...state, count:state.count+1}
      case 'dec':
        return {...state, count:state.count-1}
      default:
        return state
    }
  };


  const [state, dispatch] = useReducer(reducer, {count:0})
    
  return (
    <div>
      <h1>{state.count}</h1>

      <button onClick={() => {dispatch({type:'inc'})}}>increment</button>
      <button onClick={() => {dispatch({type:'dec'})}}>decrement</button>

    </div>
  )
}

export default UseReducerComponent
