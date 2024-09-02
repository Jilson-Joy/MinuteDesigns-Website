import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar/Header';
import './assets/css/commonStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'; // Correct import
import About from './Pages/About'; // Import About component

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
