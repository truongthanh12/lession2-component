import React, { Component } from 'react';
import UnderRight from './UnderRight';
import UnderLeft from './UnderLeft';

class BannerUnder extends Component {
    render() {
        return (
            <div>
                <a className="bannerLeft" id="banner1" href="products-man">
                    <UnderLeft />
                  </a>
                  <a className="bannerRight" id="banner2" href="products-woman"> 
                    <UnderRight />
                  </a>
            </div>
        );
    }
}

export default BannerUnder;