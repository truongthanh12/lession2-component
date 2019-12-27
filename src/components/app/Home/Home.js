import React, { Component } from 'react';
import Banner from './Banner/Banner';
import BannerUnder from './BannerUnder/BannerUnder';

import Slide from './Slide';
import Item from './Products/Item';

class Home extends Component {

    render() {
        return (
            
            <div>
                
                <div> 
                     
                    <Slide />
                    
                    <Banner />
                    <div>
                        {/* Product */}
                        <h1 style={{textAlign: 'center', color: '#3498db'}}>Outstanding Product</h1>
                        
                        <Item />
                    </div>
                    
                    { /* BannerUnder */}
                    <BannerUnder />

                </div>

            </div>
        );
    }
}

export default Home;