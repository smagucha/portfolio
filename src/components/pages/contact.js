import React from "react";
import  {Link} from 'react-router-dom';
import Nav from '../header/nav.js';
import Footer from '../footer/footer.js';
import './style.css'
import './form.css'
function Contact() {
  return (
  	<div className="container">
  	<div className="divheader">
  	<Nav />
  	</div>
    <div className="divclass"> 
  
    <div className="container1">
        <form >
          <div className="row">
            <div className="col-25">
              <label for="fname">First Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="subject">Subject</label>
            </div>
            <div className="col-75">
              <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}>                                                    
              </textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>


            
              
              
        
      
      
      <div className='footer'><Footer /></div> 
    </div>
    </div>
  );
}

export default Contact;