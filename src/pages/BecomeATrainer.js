// import React from 'react';
import React, { useState } from 'react';


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
    <div style={styles.container}>
      <h2>Become a Trainer</h2>
      <p>
      If you have expertise in any technology, looking for a platform on which to share your knowledge and have the passion to work with us, then SS JOB SUPPORT is the right place for you. We are associated with more than 100+ trainers and they are supporting our students on a regular basis.
      </p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Skill:
          <input
            type="text"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />
        </label>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};
const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    label: {
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    textarea: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      resize: 'vertical'
    },
      padding: '10px 15px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  

export default BecomeATrainer;
