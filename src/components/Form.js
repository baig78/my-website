import React, { useState } from 'react';


const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
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
    <h2>Get in Touch with Us</h2>
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
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </label>
      <label style={styles.label}>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
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
          required
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
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default FormSection;
