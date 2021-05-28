import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";(*This is not being used)
import Input from "@material-ui/core/Input";
//import InputLabel from "@material-ui/core/InputLabel"; (*This is not being used)
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
}));

export default function ClassCardForm() {
  const initialValues = {
    amount: "",
  };
  const classes = styles();
  const [values, setValues] = useState(initialValues);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-01-01T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className={classes.form}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid
          container
          styles={{ minHeight: "100vh" }}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Class Name"
              variant="outlined"
              style={{ paddingTop: "10px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Class Type"
              variant="outlined"
              style={{ paddingTop: "10px" }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-number"
              label="Duration"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: 0, max: 120 } }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-number"
              label="Intensity"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-number"
              label="Attendees"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: 0, max: 30 } }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Class Type"
              variant="outlined"
              style={{ paddingTop: "10px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="standard-adornment-amount"
              value={values.amount}
              onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} spacing={3}>
            <Button color="primary">Edit</Button>
            <Button color="secondary">Remove</Button>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </form>
  );
}
