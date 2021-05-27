import React, { useState } from "react";
import { useHistory } from "react-router";

import createAuthorization from "./../helpers/axiosWithAuth";
import "./signup.css";

export default function SignUp() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

<<<<<<< HEAD
  const change = (a) => {
    const { id, value } = a.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <div>
      <label for="credentials">choose type:</label>

      <select id="credentials">
        <option value="instructor">instructor</option>
        <option value="client">client</option>
      </select>

      <input
        type="email"
        classname="form-control"
        id="username"
        placeholder="Enter email"
        value={state.username}
        onChange={change}
      />
=======
  //  axios

const [State,setState] = useState({
  username : "",
  password : "",
  role: ''
})

const Change = (a) => {
  const {id , value} = a.target
  setState(prevState => ({
    ...prevState,
    [id] : value
  }))
}
return(
  <div >
    
    <label for="role">choose type:</label>

    <select 
        id = 'role'
        value = {State.role}
        onChange = {Change}
        >
          <option value = ''>-- Select an Option --</option>
          <option value ='client'>Client</option>
          <option value ='instructor'>Instructor</option>
        </select>
>>>>>>> 5bb2d3fcacf0553f69a8f12c35cfcb530cca5798

      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Password"
        value={state.password}
        onChange={change}
      />
    </div>
  );
}
