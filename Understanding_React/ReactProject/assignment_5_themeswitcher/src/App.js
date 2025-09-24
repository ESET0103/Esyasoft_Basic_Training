import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import UseContextComponent from './UseContextComponent';

const Theme = createContext(null);
export {Theme};

function App() {
  const [theme,setTheme] = useState(0);
  return (
    <Theme.Provider className="App" value={[theme, setTheme]}>
      <button style={{background:'green'}} onClick={() => {setTheme(theme => 1-theme)}}>Toggle Theme</button>
      <UseContextComponent/>
    </Theme.Provider>
  );
}

export default App;
