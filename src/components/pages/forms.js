import React from "react";
import  {Link} from 'react-router-dom';
import Nav from '../header/nav';
import Footer from '../footer/footer.js';
import Portfolio from '../img/portfolio.png';
import Portfolio2 from '../img/portfolio2.png';
import Portfolio3 from '../img/portfolio3.png';
export default class NameForm extends React.Component {
   render() {
    return (
      <div className='container'>
      <div className='divheader'>
      <Nav />
      </div>
       <div className='divclass'>
      <h1> stock management system</h1>
      <p>Inventory management is important to small businesses because it helps them prevent stockouts, 
      manage multiple locations, and ensure accurate recordkeeping.
       An inventory solution makes these processes easier than trying to do them all manually.
       The role of inventory management is to maintain a desired stock level of specific products or items.
       he desired level is a function of customer service requirements and the cost of inventory investment</p>
       <div className='projectimg'>
        <img src={Portfolio} className='img'/>
        <img src={Portfolio2} className='img'/>
        <img src={Portfolio3} className='img'/>
        </div>
       <h1> library management system</h1>
       <p>A library is a pool of sources of information. This similar resources had made a well-defined community including 
       readers, students etc to refer or to borrow the book more conveniently. 
       The Library Management System Software for Library Management is used to find books and 
       access journals easily. The library automation system automates the typical procedures of libraries
        and reduces the workload for library staffs</p>
        <div className='projectimg'>
        <img src={Portfolio} className='img'/>
        <img src={Portfolio2} className='img'/>
        <img src={Portfolio3} className='img'/>
        </div>
        <h1>Portfolo web app</h1>
        <p>A private portfolio website lets your inner creator go far beyond any cliché. 
        An online portfolio is certain to make you available and searchable for new clients. 
        It lets your potential employers find you the moment they get round to using a 
        search engine or looking through candidates applications</p>
        <p> Reasons to build portfolio site</p>
        <div className='projectimg'>
        <img src={Portfolio} className='img'/>
        <img src={Portfolio2} className='img'/>
        <img src={Portfolio3} className='img'/>
        </div>
        <div className='footer'><Footer /></div>
      </div>
      </div>
    );
  }
}