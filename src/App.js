import React from "react";
import "./App.css"
import About from './components/pages/about';
import Home from './components/pages/home'
import Contact from './components/pages/contact'
import NameForm from './components/pages/forms'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FormExample from './components/pages/form1'
import Nav from './components/header/nav.js';
import Mainnav from './components/main/main.js';

function App() {
  return (
    <Router> 
      <div>
        <Switch>
          <Route path="/" exact component ={Home} />
          <Route path="/contact" component ={Contact} />
          <Route path="/about" component ={About} />
          <Route path="/form" component ={NameForm} />
          <Route path="/form1" component ={FormExample} />
          <Route path='/nav' component={Nav} />

        </Switch> 
      </div> 

    </Router>
  );
}
export default App;
























