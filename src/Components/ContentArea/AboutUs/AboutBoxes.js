import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Goal from '../../../statics/images/goal.png';
import Telescope from '../../../statics/images/telescope.png';
import Cup from '../../../statics/images/cup.png';

class AboutBoxes extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="4">
                            <div className="rh-about-boxes">
                                <img src={Cup} alt="About Us" />
                                <div className="rh-heading-style">
                                    <h3>Goal</h3>
                                    <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in. Phasellus ultrices ac tortor nec auctor.</p>
                                </div>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="rh-about-boxes">
                                <img src={Goal} alt="About Us" />
                                <div className="rh-heading-style">
                                    <h3>Mission</h3>
                                    <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in. Phasellus ultrices ac tortor nec auctor.</p>
                                </div>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="rh-about-boxes">
                                <img src={Telescope} alt="About Us" />
                                <div className="rh-heading-style">
                                    <h3>Vision</h3>
                                    <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in. Phasellus ultrices ac tortor nec auctor.</p>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>                
        )
    }
}

export default AboutBoxes;
