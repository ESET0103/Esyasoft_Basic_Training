// import logo from './logo.svg';
// import './App.css';
import React, { createContext,useState } from "react";

import EventComponent from "./Components/EventComponent";
import Counter from "./Counter";
import Login from "./Components/Login";
import LoginForm from "./Components/Component1/LoginForm";
import UseEffectComponent from "./Components/Component1/UseEffectComponent";
import UseRefComponent from "./Components/Component1/UseRefComponent";
import ParentComponent from "./Components/Component1/ParentComponent";
import UseContextComponent from "./Components/Component1/UseContextComponent";
import UseReducerComponent from "./Components/Component1/UseReducerComponent";
import CallAnApiComponent from "./Components/Component1/CallAnApiComponent";




const Context = createContext(null);

export {Context};


function App(props) {

     const [theme, setTheme] = useState('light');
     const [count, setCount] = useState(0)




  return (
    <Context.Provider value={{
      theme: theme,
      setTheme: setTheme,
      count: count,
      setCount:setCount
    }}>
     {/* <Counter/> */}
     {/* <EventComponent/> */}
     {/* <Login/> */}
     {/* <LoginForm/> */}
      {/* <UseEffectComponent/> */}
      {/* <UseRefComponent/> */}
      {/* <ParentComponent/> */}
    {/* <UseContextComponent/> */}
    {/* <UseReducerComponent/> */}
    <CallAnApiComponent/>
    

    </Context.Provider>
    
  );
}

export default App;
