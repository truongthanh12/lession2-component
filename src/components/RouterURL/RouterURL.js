import React, { Component } from 'react';
import {
    
    Switch,
    Route,
    
  } from "react-router-dom";
import Contact from '../app/Contact/Contact';
import Home from '../app/Home/Home';
import ProductsManTotal from '../app/ProductsMan/ProductsManTotal';
import ProductsWomanTotal from '../app/ProductsWoman/ProductsWomanTotal';
import Manage from '../app/Manage/Manage';



class RouterURL extends Component {
    render() {
        return (
          
                <div>
                    <Switch>
                        <Route exact path ="/" component={Home}></Route>
                        <Route path ="/contact" component={Contact}></Route>
                        <Route path ="/products-woman" component={ProductsWomanTotal}></Route>
                        <Route path ="/products-man" component={ProductsManTotal}></Route>    
                        <Route path ="/manage" component={Manage}></Route>        
                        <Route component={Home}></Route>
                    </Switch>
                </div>
            
            
        );
    }
}

export default RouterURL;