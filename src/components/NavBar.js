import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bu: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" className={classes.bu} href="/protected">
            Home
          </Button>
          <Button color="inherit" className={classes.bu} href="/signup">
            SignUp
          </Button>
          <Button color="inherit" className={classes.bu} href="/">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
