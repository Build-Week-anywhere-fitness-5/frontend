import React from "react";
import { Route, Redirect } from "react-router";



const PrivateRoute = ({ component, ...rest }) => {
  if (localStorage.getItem('token')) {
    return (
      <Route component={component} {...rest} />
    )
  }
  else {
    return (
      <Redirect to="/" />
    )
  }
};

export default PrivateRoute;

//This will redirect our user to the login page if they are not logged in.