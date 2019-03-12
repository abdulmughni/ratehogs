import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

import Header from '../../Header';
import { MDBBtn } from "mdbreact";

import './PasswordReset.css';

import Logo from '../../../statics/images/logo.png';

import PackageBg from '../../../statics/images/package/package-bg.png';
import PrTick from '../../../statics/images/package/pr-tick.png';


class PasswordReset extends Component {


    state = {
        newpassword: "",
        reenterpassword: ""
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
                                <p>One does not simply get a home loan</p> 
                            </div> 
                            <div className="package-plan preset-sec">
                                <div className="package-logo">
                                    <img src={PrTick} alt="Password Ok" />    
                                    <p>Your password have successfully been reset. Enter a new password to continue </p> 
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
                                                    name="newpassword"
                                                    placeholder="Enter new password"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter a valid password.
                                                </div>
                                                <i className="fas fa-key"></i>
                                            </div>
                                        </MDBCol>

                                        <MDBCol md="12">
                                            <div className="input-icon-s">
                                                <input
                                                    value={this.state.state}
                                                    onChange={this.changeHandler}
                                                    type="text"
                                                    id="defaultFormRegisterPasswordEx4"
                                                    className="form-control"
                                                    name="reenterpassword"
                                                    placeholder="Re-enter your password"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                Please enter a valid password.                                            
                                                </div>
                                                <i className="fas fa-lock"></i>
                                            </div>
                                        </MDBCol>
                                        
                                    </MDBRow>
                                    
                                    <MDBBtn color="primary" type="submit">
                                        Confirm
                                    </MDBBtn>
                                    </form>
                                </div>    
                            </div> 
                               
                            <div className="po-copyright">
                                <p>Copyright 2018 Rate Hogs. All rights reserved</p>    
                            </div>
                            <div className="po-footer">
                                <ul>
                                    <li> <a href="#!">About us</a> </li>
                                    <li> <a href="#!">Legal</a> </li>
                                    <li> <a href="#!">Terms of use</a> </li>
                                    <li> <a href="#!">Privacy Policy</a> </li>
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

export default PasswordReset;
