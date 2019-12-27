import React, { Component } from 'react';
import {
    Prompt,Redirect
  } from "react-router-dom";
class Contact extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isBlocking: false,
            isRedirect: false,
            txtName: '',
            txtAge: '',
            txtEmail: '',
            txtCountry: 'vn',
            txtMsg: '',
            radioSex: 1,
        };
    }
    isInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState(
            {
                isBlocking: target.value.length > 0,
                [name] :value
            }
        );
    }
    
    submitForm = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState(
            {
                isBlocking: false,
                isRedirect: true
            }
        );
        var Sex='';
        if(parseInt(this.state.radioSex) ===1){
            Sex= "Nam"
        } else
        {
            Sex="Nữ"
        }
        const {txtName,txtAge,txtEmail,txtMsg,txtCountry}=this.state

        var content='';
        content += 'fullname: ' +  txtName;
        content += ' - age: ' + txtAge;
        content += ' - gmail: ' +  txtEmail;
        
        content += ' - content: ' +  txtMsg;
        content += ' - country: ' +  txtCountry;
        content += ' - sex: ' +  Sex;
        console.log(content);
   }
    

    render() {
        // click submit chuyển trang
        // if(this.state.isRedirect){
        //     return(
        //         <Redirect to="/contact" />
        //     )
        // }
        return (
            <div>
                <Prompt
                    when={this.state.isBlocking} message={location =>
                     `Are you sure you want to go to ${location.pathname}`
                    }
                />
                    <div className="containerofcontact">
                        <div style={{textAlign: 'center'}}>
                            <h2>Contact Us</h2>
                            <p>Please leave us a message:</p>
                        </div>
                        <div className="row">
                            <div className="column">
                            <form onSubmit={ (event) => this.submitForm(event)}>
                                <label htmlFor="fname">Full Name</label>
                                <input  type="text" id="name" name="txtName" defaultValue={this.state.txtName} required placeholder="Your name.." onChange={ (event) => this.isInputChange(event)}/>
                                
                                <input type="radio" id="name" name="radioSex" value="1" onChange={ (event) => this.isInputChange(event)} checked={parseInt(this.state.radioSex) === 1}/>Nam
                                <input type="radio" id="name" name="radioSex" value="2" onChange={ (event) => this.isInputChange(event)} checked={parseInt(this.state.radioSex) === 2}/>Nữ 
                                <p><label htmlFor="age">Age</label></p>
                                <input type="text" id="age" name="txtAge" defaultValue={this.state.txtAge} placeholder="Your age.." onChange={ (event) => this.isInputChange(event)}/>
                                <label htmlFor="gmail">Gmail</label>
                                <input type="text" id="gmail" name="txtEmail" defaultValue={this.state.txtEmail} required placeholder="Your gmail.." onChange={ (event) => this.isInputChange(event)}/>
                                <label htmlFor="country" defaultValue={this.state.txtCountry} onChange={ (event) => this.isInputChange(event)}>Country</label>
                                <select id="country" name="txtCountry" value={this.state.txtCountry} onChange={ (event) => this.isInputChange(event)}>
                                <option>Select.. </option>
                                    <option value="vn">Việt Nam</option>
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                    
                                    <option value="tl">Thái Lan</option>
                                </select>
                                
                                <label htmlFor="subject">Content</label>
                                <textarea id="subject" name="txtMsg" defaultValue={this.state.txtMsg} placeholder="Write something.." style={{height: '170px'}}  onChange={ (event) => this.isInputChange(event)}/>
                                <input type="submit" defaultValue="Submit" />
                            </form>
                            </div>
                            <div className="column1">
                                <img src="../images/map.jpg" style={{width: '20%'}} align="center" alt="ban-do"/>
                            </div>
                        </div>
                    </div>
                    </div>
        );
    }
}

export default Contact;