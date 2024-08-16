import React from 'react';

const Banner = () => {
  return (
    <div style={styles.banner}>
      <h1>Banner Title</h1>
      <p>Banner Description goes here</p>
    </div>
  );
};

const styles = {
  banner: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#ddd',
  },
};

export default Banner;
