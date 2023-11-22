//import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./components/Pages/About";
import { Home } from "./components/Pages/Home";
import { Login } from "./components/Pages/Login";
import { Signup } from "./components/Pages/Signup";
//import ErrorPage from "./components/Page/error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { NavLink, useNavigate } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            currentForm === "login" ? (
              <Login onFormSwitch={toggleForm} />
            ) : (
              <Signup />
            )
          }
        />
        <Route
          path="/signup"
          element={
            currentForm === "signup" ? (
              <Signup onFormSwitch={currentForm} />
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
