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
       <div className='box'> sammy magucha is full stack developer building web apps using django as the backend development
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
       <div className='box'>     “My job is challenging without being too stressful,
        it gives me the time and resources to do what I want to do, 
        and I work with really great people. For now, that’s pretty perfect.” </div>
       <div className='box'>soft and technical articles</div>
       </div>
       <div className='footer'><p>name: sammy magucha</p><p>github: github.com/smagucha</p>
       <p>linked: linkedin.com/in/smagucha</p><p>email: smagucha@gmail.com</p>
       <p>phone: +254707181264</p></div>
    </div>

    </div>
  );
}

export default Home;