//Home page containing all the available classes
//user will be redirected to this page once they successfully log in
import React, { useContext } from "react";
import ClassesContext from './../contexts/ClassesContext';
import RegisterClassCard from './RegisterClassCard';

const ClassesHomePage = (props) => {
  
  //post request
  const { classes, setClass } = useContext(ClassesContext);

  return (
    <div className="classes-container">
      {/* if `classes` is false/undefined/null, then `classes.map` won't run and blow up
       */}
      {classes && classes.map(oneClass => ( 
        <RegisterClassCard  
            key={oneClass.class_id}
            nameOfClass={oneClass.class_name}
            maxClassSize={oneClass.max_class_size}
            numCurrentlyRegistered={oneClass.current_registered}       
        />
      ))}
    </div>
  )
};

export default ClassesHomePage;
