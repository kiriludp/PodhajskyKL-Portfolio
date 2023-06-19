import { HashRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import "./style/App.css"
import About from './pages/About';
import Header from './components/Header'
import Navigation from './components/Navigation';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './components/Footer';



export default function App() {
 
  
  return (
    <div className='Main'>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  )
  }
