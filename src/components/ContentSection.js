import React from 'react';

const ContentSection = () => {
  return (
    <div style={styles.section}>
      <div style={styles.textLeft}>
        <h2>Section Title</h2>
        <p>Section description goes here.</p>
      </div>
      <div style={styles.formRight}>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 40px',
  },
  textLeft: {
    width: '60%',
  },
  formRight: {
    width: '35%',
  },
};

export default ContentSection;
