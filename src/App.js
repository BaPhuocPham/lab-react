import { useState, useEffect } from "react";
import "./App.css";
import { Films } from "./components/Films/Films";
import { FilmDetail } from "./components/FilmDetail/FilmDetail";
import { Contact } from "./components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuBar } from "./components/MenuBar/MenuBar";
import { About } from "./components/About/About";
import { News } from "./components/News/News";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeLocal = JSON.parse(localStorage.getItem("isDarkMode"));
    setIsDarkMode(isDarkModeLocal);
  }, []);

  const toogleSwitchTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <div
      className="App"
      style={
        !isDarkMode
          ? {
              backgroundColor: `#ffffff`,
            }
          : {}
      }
    >
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route
            path="/"
            element={
              <Films
                isDarkMode={isDarkMode}
                toogleSwitchTheme={toogleSwitchTheme}
              />
            }
          />
          <Route path="/detail/:slug" element={<FilmDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News isDarkMode={isDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
