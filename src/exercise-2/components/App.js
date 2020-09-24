import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
// import {RoutingContex } from 'react-router'
import Home from "./home/Home";
import Products from "./goods/Products";
import Product from "./goods/Product";
import User from "./my-profile/User";
import About from "./about/About";

class App extends Component {
  render() {
    return (
      <div className="app">
         <Router>
           <ul className='menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/goods'>Products</Link></li>
            <li><Link to='/user'>My Profile</Link></li>
            <li><Link to='/about'>About Us</Link></li>  
          </ul>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home} />             
              <Route path='/user' component={User} />
              <Route path='/about' component={About} />
              <Route exact path='/goods' component={Products} />
              <Route path='/goods/:id' component={Product} />
              <Redirect form="/goods" to="/Products" />
              <Route component={Home} />  
            </Switch> 
            </div>           
        </Router>
      </div>  
    );
  }
}

export default App;
