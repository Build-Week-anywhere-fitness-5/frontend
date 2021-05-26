import React,{useState} from "react";
import { useHistory } from 'react-router';
//import axios from 'axios'; //do we need this?
import createAuthorization from './../helpers/axiosWithAuth';
import "./signup.css";

export default function SignUp() {

  //  axios

const [State,setState] = useState({
  username : "",
  password : ""
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
    
    <label for="credentials">choose type:</label>

<select id="credentials">
  <option value="instructor">instructor</option>
  <option value="client">client</option>
</select>

    <input type="email"
              classname="form-control"
              id="username"

              placeholder="Enter email"
              value={State.username}
              onChange={Change}
              />
    
    <input type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={State.password}
                  onChange={Change}
                  />
  </div>
)
}