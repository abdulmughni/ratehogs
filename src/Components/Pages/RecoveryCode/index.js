import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

import Header from '../../Header';
import { MDBBtn } from "mdbreact";

import './RecoveryCode.css';

import Logo from '../../../statics/images/logo.png';

import PackageBg from '../../../statics/images/package/package-bg.png';
import RecoveryArrow from '../../../statics/images/package/recovery-arrow.png';


class RecoveryCode extends Component {


    state = {
        recoverycode: ""
        
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
                                <p>Check your email , <strong>J*****0@gmail.com</strong></p> 
                            </div> 
                            <div className="package-plan preset-sec">
                                <div className="package-logo">
                                    <img src={RecoveryArrow} alt="Password Ok" />    
                                    <p className="text-left">We have sent you a recovery code to verify your identity. Enter the recovery code below to reset your password </p> 
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
                                                        name="recoverycode"
                                                        placeholder="Enter recovery code"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid code.
                                                    </div>
                                                    <i className="fas fa-key"></i>
                                                </div>
                                            </MDBCol>

                                            
                                        </MDBRow>
                                        
                                        <MDBBtn color="primary" type="submit">
                                            Reset Password
                                        </MDBBtn>
                                    </form>

                                </div>   
                                <div className="rc-link text-center">
                                    <p>Didn't receive a recovery code? Click <a href="#">Resend</a></p>
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

export default RecoveryCode;
