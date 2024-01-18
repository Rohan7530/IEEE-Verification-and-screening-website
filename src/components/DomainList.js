import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, Typography, makeStyles } from '@material-ui/core';

// Styles for the component using Material-UI's makeStyles
const useStyles = makeStyles((theme) => ({
    container: {
        // display: 'flex',
        height: '80vh',
        marginTop: 30,
        marginLeft : 30,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
  // Styles for the accordion
  accordion: {
    width: '100%',
    marginBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  // Styles for the accordion summary
  summary: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Styles for the container of stage buttons
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
  // Styles for individual stage buttons
  stageButton: {
    marginRight: theme.spacing(1),
  },
  // Styles for different stages
  activeStage: {
    backgroundColor: 'orange',
  },
  completedStage: {
    backgroundColor: 'green',
  },
  inactiveStage: {
    backgroundColor: 'grey',
  },
  // Styles for the comments section
  commentsSection: {
    marginTop: theme.spacing(2),
  },
}));

export const DomainList = () => {
  const classes = useStyles();

  // Mock data for domains
  const domains = ['Domain 1', 'Domain 2', 'Domain 3'];

  // State to track the stages and other information for each domain
  const stages = {
    'Domain 1': { stage1: 'active', stage2: 'inactive', stage3: 'inactive', comments: 'Initial comments', instructions: 'Initial instructions' },
    'Domain 2': { stage1: 'inactive', stage2: 'inactive', stage3: 'inactive', comments: '', instructions: '' },
    'Domain 3': { stage1: 'inactive', stage2: 'inactive', stage3: 'inactive', comments: '', instructions: '' },
  };

  // Function to render buttons for each stage
  const renderButton = (domain, stage, isActive) => {
    let stageClass = classes.inactiveStage;
    if (stages[domain][stage] === 'active') {
      stageClass = classes.activeStage;
    } else if (stages[domain][stage] === 'completed') {
      stageClass = classes.completedStage;
    }
  
    return (
      <Button variant="contained" className={`${classes.stageButton} ${stageClass}`} disabled={!isActive}>
        {stage}
      </Button>
    );
  };
  

  // Main render
  return (
    <div className={classes.container}>
      {domains.map((domain, index) => (
        <Accordion key={index} className={classes.accordion}>
          <AccordionSummary className={classes.summary}>
            <Typography>{domain}</Typography>
          </AccordionSummary>


          {Object.keys(stages[domain]).some(key => stages[domain][key] !== 'inactive') && (
        <AccordionDetails>
            {stages[domain] && Object.keys(stages[domain]).some(key => stages[domain][key] !== 'inactive') ? (
              <div>
                <div className={classes.buttonContainer}>
                  {renderButton(domain, 'stage1', stages[domain].stage1 !== 'inactive')}
                  {renderButton(domain, 'stage2', stages[domain].stage2 !== 'inactive')}
                  {renderButton(domain, 'stage3', stages[domain].stage3 !== 'inactive')}
                </div>
                <div className={classes.commentsSection}>
                  <Typography variant="subtitle2">Comments:</Typography>
                  <Typography>{stages[domain].comments}</Typography>
                  <Typography variant="subtitle2">Instructions:</Typography>
                  <Typography>{stages[domain].instructions}</Typography>
                </div>
              </div>
            ) : (
              <Typography className={classes.noContent}>Document not submitted</Typography>
            )}
          </AccordionDetails>
          )}
        </Accordion>
      ))}
    </div>
  );
};

export default DomainList;
