import React, { useState, useEffect } from 'react';
import PrivateRoute from "./components/PrivateRoute";


import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ClassesHomePage from "./components/ClassesHomePage";

import ClassCardForm from "./components/ClassCardForm";
import ClassesContext from './contexts/ClassesContext';
import ClassCard from "./components/ClassCard";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
//With Context API, where am I storing my data...and how am I using the setClasses?
  const [classes, setClasses] = useState([
    {
      class_id: 1,
      class_name: "Full Body Athlete",
      type: "HIIT",
      date: "2021-05-20",
      start_time: "6:00",
      feduration_mins: 30,
      intensity: "High",
      location: "Takoma Park",
      current_registered: 5,
      max_class_size: 15,
    }
  ]);

   
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
