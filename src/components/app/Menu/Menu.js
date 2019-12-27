import React, { Component } from 'react';
import {
  
  NavLink
} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                  
                  
                  <strong className="logo"><span id="R">R</span> <span id="A">A</span> <span id="S">S</span> <span id="T">T</span> <span id="A1">A</span>  <span id="C">C</span>  <span id="L">L</span>  <span id="A2">A</span>  <span id="T1">T</span></strong> 				
                  <li>

                    <NavLink
                        to="/"
                        activeStyle={{
                          fontWeight: "bold",
                          color: "black"
                        }}
                      >
                        Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                        to="/products-man"
                        activeStyle={{
                          fontWeight: "bold",
                          color: "black"
                        }}
                      >
                        Men's
                    </NavLink>
                  </li>
                   <li>
                      <NavLink
                        to="/products-woman"
                        activeStyle={{
                          fontWeight: "bold",
                          color: "black"
                        }}
                      >
                        Woman's
                      </NavLink>
                    </li>  
                    <li>
                      <NavLink
                        to="/contact"
                        activeStyle={{
                          fontWeight: "bold",
                          color: "black"
                        }}
                      >
                        Contact
                      </NavLink>
                    </li>  
                    <li>
                      <NavLink
                        to="/faq"
                        activeStyle={{
                          fontWeight: "bold",
                          color: "black"
                        }}
                      >
                        FAQs
                      </NavLink>
                    </li>  
                      


                  <li><a href="Shopping-Cart.html">Shopping-Cart</a></li>
                </ul>
                
              </div>
        );
    }
}

export default Menu;