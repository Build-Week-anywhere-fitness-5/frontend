import styled from "styled-components";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import "../App.css";

export default function NavBar(props) {
  return (
    <div>
      <nav className="nav-container">
        <h1>Anywhere Fitness</h1>
        <div className="nav-links">
          <Link className="nav-button" to="/">
            Login
          </Link>
          <Link className="nav-button" to="/signup">
            Sign up
          </Link>
        </div>
      </nav>
    </div>
  );
}
