import React from "react";
import  {Link} from 'react-router-dom';
import Nav from '../header/nav.js';
import Footer from '../footer/footer.js';
export default class Article extends React.Component {
  render() {
    return (
      <div className='container'>
      <div className='divheader'>
      <Nav />
      </div>
      <div className='divclass'>
      <h1>Technical Articles</h1>
      <p>Tips for Using Django’s ManyToManyField</p>
      <p>By far my most widely-read piece, this article comes up right behind 
      the official Django documentation when you search for “Django 
      ManyToManyField.” This article takes you through creating the 
      ManyToMany relationship, adding a “through” models, and adding
       and removing objects from either side of the ManyToMany relationship.</p>
       <p>
        A Tip About DRF Permissions<br/>
          <li>Custom Exceptions in Django REST Framework</li>
          <li>How to Add Django models to the Wagtail Admin</li>
          <li>Using Different Read and Write Serializers in Django REST Framework</li>
          <li>Tips for Using Django's ManyToManyField</li>
          <li>Celery and Docker and Django: Oh My!</li>
          <li>How to Feed the Birds</li>
          <li>Cultivating Self-Worth</li>
          <li>Docker: Useful Command Line Stuff</li>
          <li>A Brief Intro to Docker for Djangonauts</li>
          <li>Organizing More Accessible Tech Events</li>
       </p>
       <div className='footer'><Footer /></div>
      </div>
      </div>
    );
  }
}