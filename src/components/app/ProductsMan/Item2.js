import React, { Component } from 'react';

import ProductsMan from '../ProductsMan/ProductsMan';

class Item2 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          products : [
            
            {
              id: 1,
                name: "NAUTIC",
                price: "750000",
                images: "../images/item22.jpg",
                content: "SMALL/MEDIUM BRAIDED BRACELET",
              },
              
            {
              id: 2,
              name: "Chillmate Hero",
              price: "350000",
              images: "../images/item21.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 3,
              name: "After Glow",
              price: "1350000",
              images: "../images/item20.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 4,
              name: "Sunset Drops",
              price: "380000",
              images: "../images/item19.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 5,
              name: "Equals",
              price: "450000",
              images: "../images/item18.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 6,
              name: "Rain Cloud",
              price: "550000",
              images: "../images/item17.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 7,
              name: "Fellowship",
              price: "650000",
              images: "../images/item16.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 8,
              name: "Fried Edges",
              price: "1350000",
              images: "../images/item15.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 9,
              name: "Karma",
              price: "1650000",
              images: "../images/item14.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 10,
              name: "RED",
              price: "950000",
              images: "../images/item13.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 11,
              name: "Full Bright",
              price: "1950000",
              images: "../images/item12.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 12,
              name: "ZION II",
              price: "850000",
              images: "../images/item11.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 13,
              name: "Cosmos",
              price: "650000",
              images: "../images/item2.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 14,
              name: "Level 1",
              price: "650000",
              images: "../images/item10.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 15,
              name: "Shabazz",
              price: "750000",
              images: "../images/item9.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 16,
              name: "ZION II",
              price: "2350000",
              images: "../images/item1.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            
          ]
        };  
      }
      show_product = () => {
        const listproducts = this.state.products.map((item, keys) =>
        <ProductsMan key={keys} price={ item.price } content={item.content} images={item.images}>{item.name}</ProductsMan>
        
        );
        return listproducts;
      }
    render() {
        return (
            <div>
                
                { this.show_product() }
            </div>
        );
    }
}

export default Item2;