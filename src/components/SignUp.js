import React, { useState } from "react";
//import { useHistory } from "react-router";

//import createAuthorization from "./../helpers/axiosWithAuth";
import "./signup.css";

export default function SignUp() {
  const [state, setState] = useState({
    username : "",
    password : "",
    role: ''
  })
  
  const change = (a) => {
    const { id, value } = a.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div >
      <label for="role">choose type:</label>
      <select 
        id='role'
        value={state.role}
        onChange={change}
      >
        <option value = ''>-- Select an Option --</option>
        <option value ='client'>Client</option>
        <option value ='instructor'>Instructor</option>
      </select>

      <input
        type="email"
        classname="form-control"
        id="username"
        placeholder="Enter email"
        value={state.username}
        onChange={change}
      />

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
