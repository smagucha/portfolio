import React from "react";
import  {Link} from 'react-router-dom';
import Nav from '../header/nav.js';
export default class FormExaaple extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    firstname:'',
    lastname: '',
    email: '',
    city: '',
    occupation: '',
    bio: '', };
  }

  change = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e =>{
     e.preventDefault();
    console.log(this.state);

  }
 
  render() {
    return (
      <div className='container'>
      <div className='divheader'>
      <Nav />
      </div>
      <div className='divclass'>
      <center><form>
      first name: <input
       name='firstname'
       placeholder ='firstname'
       value ={this.state.firstname}
        onChange={e =>this.change(e)} /><br/>

        last name: <input name='lastname'   placeholder ='lastname' 
        value ={this.state.lastname} onChange={e =>this.change(e)} /><br/>

        email: <input name='email'  placeholder ='email' value ={this.state.email} 
        onChange={e =>this.change(e)} /><br/>

        city: <input name='city' placeholder ='city' value ={this.state.city} onChange={e =>this.change(e)} /><br/>

        occupation: <input  name='occupation' placeholder ='occupation'  
        value ={this.state.occupation} onChange={e =>this.change(e)} /><br/>

        bio: <input name='bio' placeholder ='bio' value ={this.state.bio} 
        onChange={e =>this.change(e)} /><br/>

        <button onClick ={e=>this.onSubmit(e)}>submit</button>

      </form>
      </center>
      </div>
      </div>
    );
  }
}