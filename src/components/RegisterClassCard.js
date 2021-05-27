import React from 'react';
import ClassesContext from './../contexts/ClassesContext';



const newClass = {
    class_name: "",
    type: "Strength",
    date: "2021-05-22T04:00:00.000Z",
    start_time: "9:30 AM",
    duration_mins: 30,
    intensity: "Medium",
    location: "Fallsgrove Park",
    current_registered: 3,
    max_class_size: 15
}



const RegisterClassCard = props => {
    const { nameOfClass, typeOfClass, dateOfClass, startingTime, durationOfClass, 
        classIntensity, classLocation, maxClassSize, numCurrentlyRegistered  } = props;

    const { classes, setClasses } = useContext(ClassesContext);
    const [ classes, setClasses] = useState(newClass);//Not sure if this is right

       // /api/class/:class_id
        const handleEdititing = e => {
            e.preventDefault()
            createAuthorization().put(`api/class/:${class_id}`, classes)//the .put is what updates only to the specific friend with that id, to the database, the push (below) is what redirects us to that friendlist page
                .then(() => push('/protected')) //pushing up back to the FriendsList page, the protected page, adding our new friend 
                .catch(err => console.log(err))
        }
    
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

            