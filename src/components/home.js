// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Jimmy's Piano Shop!</h2>

      {/* Buttons Row */}
      <div className="row">
        <div className="col-md-6">
          <Link to="/sell" className="btn btn-primary">
            <img
              src="https://images8.alphacoders.com/408/408274.jpg"
              alt="Sell Piano"
            />
            Sell Piano
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/PianoDetails" className="btn btn-success">
            <img
              src="https://wallpapercave.com/wp/wp3021941.jpg"
              alt="Piano Details"
            />
            Piano Details
          </Link>
        </div>
      </div>

     
      <div className="row">
        <div className="col-md-12">
          <img
            src="https://www.jimsmusiconline.com/images/clubs/pianoclub1.jpg"  
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
