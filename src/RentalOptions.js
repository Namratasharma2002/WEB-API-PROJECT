import React from 'react';
import './RentalOptions.css';

function RentalOptions() {
  return (
    <div className="rental-options">
      <header className="App-header">
        <h1>Wheels ON And Goo</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <nav>
          <button className="nav-button">About Us</button>
          <button className="nav-button">Help?</button>
        </nav>
      </header>
      <main>
        <div className="card">
          <img src="https://www.kindpng.com/picc/m/181-1813878_vector-car-png-file-vector-png-of-car.png" alt="Cars" />
          <h2>Cars</h2>
          <p>$70 per day</p>
          <button>Book Now</button>
        </div>
        <div className="card">
          <img src="https://cdn.vectorstock.com/i/1000x1000/41/85/motorcycle-bike-heavy-svg-and-eps-vector-38634185.jpg" alt="Bikes" />
          <h2>Bikes</h2>
          <p>$50 per day</p>
          <button>Book Now</button>
        </div>
        <div className="card">
          <img src="https://t3.ftcdn.net/jpg/06/46/39/30/360_F_646393060_sNov66mbTB2qJAkH4nyv2hq5glKzEcrd.jpg" alt="Cycles" />
          <h2>Cycles</h2>
          <p>$20 per day</p>
          <button>Book Now</button>
        </div>
      </main>
    </div>
  );
}

export default RentalOptions;
