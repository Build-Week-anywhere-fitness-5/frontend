import React, { useState, useEffect } from 'react';
import PrivateRoute from "./components/PrivateRoute";


import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ClassesHomePage from "./components/ClassesHomePage";
//import RegisterClass from "./components/RegisterClassPage"; //Struggling with my naming systems here


import { BrowserRouter as Router, Route } from "react-router-dom";
//*Removed Switch and Link - they were not being used
import ClassCardForm from "./components/ClassCardForm";
import ClassesContext from './contexts/ClassesContext';
import ClassCard from "./components/ClassCard";
import NavBar from './components/NavBar'

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
    
    <NavBar login = '/' signup = '/signup'/>
    
    <Router>
      <div className="App">
        <ClassesContext.Provider value={{ classes, setClasses }}>
          <Route exact path="/">
            <LogIn />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/card">
            <ClassCard />
          </Route>

          <PrivateRoute exact path="/protected" component={ClassesHomePage} />
        </ClassesContext.Provider>
      </div>
    </Router>
    </div>
  );
}

export default App;
