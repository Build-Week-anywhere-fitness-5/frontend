import React, { useState } from "react";
import { useHistory } from 'react-router';
//import axios from 'axios'; //do we need this?
import createAuthorization from './../helpers/axiosWithAuth';

import { 
  Alert,
  Button, 
  Form, FormGroup,
  Label, 
  Input,
  Breadcrumb, BreadcrumbItem
} from 'reactstrap';


 const LogIn = () => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState();

  let history = useHistory(); 

  const handleChange = e => {
    setState({
      ...state, 
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(state.username === "" || state.password === "") {
      setError("Username and password fields are required.");
    } else {
      createAuthorization().post(`http://localhost:5000/api/login`, { //!!Not sure what our post endpoints are
        username: state.username,
        password: state.password
      })
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload); //setting the token
        history.push('/protected'); //after the token is verified it takes the user to the main classes home page
      })
      .catch(err => console.log(err));
    };
  }

  return (
    <Form>
    <div className="login-form">
      <Breadcrumb>
        <BreadcrumbItem>Login</BreadcrumbItem>
      </Breadcrumb>
    </div>

    <div>
      <form onSubmit={handleSubmit}>
        <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="text"
          name="username"
          placeholder="username"
          value={state.username}
          onChange={handleChange}
        />
        </FormGroup>

        <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
        />
        </FormGroup>
        <Button>Log In</Button>
      </form>
    </div>

    <Alert color="danger" className="error">{error}</Alert>
    </Form>
  );
}

export default LogIn;