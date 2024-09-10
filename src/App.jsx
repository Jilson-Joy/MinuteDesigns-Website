import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar/Header';
import './assets/css/commonStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'; 
import About from './Pages/About'; 
import Work from './pages/Work';
import Gallery from './Pages/Gallery';
import Careers from './pages/Careers';
import ReachUs from './pages/ReachUs';
import Footer from './components/footer/Footer';
import WebApp from './Pages/webApplication/WebApp';
import MobileApplication from './Pages/mobileApplication/MobileApplication';
import Ecommerce from './Pages/ecommerce/Ecommerce';
import UiUx from './Pages/ui&ux/UiUx';
import Home1 from './Pages/Home1';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/technologies" element={<Careers/>} />
          <Route path="/reachUs" element={<ReachUs/>} />
          <Route path="/webapp" element={<WebApp/>} />
          <Route path="/mobileApp" element={<MobileApplication/>} />
          <Route path="/e-commerce" element={<Ecommerce/>} />
          <Route path="/uiux" element={<UiUx/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
