import React from "react";
import  {Link} from 'react-router-dom';
import Nav from '../header/nav.js';
function Home() {
  return (
    <div className='Container'>
      <div className='divheader'>
        <Nav />
      </div>
     <div className='divclass'> 
       <h1>home page </h1>
        <form>
          first name:
          <input type="text"/><br/>
           last name:
          <input type="text"/><br/>
          <select>
            <option>alphabet</option>
            <option>elephant</option>
            <option>leopard</option>
            <option>sam</option>
            <option>sam</option>
            </select><br/>
          <input type="submit" value="Submit" />
        </form>
    </div>
    </div>
  );
}

export default Home;