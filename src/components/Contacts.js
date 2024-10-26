// components/Contacts.js
import React from 'react';
import './Contacts.css'; // Import the CSS file for styling

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1>Contact Us</h1>
      <div className="contact-methods">
        <div className="contact-method">
          <h2>By Phone</h2>
          <p>If you have any questions, feel free to reach us at:</p>
          <p className="phone-number">+1 (234) 567-8901</p>
        </div>
        <div className="contact-method">
          <h2>Send a Message</h2>
          <form className="contacts-form">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
