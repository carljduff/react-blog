import React from "react";
// import {Link} from 'react-scroll'
import Face from '../components/Face'
import About from './About'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {


  

  return (
      <div>
         <div className="px-4 py-5 mt-5 text-center hero">
          
        <h1 className="display-5 mt-5 fw-bold name">Hi, I'm Jordan</h1>
      <div className="col-lg-6 mt-3 mx-auto">
      <p className="lead mb-4 subtitle">I'm currently a student at Awesome Inc's Bootcamp.</p>
      <div className="d-grid gap-2 d-sm-flex mb-5 justify-content-sm-center">
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Follow My Journey</button>
      </div>
    </div>
  </div>
          </div>


  
          
  );
}