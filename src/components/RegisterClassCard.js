import React from 'react';

const RegisterClassCard = props => {
    const { nameOfClass, typeOfClass, dateOfClass, startingTime, durationOfClass, 
        classIntensity, classLocation, maxClassSize, numCurrentlyRegistered  } = props;

    return(
        <div className="class">
            <h1>Class Name: {nameOfClass}</h1>
            <p>Class Type: {typeOfClass}</p>
            <p>Date: {dateOfClass}</p>
            <p>Starting Time: {startingTime}</p>
            <p>Duration of Class: {durationOfClass}</p>
            <p>Intensity: {classIntensity}</p>
            <p>Location: {classLocation}</p>
            <p>Max Class Size: {maxClassSize}</p>
            <p>Currently Registered: {numCurrentlyRegistered}</p>
            

            <button>Add to Cart</button> 
            {/*How do we handle these buttons so they only display for the instructor but not for the client?*/}
            <button>Edit</button>
            <button>Delete</button>
            
        </div>
    );
};

export default RegisterClassCard;

            // dateOfClass={oneClass.date}
            // startingTime={oneClass.start_time}
            // durationOfClass={oneClass.duration_mins}
            // classIntensity={oneClass.intensity}
            // classLocation={oneClass.location}
            // numCurrentlyRegistered={oneClass.current_registered}  
            // maxClassSize={oneClass.max_class_size}