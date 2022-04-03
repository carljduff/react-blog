import React from "react";
// import {Link} from 'react-scroll'
import Face from '../components/Face'
import About from './About'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {


  

  return (
      <div>
          <div className="container">
            <div className="content">
          <Face />
          <h1 className="name"> CARL JORDAN DUFF </h1>
          <p className="subtitle"> AWESOME INC. BOOTCAMP </p>
          <div className="arrow-container">
          {/* <FontAwesomeIcon href='#about' className="arrow" icon="fa-solid fa-circle-arrow-down" /> */}
          {/* <a href="#" class="arrow">Enter</a> */}
          </div>


  
          </div>
          </div>
      </div>
  );
}