import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import GroupMeeting from '../../../statics/images/group-meeting.png'

class AboutBanner extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="4">
                            <div className="rh-heading-style pt-0">
                                <h3>About Us</h3>
                                <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in. Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue. </p>
                            </div>
                        </MDBCol>
                        <MDBCol md="8">
                            <div className="rh-img-talk">
                                <img src={GroupMeeting} alt="Group Meeting" className="img-fluid" />
                                <div className="talk-caption">
                                    <span className="rectangle-box"></span>
                                    <strong>Semone Whitely Bsc.</strong>
                                    <small>Laoreet odio vel</small>
                                    Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue.
                                </div>
                            </div>
                        </MDBCol> 
                    </MDBRow>
                </MDBContainer>           
            </div>                
        )
    }
}

export default AboutBanner;
