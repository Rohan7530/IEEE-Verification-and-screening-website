import React, { useState } from 'react';
import { Paper, FormControl, InputLabel, MenuItem, Select, Button, Typography, makeStyles, TextField } from '@material-ui/core';
import DomainList from './DomainList';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '80vh',
    marginTop: 30,
    marginLeft : 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  formContainer: {
    flex: '0 0 40%',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
  rightColumn: {
    flex: '1', // Take up remaining space
    padding: theme.spacing(3),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const SubmissionForm = () => {
  const classes = useStyles();
  const [authorNames, setAuthorNames] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [pdfDocument, setPdfDocument] = useState(null);

  const handleAuthorNamesChange = (event) => {
    setAuthorNames(event.target.value);
  };

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handlePdfUpload = (event) => {
    setPdfDocument(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Implement your submission logic here
    console.log('Author Names:', authorNames);
    console.log('Selected Domain:', selectedDomain);
    console.log('PDF Document:', pdfDocument);
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.formContainer} elevation={3}>
        <Typography variant="h5">Submission Form</Typography>

        {/* Author's names input */}
        <TextField
          variant="outlined"
          label="Author's Names"
          fullWidth
          value={authorNames}
          onChange={handleAuthorNamesChange}
          className={classes.form}
        />

        {/* Domain selection dropdown */}
        <FormControl variant="outlined" className={classes.form} style={{ marginTop: '20px' }}>
          <InputLabel>Domain Selection</InputLabel>
          <Select value={selectedDomain} onChange={handleDomainChange} label="Domain Selection">
            <MenuItem value="Domain1">Domain 1</MenuItem>
            <MenuItem value="Domain2">Domain 2</MenuItem>
            {/* Add more domains as needed */}
          </Select>
        </FormControl>

        {/* PDF file upload input */}
        <TextField
          type="file"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handlePdfUpload}
          style={{ marginTop: '20px' }}
        />

        {/* Submit button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className={classes.submitButton}
        >
          Submit
        </Button>
      </Paper>

      {/* Right column for future content */}
      {/* Add your content for the right column here */}
      <Paper className={classes.rightColumn} elevation={3}>
        <Typography variant="h5">Domain List</Typography>
        <DomainList />
      </Paper>
    </div>
  );
};

export default SubmissionForm;
