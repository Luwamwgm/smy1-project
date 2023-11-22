import React, { useState } from "react";

export const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Full Name</label>
        <input value={name} type="text" Placeholder=" full name" />
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
        <button>Sign Up</button>
      </form>
      <button onClick={() => props.onFormSwitch["Login"]}>
        {" "}
        Already have an account? Login here!
      </button>
    </>
  );
};
