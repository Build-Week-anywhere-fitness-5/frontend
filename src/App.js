import React, { useState } from 'react';
import PrivateRoute from "./components/PrivateRoute";


import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ClassesHomePage from "./components/ClassesHomePage";

import ClassCardForm from "./components/ClassCardForm";
import ClassesContext from './contexts/ClassesContext';
import ClassCard from "./components/ClassCard";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [classes, setClasses] = useState([
    {
      class_id: 1,
      class_name: "Full Body Athlete",
      type: "HIIT",
      date: "2021-05-20",
      start_time: "6:00",
      duration_mins: 30,
      intensity: "High",
      location: "Takoma Park",
      current_registered: 5,
      max_class_size: 15,
    }
  ]);

   
  return (
    <div>
      <ClassesContext.Provider value={{ classes, setClasses }}>
        <Router>

          <NavBar login="/" signup="/signup" />

          <div className="App">
            <Switch>

              <Route exact path="/">
                <LogIn/>
              </Route>
                
              <Route exact path="/signup" component={SignUp}/>

              <PrivateRoute exact path="/cardform" component={ClassCardForm}/>   
                
              <PrivateRoute exact path="/card" component={ClassCard}/>

              <PrivateRoute exact path="/protected" component={ClassesHomePage}/>
              
            </Switch>
          </div>

        </Router>
      </ClassesContext.Provider>
    </div>
  );
}

export default App;
