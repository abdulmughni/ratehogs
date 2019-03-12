import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBInput, MDBBtn, MDBIcon } from "mdbreact";

import Logo from '../../statics/images/logo.png';
import './footer.css';

const Footer = () => {
    return (
        <MDBFooter className="rh-footer">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3">
                        <div className="footer-widget">
                            <img src={Logo} alt="Rate Hogs" className="img-fluid mb-3" />    
                            <p>Donec ac dolor porttitor, cursus nunc eu, porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos aeos. Curabitur eget accumsan leo. Mauris condimentum risus finibus risus pretium, efficitur molestie eros.</p>
                        </div>                            
                    </MDBCol>

                    <MDBCol md="2">
                        <div className="footer-widget pt-footer">
                            <h4 className="title">Company</h4>    
                            <ul className="rh-footer-list">
                                <li>
                                    <a href="#!">About Us</a>
                                </li>
                                <li>
                                    <a href="#!">News</a>
                                </li>
                                <li>
                                    <a href="#!">Contact Us</a>
                                </li>                       
                            </ul>
                        </div>                            
                    </MDBCol>

                    <MDBCol md="2">
                        <div className="footer-widget pt-footer">
                            <h4 className="title">Services</h4>    
                            <ul className="rh-footer-list">
                                <li>
                                    <a href="#!">Compare Products</a>
                                </li>
                                <li>
                                    <a href="#!">FX Rates</a>
                                </li>
                                <li>
                                    <a href="#!">Loan Calculator</a>
                                </li>
                            </ul>
                        </div>                            
                    </MDBCol>

                    <MDBCol md="1">
                        <div className="footer-widget pt-footer">
                            <h4 className="title">Social</h4>    
                            <ul className="rh-footer-list">
                                <li>
                                    <a href="#!">Facebook</a>
                                </li>
                                <li>
                                    <a href="#!">Twitter</a>
                                </li>
                                <li>
                                    <a href="#!">LinkedIn</a>
                                </li>
                            </ul>
                        </div>                            
                    </MDBCol>

                    <MDBCol md="4">
                        <div className="footer-widget pt-footer">
                            <h4 className="title">Subscribe</h4>    
                            <div className="rh-subscribe">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter you email"
                                />
                                <MDBBtn>
                                    Submit <MDBIcon icon="arrow-right" className="ml-1" />
                                </MDBBtn>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="rh-socket">
                    <MDBCol md="4">
                        &copy; {new Date().getFullYear()} Copyright: <a href="#"> Rate Hogs </a>. All rights reserved
                    </MDBCol>

                    <MDBCol md="4" className="text-center">
                        Designed by Jordan Cooper
                    </MDBCol>

                    <MDBCol md="4">
                        <ul className="rh-socket-links-list">
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Terms and use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>            
        </MDBFooter>
    );
}

export default Footer;
