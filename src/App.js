import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
// import Banner from './components/Banner';
import Footer from './components/Footer/Footer';


import Home from './pages/HomePage/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import OnlineTraining from './pages/OnlineTraining/OnlineTraining';
import BecomeATrainer from './pages/BecomeATrainer/BecomeATrainer';
import ContactUs from './pages/ContactUs/ContactUs';
import Banner from './components/Banner/Banner';

const App = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/online-training" element={<OnlineTraining />} />
        <Route path="/become-a-trainer" element={<BecomeATrainer />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
