import React, { Component } from 'react';
import Item3 from './Item3';
import Search2 from './Search2';

class ProductsWomanTotal extends Component {
    render() {
        return (
            <div>
            {/* Product */}
            
            <h1 style={{textAlign: 'center', color: '#3498db'}}>Product For Woman</h1>
                <Search2 />
                <Item3 />
                <div>
                    <a className="flex" href="#" id="loadMore" href="products-woman">Load More</a>
                </div>
                
            
            </div>
        );
    }
}

export default ProductsWomanTotal;