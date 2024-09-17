import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar/Header';
import './assets/css/commonStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import Home from './Pages/Home';
import About from './Pages/About';
import Work from './pages/Work';

import Home from './Pages/Home'; 
// import About from './Pages/About'; 
// import Work from './Pages/Work';

import Gallery from './Pages/Gallery';
import Careers from './Pages/Careers';
import ReachUs from './Pages/ReachUs';
import Footer from './components/footer/Footer';
import WebApp from './Pages/webApplication/WebApp';
import MobileApplication from './Pages/mobileApplication/MobileApplication';
import Ecommerce from './Pages/ecommerce/Ecommerce';
import UiUx from './Pages/ui&ux/UiUx';
import Home1 from './Pages/Home1';
import Portfolio from './Pages/portfolio/Portfolio';
import LogIn from './Pages/login/Login';
import MainDashboard from './Pages/dashboard/MainDashboard';
import Dashboard from './Pages/dashboard/Dashboard';
import Addpage from './Pages/dashboard/pages/Addpage';
import ListPages from './Pages/dashboard/pages/ListPages';
import LandingPage from './Pages/LandingPage';
import Blog from './Pages/blog/Blog';
import Service from './Pages/serviceNew/Service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard route without Header and Footer */}
        <Route path="/login" element={<LogIn />} />
        {/* Main Dashboard Route with nested routes */}
        <Route path="/mainDashboard" element={<MainDashboard />}>
          {/* Default route in mainDashboard (Dashboard component) */}
          <Route index element={<Dashboard />} />

          {/* AddPage route as a child of mainDashboard */}
          <Route path="addPage" element={<Addpage />} />
          <Route path="listPage" element={<ListPages />} />
        </Route>

        {/* All other routes with Header and Footer */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/technologies" element={<Careers />} />
                <Route path="/reachUs" element={<ReachUs />} />
                <Route path="/webapp" element={<WebApp />} />
                <Route path="/mobileApp" element={<MobileApplication />} />
                <Route path="/e-commerce" element={<Ecommerce />} />
                <Route path="/uiux" element={<UiUx />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                {/* <Route path="/service" element={<Service />} /> */}
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
