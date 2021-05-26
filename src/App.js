import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ClassesHomePage from "./components/ClassesHomePage";
import { Switch, Route, Link } from "react-router-dom";
import ClassCardForm from "./components/ClassCardForm";
import ClassCard from "./components/ClassCard";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar login="/" signup="/signup" />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <LogIn component={LogIn} />
            </Route>

            <Route exact path="/signup">
              <SignUp component={SignUp} />
            </Route>

            <Route exact path="/cardform">
              <ClassCardForm component={ClassCardForm} />
            </Route>
            <Route exact path="/card">
              <ClassCard component={ClassCard} />
            </Route>

            <Route exact path="/protected">
              <ClassesHomePage component={ClassesHomePage} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
