import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="productsman" >
                    <p id="title">Best-Selling <strong>Mens</strong></p>
                        <form className="example" >
                             
                            <input type="text" placeholder="Search.." id="search-text"   />
                            <button type="submit"><i className="fa fa-search"  /></button>
                                             
                        </form>
                        
                </div>

            </div>
        );
    }
}

export default Search;