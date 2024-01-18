import React, { useState } from 'react';
import { makeStyles, Paper, TextField, Button, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        height: '80vh',
        marginTop: 30,
        marginLeft : 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50vw',
    padding: theme.spacing(4),
  },
  paper: {
    width: '50vw',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: theme.palette.success.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
  list: {
    width: '100%',
  },
  listItem: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.info.light,
    marginBottom: theme.spacing(1),
  },
  listItemIcon: {
    minWidth: theme.spacing(5),
  },
  listItemText: {
    color: theme.palette.getContrastText(theme.palette.info.light),
  },
  completed: {
    backgroundColor: theme.palette.success.main,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
  },
  inactive: {
    backgroundColor: theme.palette.action.disabledBackground,
  },
}));

export default function ReviewerLanding() {
  const classes = useStyles();
  const history = useHistory();

  const pdfFileUrl = '/path-to-uploaded-pdf-file.pdf';

  // Handler for when the 'Camera Ready Screening' button is clicked
  const handleOngoingStage = () => {
    window.open(pdfFileUrl, '_blank'); // Opens the PDF in a new tab
    history.push('/recommendation-form'); // Navigate to the recommendation form screen
  };
  const [applicationNumber, setApplicationNumber] = useState('');
  
  // State to track whether the application number has been submitted
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [isValidApplication, setIsValidApplication] = useState(true);

  // Handler for submitting the application number
  const handleSubmitApplication = () => {
    // Perform validation to check if the application number is 16 alphanumeric characters
    const alphanumericRegex = /^[a-zA-Z0-9]{16}$/;
    if (alphanumericRegex.test(applicationNumber)) {
      // Valid application number
      setApplicationSubmitted(true);
      setIsValidApplication(true); // Reset validation message
    } else {
      // Invalid application number
      setIsValidApplication(false);
    }
  };

  return (
    <div className={classes.container}>
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography style={{marginBottom:10}} variant="h6">Application Number</Typography>
        <TextField
        variant="outlined"
        label="Application Number"
        fullWidth
        value={applicationNumber}
        onChange={(e) => setApplicationNumber(e.target.value)}
        className={classes.input}
        error={!isValidApplication} // Apply error styling if the application number is invalid
        helperText={!isValidApplication ? 'Not a valid application number' : ''}
      />
        <Button
        variant="contained"
        color="primary"
        onClick={handleSubmitApplication}
        className={classes.submitButton}
      >
          Submit
        </Button>
      </Paper>
      <List className={classes.list}>
  {applicationSubmitted ? ( // Render the tabs if applicationSubmitted is true
    <>
      <ListItem className={`${classes.listItem} ${classes.completed}`}>
        <ListItemIcon className={classes.listItemIcon}>
          <CheckCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Peer to Peer Screening" />
      </ListItem>
      <ListItem
        className={`${classes.listItem} ${classes.warning}`}
        button
        onClick={handleOngoingStage}
      >
        <ListItemIcon className={classes.listItemIcon}>
          <WarningIcon />
        </ListItemIcon>
        <ListItemText primary="Camera Ready Screening" />
      </ListItem>
      <ListItem className={`${classes.listItem} ${classes.inactive}`}>
        <ListItemIcon className={classes.listItemIcon}>
          <RemoveCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Pre-Presentation Screening" />
      </ListItem>
    </>
  ) : (
    // Render a message if applicationSubmitted is false
    <Typography variant="subtitle1">Submit an application number to view Status</Typography>
  )}
</List>
    </div>
    </div>
  );
}
