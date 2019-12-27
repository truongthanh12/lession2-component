import React, { Component } from 'react';
import NavManage from './NavManage';
import Table from './Table';
import Form from './Form';

class Manage extends Component {
  
    render() {
        return (
            <div>
                <NavManage />
            
                <Table />
                
                <Form />
            </div>
        );
    }
}

export default Manage;