// AuthPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs, Tab, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const AuthPage = () => {
  const history = useHistory();

  const [tabValue, setTabValue] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
  };

  const handleRegister = () => {
    // Add your registration logic here
    console.log('Registering with:', username, password, role);

    // Redirect to the participant page after successful registration for participant role
    if (role === 'participant') {
      history.push('/participant');
    }
    if (role === 'reviewer') {
      history.push('/review');
    }

    if(role === 'admin'){
      history.push('/admin-landing');
    }
  };

  return (
    <Paper elevation={3} style={{ width: 400, margin: 'auto', marginTop: 50, padding: 20 }}>
      <h1 style={{textAlign: 'center'}}>Welcome</h1>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      <Typography variant="h5" style={{ marginTop: 20 }}>
        {tabValue === 0 ? 'Login' : 'Register'}
      </Typography>

      {tabValue === 0 && (
        <div>
          <TextField label="Username" fullWidth margin="normal" onChange={handleUsernameChange} />
          <TextField label="Password" type="password" fullWidth margin="normal" onChange={handlePasswordChange} />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Login
          </Button>
        </div>
      )}

      {tabValue === 1 && (
        <div>
          <TextField label="Username" fullWidth margin="normal" onChange={handleUsernameChange} />
          <TextField label="Password" type="password" fullWidth margin="normal" onChange={handlePasswordChange} />
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-label">Role</InputLabel>
            <Select labelId="role-label" value={role} onChange={handleRoleChange}>
              <MenuItem value="participant">Participant</MenuItem>
              <MenuItem value="reviewer">Reviewer</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
            Register
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default AuthPage;
