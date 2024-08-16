import React from 'react';

const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.textLeft}>Welcome to Our Website!</div>
      <div style={styles.phoneRight}>Call us: +1 234 567 890</div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
  },
  textLeft: {
    fontSize: '18px',
  },
  phoneRight: {
    fontSize: '18px',
  },
};

export default Header;
