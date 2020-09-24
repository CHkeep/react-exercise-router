import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link,Route, Switch} from 'react-router-dom';
import Home from "./home/Home";
import About from "./about/About";
import User from "./my-profile/User";

class App extends Component {
  render() {
    return (
      <div className="app">
         <Router>
           <ul className='menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/user'>My Profile</Link></li>
            <li><Link to='/about'>About Us</Link></li>  
          </ul>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/user' component={User} />
              <Route path='/about' component={About} />
            </Switch> 
            </div>           
        </Router>
      </div>
    );
  }
}

export default App;
