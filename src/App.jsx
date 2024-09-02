import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar/Header';
import './assets/css/commonStyle.css'
import './Pages/Home';
import './Pages/About';
function App() {
  return (
    <div>
      <Header/>
      {/* <Home/>
      <About/> */}
    </div>
  )
}

export default App