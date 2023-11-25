import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  //export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="title">
            SMY Children's Books and Toys Store
          </Link>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
