// src/Register.jsx

import { AppBar, Box, Button, Container, TextField, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (username && password && email) {
      // Simulate a successful registration process
      setMessage('Registration successful');
    } else {
      setMessage('Please fill in all fields');
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 1000); // Display message for 4.5 seconds
      return () => clearTimeout(timer); // Clear timeout if component unmounts
    }
  }, [message]);

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Register
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs" sx={{ mt: 8, mb: 8, display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            borderRadius: 1,
            boxShadow: 3,
            bgcolor: 'white',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Register
          </Typography>
          <form onSubmit={handleRegister}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </form>
          {message && (
            <Typography
              sx={{ mt: 2, color: message === 'Registration successful' ? 'green' : 'red' }}
            >
              {message}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
