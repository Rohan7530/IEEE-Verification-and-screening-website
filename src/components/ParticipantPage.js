// ParticipantPage.js
import React, { useEffect, useState } from 'react';
import { AppBar, Button, Typography, makeStyles } from '@material-ui/core';
import SubmissionForm from './SubmissionForm';
// import DomainList from './DomainList';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main, // Change background color as needed
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: theme.palette.primary.dark, // Change active tab background color as needed
    color: theme.palette.common.white, // Change active tab text color as needed
  },
  inactiveTab: {
    backgroundColor: theme.palette.grey[500], // Change inactive tab background color as needed
    color: theme.palette.grey[800], // Change inactive tab text color as needed
  },
  tabButton: {
    borderRadius: 0,
    minWidth: 0,
    padding: theme.spacing(1, 2),
    '&:hover': {
      backgroundColor: theme.palette.grey[500], // Change hover color for inactive tabs
    },
  },
  usernameStatus: {
    marginLeft: 'auto',
    marginRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white, // Change text color as needed
  },
  statusText: {
    marginLeft: theme.spacing(2),
    color: 'orange', // Ongoing status color
  },
  pendingText: {
    marginLeft: theme.spacing(2),
    color: 'grey', // Pending status color
  },
  recommendedText: {
    marginLeft: theme.spacing(2),
    color: 'green', // Recommended status color
  },
  ongoingText: {
    marginLeft: theme.spacing(2),
    color: 'orange', // Ongoing status color
  },
}));
const fetchYourDataFromBackend = async () => {
  // Simulate fetching data from the backend (placeholder)
  return {
    activeTabIndex: 0, // Set the default active tab index
    statusText: 'Ongoing', // Set the default status text
    isStageCompleted: false, // Add a flag indicating whether stage 1 is completed
  };
};


const ParticipantPage = () => {
  const classes = useStyles();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [statusText, setStatusText] = useState('');

  useEffect(() => {
    const fetchDataFromBackend = async () => {
      try {
        const dataFromBackend = await fetchYourDataFromBackend();
        setActiveTabIndex(dataFromBackend.activeTabIndex);
  
        // Check if stage 1 is completed and update statusText accordingly
        setStatusText(dataFromBackend.isStageCompleted ? 'Recommended' : 'Ongoing');
      } catch (error) {
        console.error('Error fetching data from the backend:', error);
        // Handle the error, such as displaying a message to the user
      }
    };
  
    fetchDataFromBackend();
  }, []);
   // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Button
          className={`${classes.tabButton} ${activeTabIndex === 0 ? classes.activeTab : classes.inactiveTab}`}
          disabled={activeTabIndex !== 0} // Make active tab clickable
        >
          Peer to Peer Screening
          {activeTabIndex === 0 ? (
            <Typography variant="body2" className={classes.statusText}>
              {statusText}
            </Typography>
          ) : (
            <Typography variant="body2" className={classes.pendingText}>
              Pending
            </Typography>
          )}
        </Button>
        <Button
          className={`${classes.tabButton} ${activeTabIndex === 1 ? classes.activeTab : classes.inactiveTab}`}
          disabled={activeTabIndex !== 1} // Make active tab clickable
        >
          Camera Driven Screening
          {activeTabIndex === 1 ? (
            <Typography variant="body2" className={classes.statusText}>
              {statusText}
            </Typography>
          ) : (
            <Typography variant="body2" className={classes.pendingText}>
              Pending
            </Typography>
          )}
        </Button>
        <Button
          className={`${classes.tabButton} ${activeTabIndex === 2 ? classes.activeTab : classes.inactiveTab}`}
          disabled={activeTabIndex !== 2} // Make active tab clickable
        >
          Pre-Presentation Screening
          {activeTabIndex === 2 ? (
            <Typography variant="body2" className={classes.statusText}>
              {statusText}
            </Typography>
          ) : (
            <Typography variant="body2" className={classes.pendingText}>
              Pending
            </Typography>
          )}
        </Button>
        <Typography variant="h6" className={classes.usernameStatus}>
          Username: Participant123 {/* Replace with the actual username */}
        </Typography>
      </AppBar>
          <SubmissionForm/>
          {/* <DomainList/> */}
      {/* Add your content for each tab here */}
    </div>
  );
};

export default ParticipantPage;
