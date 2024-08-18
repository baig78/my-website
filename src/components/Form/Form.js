import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
      }, (error) => {
          console.error('Error sending email:', error.text);
      });

    setFormData({
      name: '',
      email: '',
      country: '',
      phoneNumber: '',
      message: ''
    });
  };

  return (
    <form className="get-in-touch-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
      <label className="form-label">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
      <label className="form-label">
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
      <label className="form-label">
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
      <label className="form-label">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          required
        />
      </label>
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default Form;
