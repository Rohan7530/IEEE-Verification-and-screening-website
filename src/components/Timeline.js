import React, { useState } from 'react';
import { makeStyles, Paper, Step, StepLabel, Stepper, Dialog, DialogTitle, DialogContent, Typography, Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import WarningIcon from '@material-ui/icons/Warning';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        // height: '80vh',
        marginTop: 15,
        // marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const steps = [
    { label: 'Peer to peer Screening', status: 'recommended', color: 'green' },
    { label: 'Camera Driven Screening', status: 'ongoing', color: 'orange' },
    { label: 'Pre-presentation Screening', status: 'not started', color: 'gray' },
];

const getStepIcon = (status, color) => {
    if (status === 'recommended') {
        return <CheckCircleIcon style={{ color }} />;
    } else if (status === 'ongoing') {
        return <WarningIcon style={{ color }} />;
    } else if (status === 'not recommended') {
        return <PanoramaFishEyeIcon style={{ color }} />;
    } else {
        return <RemoveCircleOutlineIcon style={{ color }} />;
    }
};

export default function Timeline() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleStepClick = (step) => {
        setActiveStep(step);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const renderModalContent = () => {
        if (!activeStep) {
            return null;
        }

        const { label, status } = activeStep;

        if (status === 'recommended') {
            return (
                <div>
                    <Typography variant="h6">Reviewer Name: John Doe</Typography>
                    <Typography variant="body1">Status: Recommended</Typography>
                    <Typography variant="body1">PDF Document: Sample.pdf</Typography>
                    <Typography variant="body1">Comments: Excellent work!</Typography>
                    <Typography variant="body1">Date and time of review: 2022-03-15 10:30 AM</Typography>
                    <Button style={{marginTop :5,}} variant="contained" color="primary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </div>
            );
        } else if (status === 'ongoing') {
            return (
                <div>
                    <Typography variant="h6">Reviewer Name: Jane Smith</Typography>
                    <Typography variant="body1">Status: Ongoing</Typography>
                    <Typography variant="body1">PDF Document: In Progress</Typography>
                    <Button style={{marginTop :5,}} variant="contained" color="primary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </div>
            );
        } else {
            return (
                <div>
                    <Typography variant="h6">Reviewer Name: -</Typography>
                    <Typography variant="body1">Status: Not Started</Typography>
                    <Typography variant="body1">PDF Document: Not Uploaded</Typography>
                    <Button style={{marginTop :5,}} variant="contained" color="primary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </div>
            );
        }
    };

    return (
        <div className={classes.container}>
            <Paper elevation={3} style={{ padding: '16px' }}>
                <Stepper alternativeLabel>
                    {steps.map((step, index) => (
                        <Step key={index} completed={step.status === 'recommended'}>
                            <StepLabel
                                onClick={() => handleStepClick(step)}
                                style={{ cursor: 'pointer' }}
                                StepIconComponent={() => getStepIcon(step.status, step.color)}
                            >
                                {step.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Paper>
            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>{activeStep ? activeStep.label : ''}</DialogTitle>
                <DialogContent>
                    {renderModalContent()}
                </DialogContent>
            </Dialog>
        </div>
    );
}
