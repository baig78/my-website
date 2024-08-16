// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
// import ContentSection from './components/ContentSection';
import Footer from './components/Footer';


import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OnlineTraining from './pages/OnlineTraining';
import BecomeATrainer from './pages/BecomeATrainer';
import ContactUs from './pages/ContactUs';

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
      {/* <ContentSection /> */}
      <Footer />
    </Router>
  );
};

export default App;
