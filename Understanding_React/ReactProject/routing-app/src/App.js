import React from 'react'
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ApiPage from './Pages/ApiPage';

function App() {
  return (
    <div className="App">
      welcome to router session
      {/* <HomePage/> */}

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/home' element= {<HomePage/>} />
          <Route path='/about' element = {<AboutPage/>} />
          <Route path='/api' element={<ApiPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
