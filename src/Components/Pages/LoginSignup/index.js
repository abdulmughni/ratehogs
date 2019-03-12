import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBNav, MDBNavItem, MDBNavLink, MDBAnimation } from "mdbreact";

import Header from '../../Header';
import SignIn from './SignIn';
import SignUp from './SignUp';

import PackageBg from '../../../statics/images/package/package-bg.png';
import Logo from '../../../statics/images/logo.png';

import './LoginSignup.css';

class LoginSignup extends Component { 
    constructor() {
        super();
        
        this.state = {
            activeItemPills: '1'
        };
    }
     
    togglePills = tab => () => {
        const { activePills } = this.state;

        if (activePills !== tab) {
        this.setState({ activeItemPills: tab });
        }
    }

    render() {
        const { activeItemPills } = this.state;

        return( 
            <MDBContainer>
                <Header type="page" />
                <MDBRow className="po-row-position">
                    <MDBCol md="5">
                        <div className="package-sec">
                            <div className="package-logo">
                                <img src={Logo} alt="Rate Hogs" />
                                <p>Sign in to find the best rates</p> 
                            </div> 
                            <div className="package-plan preset-sec">
                                <MDBNav className="hs-pills-tabs">
                                    <MDBNavItem>
                                        <MDBNavLink to="#" className={activeItemPills==="1" ? "active" : "" } onClick={this.togglePills("1")}>
                                        Sign in
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#" className={activeItemPills==="2" ? "active" : "" } onClick={this.togglePills("2")}>
                                        Sign up
                                        </MDBNavLink>
                                    </MDBNavItem>                                    
                                </MDBNav>

                                { activeItemPills === '1' && 
                                    <MDBAnimation type="fadeIn">
                                        <SignIn />
                                    </MDBAnimation>
                                }

                                { activeItemPills === '2' && 
                                    <MDBAnimation type="fadeIn">
                                        <SignUp />
                                    </MDBAnimation>
                                }

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

export default LoginSignup;
