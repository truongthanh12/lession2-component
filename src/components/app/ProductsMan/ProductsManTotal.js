import React, { Component } from 'react';
import Item2 from './Item2';
import Search from './Search';

class ProductsManTotal extends Component {
    render() {
        return (
            <div>
            {/* Product */}
            
            <h1 style={{textAlign: 'center', color: '#3498db'}}>Product For Man</h1>
            <Search />
                <Item2 />
                <div>
                    <a className="flex" href="#" id="loadMore" href="products-man">Load More</a>
                </div>
                
            
            </div>
        );
    }
}

export default ProductsManTotal;