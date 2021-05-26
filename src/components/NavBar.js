import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import "../App.css";

export default function NavBar(props) {
  return (
    <div>
      <nav className="nav-container">
        <h1>Anywhere Fitness</h1>
        <div className="nav-links">
          <Link className="nav-button" to={LogIn}>
            Login
          </Link>
          <Link className="nav-button" to={SignUp}>
            Sign up
          </Link>
        </div>
      </nav>
    </div>
  );
}
