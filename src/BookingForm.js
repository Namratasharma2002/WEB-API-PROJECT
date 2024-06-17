// src/BookingForm.js

import React from 'react';
import './BookingForm.css';

const BookingForm = () => {
    return (
        <div className="booking-form">
            <h1>Wheels ON And Goo</h1>
            <h2>Book Vehicles</h2>
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" />
                </div>
                <div className="form-group">
                    <label>Choose vehicle</label>
                    <select>
                        <option>Car</option>
                        <option>Bikes</option>
                        <option>Cycles</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Permanent Address</label>
                    <input type="text" placeholder="Permanent Address" />
                </div>
                <div className="form-group">
                    <label>Citizen Number</label>
                    <input type="text" placeholder="Citizen Number" />
                </div>
                <div className="form-group">
                    <label>From</label>
                    <input type="date" />
                </div>
                <div className="form-group">
                    <label>To</label>
                    <input type="date" />
                </div>
                <div className="form-group upload">
                    <label>Upload document</label>
                    <input type="file" />
                </div>
                <button type="submit">Book</button>
            </form>
        </div>
    );
};

export default BookingForm;
