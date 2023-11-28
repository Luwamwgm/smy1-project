import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div id="signup-page">
      <div className="container-form">
        <h2 className="title-signup">Signup</h2>
        <form className="sign-form" onSubmit={handleSubmit}>
          <label htmlFor="name"> Full Name</label>
          <input
            value={name}
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="full name"
            id="name"
          />
          <br />
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="sample@example.com"
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="**********"
            id="email"
            name="email"
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
      </div>
    </div>
  );
};
