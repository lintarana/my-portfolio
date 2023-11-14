import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home';
import ProjectShowcase from './components/ProjectShowcase';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import './index.css'; // Import your global CSS file

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectShowcase />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
