import React from "react";
import  {Link} from 'react-router-dom';
import Nav from '../header/nav';
import './style.css'
import Footer from '../footer/footer.js';
import Nature from'../img/nature.jpg'
function About() {
  return (
  	<div className='container'>
	  	<div className='divheader'>
	  		<Nav /> 
	  	</div>
	    <div className='divclass'>
	    	<div className='box1'>
	    	<img src={Nature} />
	    	</div >
	    	<div className='box2'>
	    	 <h1>skills sets</h1>
				<li>django</li>
				<li>react</li>
				<li>python </li>
				<li>javascript</li>
				<li>postgresql</li>
				<li>mysql</li>
				<li>Rabbitq</li>
				<li>celery</li>
				<li>selenium</li>
	    	</div>
	    	<div className='footer'><Footer /></div>
	    </div>
	    
    </div>
   
  );
}

export default About;