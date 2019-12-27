import React, { Component } from 'react';

class Search2 extends Component {
    render() {
        return (
            <div>
                <div className="Productsman">
                    <p id="title">Best-Selling <strong>Mens</strong></p>
                        <form className="example">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i className="fa fa-search" /></button>
                        </form>
                </div>

            </div>
        );
    }
}

export default Search2;