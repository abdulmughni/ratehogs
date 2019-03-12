import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

import Header from '../../Header';
import { MDBBtn } from "mdbreact";

import './ResetEmail.css';

import Logo from '../../../statics/images/logo.png';

import PackageBg from '../../../statics/images/package/package-bg.png';
import EmailEnvelop from '../../../statics/images/package/email-envelop.png';


class ResetEmail extends Component {


    state = {
        resetemail: ""
        
      };
    
      submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    
      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };



    render() {
        return(
            <MDBContainer>
                <Header type="page" />
                <MDBRow className="po-row-position">
                    <MDBCol md="5">
                        <div className="package-sec">
                            <div className="package-logo">
                                <img src={Logo} alt="Rate Hogs" />    
                                <p>Did you forget your password ?</p> 
                            </div> 
                            <div className="package-plan preset-sec">
                                <div className="package-logo">
                                    <img src={EmailEnvelop} alt="Email Envelop" />    
                                    <p className="text-left">Enter your email associated with your account and we will send you a recovery code </p> 
                                </div>
                                <div className="po-form">
                                    <form
                                        className="needs-validation"
                                        onSubmit={this.submitHandler}
                                        noValidate
                                        >
                                        
                                        <MDBRow>
                                            <MDBCol md="12">
                                            <div className="input-icon-s">
                                                <input
                                                    value={this.state.city}
                                                    onChange={this.changeHandler}
                                                    type="text"
                                                    id="defaultFormRegisterPasswordEx4"
                                                    className="form-control"
                                                    name="resetemail"
                                                    placeholder="Enter your email address"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter your email
                                                </div>
                                                <i class="fas fa-envelope"></i>
                                            </div>
                                            </MDBCol>

                                            
                                        </MDBRow>
                                        
                                        <MDBBtn color="primary" type="submit">
                                            Send recovery code
                                        </MDBBtn>
                                    </form>

                                </div>   
                                <div className="rc-link">
                                    <p>If you no longer use the email address associated with your Ratehogs account, you may <a href="#">contact us</a> for help restoring access to your account.</p>
                                </div> 
                            </div> 
                               
                            <div className="po-copyright">
                                <p>Copyright 2018 Rate Hogs. All rights reserved</p>    
                            </div>
                            <div className="po-footer">
                                <ul>
                                    <li> <a href="#">About us</a> </li>
                                    <li> <a href="#">Legal</a> </li>
                                    <li> <a href="#">Terms of use</a> </li>
                                    <li> <a href="#">Privacy Policy</a> </li>
                                </ul>        
                            </div>    
                        </div>
                    </MDBCol>

                    <MDBCol md="7" className="po-option">
                        <img src={PackageBg} alt="Package Background" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default ResetEmail;
