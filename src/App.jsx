import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar/Header';
import './assets/css/commonStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'; 
import About from './Pages/About'; 
import Work from './pages/Work';
import Careers from './pages/Careers';
import ReachUs from './pages/ReachUs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/technologies" element={<Careers/>} />
          <Route path="/reachUs" element={<ReachUs/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
