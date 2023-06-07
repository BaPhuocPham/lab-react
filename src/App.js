import { useState } from "react";
import "./App.css";
import { Films } from "./components/Films/Films";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toogleSwitchTheme = () => {
    console.log('change')
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div 
      className="App" 
      style={!isDarkMode ? { 
        backgroundColor: `#ffffff`, 
      } : {}}
    >
      <Films isDarkMode={isDarkMode} toogleSwitchTheme={toogleSwitchTheme} />
    </div>
  );
}

export default App;
