//Home page containing all the available classes
//user will be redirected to this page once they successfully log in
// import React, { useState } from "react";
//route path '/protected'

import React, { useState } from "react";
const ClassesHomePage = () => {
  const [classList, setClassList] = useState({
    class_id: 1,
    class_name: "Full Body Athlete",
    type: "HIIT",
    date: "2021-05-20",
    start_time: "High",
    duration_mins: 30,
    intensity: "High",
    location: "Takoma Park",
    current_registered: 5,
    max_class_size: 15,
  });

  return <div>Test</div>;
};

export default ClassesHomePage;
