import './App.css';
import React from 'react';
import { useRef } from 'react'
import Home from '../src/pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import NavLinks from './components/NavLinks';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  
  return (
    <div>
      <NavLinks />
      <Router>
        <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/about' element={<About />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;