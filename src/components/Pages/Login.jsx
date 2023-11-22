import React, { useState } from "react";
//import { NavLink, useNavigate } from "react-router-dom";
//import { Navbar } from "./components/Navbar";
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="sample@example.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="**********"
          id="email"
          name="email"
        />
        <button>Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch["Signup"]}>
        Do not have an account? Create an account!
      </button>
    </>
  );
};
