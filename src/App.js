import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './styles.css'; // Import global styles
import BookingForm from './BookingForm';
import Login from './Login';
import Register from './Register';
import RentalOptions from './RentalOptions';

function App() {
    return (
        <Router>
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Vehicle Rental
                        </Typography>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/register">Register</Button>
                        <Button color="inherit" component={Link} to="/rental">Rental Options</Button>
                        <Button color="inherit" component={Link} to="/booking">Book Vehicle</Button>
                    </Toolbar>
                </AppBar>
                <Box sx={{ width: '100%', mt: 2 }}>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/rental" element={<RentalOptions />} />
                        <Route path="/booking" element={<BookingForm />} />
                        <Route path="/" element={<RentalOptions />} /> {/* Default to RentalOptions */}
                    </Routes>
                </Box>
            </div>
        </Router>
    );
}

export default App;
