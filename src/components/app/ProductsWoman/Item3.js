import React, { Component } from 'react';
import ProductsWoman from './ProductsWoman';

class Item3 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          products : [
            
            {
                name: "Galaxy 2",
                price: "750.000",
                images: "../images/item7.jpg",
                content: "SMALL/MEDIUM BRAIDED BRACELET",
              },
              
            {
              name: "Galaxy",
              price: "350.000",
              images: "../images/item1.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              name: "NOVA",
              price: "1350.000",
              images: "../images/item8.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              name: "Antimatter",
              price: "380.000",
              images: "../images/item7.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              name: "Borealis",
              price: "450.000",
              images: "../images/item6.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              name: "Void",
              price: "550.000",
              images: "../images/item5.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              name: "Kubrick",
              price: "650.000",
              images: "../images/item3.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              name: "MERLOT",
              price: "1350.000",
              images: "../images/item4.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              name: "Grey Matter",
              price: "1650.000",
              images: "../images/item1.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              name: "Soul Link",
              price: "950.000",
              images: "../images/item5.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              name: "Off-Clat",
              price: "1950.000",
              images: "../images/item8.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
            id: 9,
              name: "Dark Matter ",
              price: "1350000",
              images: "../images/item9.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 10,
              name: "DUNGAREE ",
              price: "1250000",
              images: "../images/item10.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 11,
              name: "ZION II",
              price: "650000",
              images: "../images/item11.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            {
              id: 12,
              name: "ZION II",
              price: "950000",
              images: "../images/item12.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
            },
            
          ]
        };  
      }
      show_product = () => {
        const listproducts = this.state.products.map((item, keys) =>
        <ProductsWoman key={keys} price={ item.price } content={item.content} images={item.images}>{item.name}</ProductsWoman>
        
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

export default Item3;