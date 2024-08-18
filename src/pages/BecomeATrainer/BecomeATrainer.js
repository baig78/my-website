import React, { useState } from 'react';
import './BecomeATrainer.css';

const BecomeATrainer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    skill: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="container become-trainer">
      <h2>Become a Trainer</h2>
      <p>
        If you have expertise in any technology, looking for a platform on which to share your knowledge and have the passion to work with us, then SS JOB SUPPORT is the right place for you. We are associated with more than 100+ trainers and they are supporting our students on a regular basis.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="label">
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="label">
          Skill:
          <input
            type="text"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="label">
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="label">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea"
          />
        </label>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default BecomeATrainer;
