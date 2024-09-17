import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/navfoot/nav';
import Footer from './pages/navfoot/foot';
import StarBackground from './pages/background/StarBackground';
import About from './pages/About/about';
import Tech from './pages/Tech/tech';
import Dance from './pages/Dance/dance';
import Contact from './pages/Contact/contact';
import Mode from './pages/background/mode';

const App = () => (
  <>

    <Mode />

    <Router>
      < StarBackground />
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  </>
);

export default App;
