import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Manage from '../Manage/Manage';

class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      txtEmail: '',
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
          
      }
      );
      var content='';
        content += 'Email : ' +  this.state.txtEmail;
    console.log(content)
  alert("Success!")
    }
    render() {
      
        return (
         
            <div>
               {/* <Prompt
                    when={this.state.isBlocking} message={location =>
                     `Are you sure you want to go to ${location.pathname}`
                    }
                /> */}
                <div className="about">
                    <p /><h2>About Us</h2><p />
                    <a id="trai" /> 
                    <p id="phai">luon cung cap chất lượng đến các bạn</p>
                    <p >Admin</p>
                  </div>
                  <div className="contact">
                    <p /><h2>Contacts</h2><p />
                    <p><span>Email:</span>info@gmail.com</p>
                    <p><span>Tel:</span>0902930223</p>
                    <p><span>Adress: </span>248 Nguyen Kim Cuong, Cu Chi, TP.HCM</p>
                    <img src="../images/3666.jpg" alt="icons" width="auto" height={180} align="center" />
                  </div>
                  <form onSubmit={ (event) => this.submitForm(event)}>
                  <div className="link" >
                    <h2>Subcribe</h2>
                    <label>fill to blank below to receive mail from us</label>
                    <input type="text" name="txtEmail" width="60px" className="input1" placeholder="fill your mail" required onChange={ (event) => this.isInputChange(event)} defaultValue={this.state.txtEmail}/>
                    <input  type="submit" defaultValue="submit" width="80px" className="input2" />
                    <p>zmisthemes © All right reserved</p>
                  </div>
                  </form>
                  
            </div>
        );
    }
}

export default Footer;