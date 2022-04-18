// import './App.css';
import React from 'react';
import { useRef } from 'react';
// import Home from '../src/pages/Home';
// import Blog from './pages/Blog';
// import About from './pages/About';
import NavLinks from './components/NavLinks';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Intro from '../src/pages/Intro'
import './Intro.css';
import './about.css';
import './Portfolio.css';
import './PortfolioList.css';
import About from './pages/About';
import PortfolioList from './pages/PortfolioList';





function App() {

  
  return (
    <div>
      {/* <NavLinks /> */}
      {/* <Router>
        <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/about' element={<About />} />
        </Routes>
      </Router> */}
      <NavLinks/>
      <Intro />
      <About />
      <PortfolioList />
     
    </div>
  );
}

export default App;