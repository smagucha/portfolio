import React from "react";
import  {Link} from 'react-router-dom';
import Nav from '../header/nav.js';
import Code from '../img/code.jpg';

function Home() {
  return (
    <div className='Container'>
      <div className='divheader'>
        <Nav />
      </div>
     <div className='divclass'>
       <img src={Code} />
       <div className='mainbox'>
       <div className='box'>sammy magucha sammy magucha is full stack developer building web apps using django as the backend development
       . Programming is passion as it can be difficult at times and challenging. The most interesting part about programming is that
       it offers one oppuntity to think and solve a problem uniquely</div>
       <div className='box'>
       projects
       <li>library inforation system</li>
       <li>stock management</li>
       <li>portfolio</li>
       <li>my website</li>
       <li>calclator with react</li>
       <li>ecommerce site</li>
       </div>
       <div className='box'></div>
       <div className='box'>projects</div>
       </div>
       <div className='footer'> this is the footer</div>
    </div>

    </div>
  );
}

export default Home;