import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios'; //do we need this?
import createAuthorization from "./../helpers/axiosWithAuth";
import {
  
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";




const LogIn = () => {
  const [error, setError] = useState();
  const [state, setState] = useState({
    username: "", 
    password: ""
  });

  let history = useHistory();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.username === "" || state.password === "") {
      setError("Username, password, and role fields are required.");
    } else {
      createAuthorization()
        .post(
          `https://backend-ptct-anywhere-fitness.herokuapp.com/api/auth/login`, state)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.payload); //setting the token
          history.push("/protected"); //after the token is verified it takes the user to the main classes home page
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="login-form">
        <Breadcrumb>
          <BreadcrumbItem>Login</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
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
     </div>
  </Form>
  );
};

export default LogIn;
