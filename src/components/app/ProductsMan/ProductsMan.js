import React, { Component } from 'react';

class ProductsMan extends Component {
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
                            <p className="price">{ this.format_curency(this.props.price) +"VNĐ"}</p>
                            <p id="content">{ this.props.content }</p>
                            <p><button onClick={ this.add_card.bind(this) }>Add to Cart</button></p>
                        </div>    
                                           
                    </div> 
                       
                       </div> 
            
            
            
        );
    }
}

export default ProductsMan;