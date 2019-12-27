import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  
} from "react-router-dom";

import './App.css';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';
import Manage from './Manage/Manage';

class App extends Component {
  render() {
    return (   
      
      <Router>
        
        <div className="container"> 
          
          <Menu /> 
          <RouterURL />
          <Footer /> 
        </div>
      
      </Router>
      
    );
  }
}
 
export default App;
