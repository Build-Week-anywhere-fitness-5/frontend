//Home page containing all the available classes
//user will be redirected to this page once they successfully log in
import React, { useEffect, useContext } from "react";
import ClassesContext from './../contexts/ClassesContext';
import RegisterClassCard from './RegisterClassCard';

  

import { Link } from 'react-router-dom';
import axiosWithAuth from '../helpers/axiosWithAuth';


////////////////////////////////////////////////////////
//base url: https://backend-ptct-anywhere-fitness.herokuapp.com/api/classes --to get all classes

////////////////////////////////////////////////////////
const ClassesHomePage = (props) => {
  
  const { classes, setClasses } = useContext(ClassesContext);
  //get request - fetching all class data, using the authentication token

  useEffect(() => {
    axiosWithAuth().get("/api/classes")
        .then( res => {
            console.log(res)
            setClasses(res.data)
        
        })
        .catch(err => console.log(err))
  }, [] ) 

  return (
    <div className="classes-container">
      {/* if `classes` is false/undefined/null, then `classes.map` won't run and blow up
       */}
      {classes && classes.map(oneClass => ( 
        <RegisterClassCard  
            key={oneClass.class_id}
            nameOfClass={oneClass.class_name}
            typeOfClass={oneClass.type}
            dateOfClass={oneClass.date}
            startingTime={oneClass.start_time}
            durationOfClass={oneClass.duration_mins}
            classIntensity={oneClass.intensity}
            classLocation={oneClass.location}
            numCurrentlyRegistered={oneClass.current_registered}  
            maxClassSize={oneClass.max_class_size}
            


        />
      ))}
    </div>
  )
};

export default ClassesHomePage;

      // class_id: 1,
      // class_name: "Full Body Athlete",
      // type: "HIIT",
      // date: "2021-05-20",
      // start_time: "6:00",
      // duration_mins: 30,
      // intensity: "High",
      // location: "Takoma Park",
      // current_registered: 5,
      // max_class_size: 15,