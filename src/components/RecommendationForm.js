// RecommendationForm.js
import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, makeStyles, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        height: '80vh',
        marginTop: 30,
        marginLeft : 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
  paper: {
    padding: theme.spacing(3),
    width: '50vw',
    
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  select: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    marginTop: theme.spacing(2),
  },
}));

export const RecommendationForm = () => {
  const classes = useStyles();
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className={classes.container}>
    <Paper className={classes.paper}>
      <Typography variant="h6">Recommendation Form</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          label="Comments"
          fullWidth
          className={classes.textField}
          // ... other props
        />
        <TextField
          variant="outlined"
          label="Marks out of 100"
          fullWidth
          className={classes.textField}
          // ... other props
        />
        <Select
          value={recommendation}
          onChange={(event) => setRecommendation(event.target.value)}
          fullWidth
          className={classes.select}
          label="Please select you final result"
        >
          <MenuItem value="recommended">Recommended</MenuItem>
          <MenuItem value="not-recommended">Not Recommended</MenuItem>
        </Select>
        <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
          Submit
        </Button>
      </form>
    </Paper>
    </div>
  );
};
