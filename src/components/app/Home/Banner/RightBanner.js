import React, { Component } from 'react';

class RightBanner extends Component {
    render() {
        return (
            <a className="bannerRight" href="/products-man">
            <p className="textR">Free<br /><strong>Shipping</strong></p>
            <p className="viewR">On all orders<br />Over 200000đ !</p>
          </a>
        );
    }
}

export default RightBanner;