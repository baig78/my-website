import React from 'react';
import FormSection from '../../components/Form/Form';
import './Home.css';

const Home = () => {
  return (
    <div className="section">
      <div className="text-left">
        <h2>Section Title</h2>
        <p>Section description goes here.</p>
      </div>
      <div className="form-right">
        <FormSection />
      </div>
    </div>
  );
};

export default Home;
