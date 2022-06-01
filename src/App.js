import React from 'react';
import NavLinks from './components/NavLinks';
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
     
      <NavLinks/>
      <Intro />
      <About />
      <PortfolioList />
     
    </div>
  );
}

export default App;