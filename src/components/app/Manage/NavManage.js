import React, { Component } from 'react';

class NavManage extends Component {
    render() {
        return (
            <div>
                <div className="content1">
                <div className="mng1">
                    <strong className="logo"><span id="R">R</span> <span id="A">A</span> <span id="S">S</span> <span id="T">T</span> <span id="A1">A</span>  <span id="C">C</span>  <span id="L">L</span>  <span id="A2">A</span>  <span id="T1">T</span></strong> 	
                </div>
                <div className="mng2">
                    <input type="text" placeholder="nhập từ khóa.." />
                    <button type="submit">Search</button>
                </div>
            </div>
            </div>
        );
    }
}

export default NavManage;