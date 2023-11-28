import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <div id="login-page">
        <div className="container-form">
          <h2 className="title-log">Login</h2>
          <form className="log-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="sample@example.com"
              id="email"
              name="email"
            />

            <label htmlFor="password">password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              required
              placeholder="**********"
              id="password"
              name="password"
            />

            <button type="submit">Log In</button>
          </form>
          <p className="text-sm text-white text-center">
            No account yet? <NavLink to="/signup">Sign up</NavLink>
            <br />
            <NavLink to="/selling">Selling</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
