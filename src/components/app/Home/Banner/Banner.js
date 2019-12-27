import React, { Component } from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
class Banner extends Component {
    render() {
        return (
            <div className="banner">
                  <LeftBanner />
                  <RightBanner />
                </div>
        );
    }
}

export default Banner;