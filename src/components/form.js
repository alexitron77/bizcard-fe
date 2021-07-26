import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "justify-items": "right",
    "align-items": "center",
    "flex-direction": "column",
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
      "flex-direction": 'column',
      "justify-content": 'center',
      "color": "white",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="firstname" required label="First Name" />
      <TextField id="lastname" required label="Last Name" />
      <TextField id="role" label="Role" />
      <TextField id="company" required label="Company" />
      <TextField id="country" required label="Country" />
      <TextField id="phonenumber" label="PhoneNumber" />
      <TextField id="website" label="Website" />
      <TextField id="linkedin" label="LinkedIn" />
    </form>
  );
}