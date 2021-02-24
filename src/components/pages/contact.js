import React from "react";
import  {Link} from 'react-router-dom';
import Nav from '../header/nav.js';
import './style.css'
function Contact() {
  return (
  	<div className='container'>
  	<div className='divheader'>
  	<Nav />
  	</div>
    <div className='divclass'> 
        <h1>contact page</h1>
      <h1>this is the contact page</h1>
    </div>
    </div>
  );
}

export default Contact;