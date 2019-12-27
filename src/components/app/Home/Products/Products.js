import React, { Component } from 'react';



class Products extends Component {
    
    add_card = () =>{
        alert("You added " + this.props.children + " into your cart. Success!");
    }
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
    render() {
        
        return (
                
                <div> 
                                     
                    <div className="Product1">     
                        <div className="card">
                        <img src={ this.props.images} style={{width: '100%'}} alt="san-pham"/>
                        <h1 href="">{ this.props.children }</h1>
                        <p id="desc">{this.props.desc}</p>
                        <p className="price">{ this.format_curency(this.props.price) +"VNĐ"}</p>
                        <p id="content">{ this.props.content }</p>
                        <p><button onClick={ this.add_card.bind(this)} /*href={ "clicked/" + this.props.pid + "/" + this.props.children +".html"}*/>Add to Cart</button></p>
                        </div> 
                                              
                </div>        
            

                
        </div>
            
        );
    }
}

export default Products;