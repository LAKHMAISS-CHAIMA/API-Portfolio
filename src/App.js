import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "./MainContent";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <MainContent darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
    </Router>
  );
}

export default App;
