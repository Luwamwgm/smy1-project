//import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./components/Pages/About";
import { Home } from "./components/Pages/Home";
import { Login } from "./components/Pages/Login";
import { Signup } from "./components/Pages/Signup";
//import ErrorPage from "./components/Page/error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
