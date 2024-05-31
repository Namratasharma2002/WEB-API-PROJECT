// src/App.js

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import './styles.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vehicle rental
            </Typography>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <Box sx={{ width: '100%', maxWidth: 360, mt: 2 }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} /> {/* Default to Login */}
            </Routes>
          </Box>
        </header>
      </div>
    </Router>
  );
}

export default App;
