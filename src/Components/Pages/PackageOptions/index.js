import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

import Header from '../../Header';
import { MDBBtn } from "mdbreact";

import './PackageOptions.css';

import Logo from '../../../statics/images/logo.png';
import Package1 from '../../../statics/images/package/package1.png';
import Package2 from '../../../statics/images/package/package2.png';
import Package3 from '../../../statics/images/package/package3.png';
import PackageBg from '../../../statics/images/package/package-bg.png';

class PackageOptions extends Component {
    render() {
        return(
            <MDBContainer>
                <Header type="page" />
                <MDBRow className="po-row-position">
                    <MDBCol md="5">
                        <div className="package-sec">
                            <div className="package-logo">
                                <img src={Logo} alt="Rate Hogs" />    
                                <p>Select a package to begin with</p> 
                            </div>    
                            <div className="package-plan">
                                <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="3">
                                        <h5>Baisc</h5>
                                        <img src={Package1} alt="Package Plan" />
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <h5>Features</h5>
                                        <p>- Two (2) advertisement</p>
                                        <p>- One (1) Report per month</p>
                                    </MDBCol>
                                    <MDBCol md="3">
                                        <h5>Price</h5>
                                        <p>$ 100.00</p>
                                    </MDBCol>
                                </MDBRow>  
                                </MDBContainer>  
                            </div> 
                            <div className="package-plan">
                                <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="3">
                                        <h5>Standard</h5>
                                        <img src={Package2} alt="Package Plan" />
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <h5>Features</h5>
                                        <p>- Two (2) product features</p>
                                        <p>- Two (2) sponsored products</p>
                                        <p>- Two (2) reports per month</p>
                                    </MDBCol>
                                    <MDBCol md="3">
                                        <h5>Price</h5>
                                        <p>$ 250.00</p>
                                    </MDBCol>
                                </MDBRow>  
                                </MDBContainer>  
                            </div>
                            <div className="package-plan">
                                <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="3">
                                        <h5>Premium</h5>
                                        <img src={Package3} alt="Package Plan" />
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <h5>Features</h5>
                                        <p>- Two (2) product features</p>
                                        <p>- Two (2) sponsored products</p>
                                        <p>- Unlimited reports per month</p>
                                        <p>- Full API access</p>
                                        <p>- monthly lead listing</p>
                                    </MDBCol>
                                    <MDBCol md="3">
                                        <h5>Price</h5>
                                        <p>$ 500.00</p>
                                    </MDBCol>
                                </MDBRow>  
                                </MDBContainer>  
                            </div> 
                            <div className="po-btn">
                                <MDBBtn>Continue without selecting a pachage</MDBBtn>
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

export default PackageOptions;
