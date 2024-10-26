// Updates.js
import React from 'react';
import './Updates.css'; // Import the CSS file for styling

const Updates = () => {
  return (
    <div className="updates-container">
      <h2>Latest Updates</h2>
      <ul>
        <li>
          <h3>Feature Release: Dynamic Question Paper Generation</h3>
          <p>We have launched our new feature that allows educators to generate dynamic question papers effortlessly!</p>
          <span className="date">October 25, 2024</span>
        </li>
        <li>
          <h3>Maintenance Scheduled</h3>
          <p>Scheduled maintenance will occur on November 1, 2024, from 12 AM to 3 AM. Please save your work.</p>
          <span className="date">October 20, 2024</span>
        </li>
        <li>
          <h3>New User Guide Available</h3>
          <p>A comprehensive user guide is now available to help new users navigate our platform efficiently.</p>
          <span className="date">October 15, 2024</span>
        </li>
      </ul>
    </div>
  );
};

export default Updates;
