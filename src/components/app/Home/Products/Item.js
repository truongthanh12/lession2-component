import React, { Component } from 'react';
import Products from './Products';

class Item extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          products : [
            
            {
                id: 1,
                name: "Galaxy 2",
                price: 750000,
                images: "../images/item2.jpg",
                content: "SMALL/MEDIUM BRAIDED BRACELET",
                desc: "Còn hàng"
              },
              
            {
              id: 2,
              name: "Galaxy",
              price: "350000",
              images: "../images/item1.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
              desc: "Còn hàng"
            },
            {
              id: 3,
              name: "NOVA",
              price: "1350000",
              images: "../images/item8.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
              desc: "Còn hàng"
            },
            {
              id: 4,
              name: "Antimatter",
              price: "380000",
              images: "../images/item7.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
              desc: "Còn hàng"
            },
            {
              id: 5,
              name: "Borealis",
              price: "450.000",
              images: "../images/item6.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
              desc: "Còn hàng"
            },
            {
              id: 6,
              name: "Void",
              price: "550000",
              images: "../images/item5.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
              desc: "Còn hàng"
            },
            {
              id: 7,
              name: "Kubrick",
              price: "650000",
              images: "../images/item3.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
              desc: "Còn hàng"
            },
            {
              id: 8,
              name: "ZION II",
              price: "1350000",
              images: "../images/item4.jpg",
              content: "SMALL/MEDIUM BRAIDED BRACELET",
              desc: "Còn hàng"
            },
            
              
    
          ]
        };  
      }
      
      show_product = () => {
        const listproducts = this.state.products.map((item, keys) =>
        <Products key={keys} price={ item.price } content={item.content} desc={item.desc} images={item.images}>{item.name}</Products>
        
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

export default Item;