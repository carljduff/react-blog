// import './App.css';
import React from 'react';
import { useState } from 'react';
// import Home from '../src/pages/Home';
// import Blog from './pages/Blog';
// import About from './pages/About';
// import NavLinks from './components/NavLinks';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Intro from '../src/pages/Intro'
import './Intro.css';
import './about.css';
import './Portfolio.css';
import './PortfolioList.css';
import './Toggle.css';
import About from './pages/About';
import PortfolioList from './pages/PortfolioList';
import Toggle from './pages/Toggle';






function App() {
const [dark, setDark] = useState(false)

  
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
      <Toggle />
      <Intro />
      <About />
      <PortfolioList />
     
    </div>
  );
}

export default App;