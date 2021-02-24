import React from "react";
import  {Link} from 'react-router-dom';
import Nav from '../header/nav';
import './style.css'
function About() {
  return (
  	<div className='container'>
	  	<div className='divheader'>
	  		<Nav /> 
	  	</div>
	    <div className='divclass'>
	        <h1>about page</h1> 
	      	<h1>this is the about page</h1>
	    </div>
    </div>
   
  );
}

export default About;