import React, { useState } from 'react';
import { Container, TextField, Button, Paper, makeStyles , Typography} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    // backgroundColor: '#283593', // Adjust the color to match the screenshot background
  },
  paper: {
    width : '50vw',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  form: {
    width : '40vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
}));

const ApplicationForm = () => {
  const classes = useStyles();
  const [applicationNumber, setApplicationNumber] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const validateApplicationNumber = (value) => {
    // Regex for 16-digit alphanumeric code
    const regex = /^[a-zA-Z0-9]{16}$/;
    return regex.test(value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (validateApplicationNumber(value) || value === '') {
      setError('');
    } else {
      setError('Invalid application number');
    }
    setApplicationNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateApplicationNumber(applicationNumber)) {
      console.log('Application number is valid:', applicationNumber);
      // Handle valid submission
      history.push('/timeline');
    } else {
      setError('Invalid application number');
    }
  };

  return (
    <Container className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography style={{marginBottom:10}} variant="h6">Enter Valid Application Number</Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            error={!!error}
            helperText={error}
            label="Application Number"
            variant="outlined"
            value={applicationNumber}
            onChange={handleChange}
            placeholder="XXXXXXXXXXXXXXXX"
            fullWidth
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            disabled={!applicationNumber || error}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ApplicationForm;
