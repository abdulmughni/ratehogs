import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";

import Investment from '../../../statics/images/investment.png';
import CreditDebitCard from '../../../statics/images/credit-debit-card.png';
import Loan from '../../../statics/images/loan.png';
import Foreign from '../../../statics/images/foreign.png';
import Insurance from '../../../statics/images/insurance.png';
import RateCalculator from '../../../statics/images/rate-calculator.png';
import PeopleMeeting from '../../../statics/images/two-people-meeting.png';

class ServicesContent extends Component {
    render() {
        return(
            <div className="section pt-0">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="2">
                            <img src={PeopleMeeting} alt="group meeting" className="img-fluid" />
                        </MDBCol>
                        <MDBCol md="8">
                            <div className="rh-heading-style pt-0 text-center">
                                <h3>We are here to Help You</h3>
                                <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in. Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue. </p>
                            </div>
                            <MDBRow>
                                <MDBCol md="4">
                                    <MDBCard className="rh-services-box">
                                        <MDBCardImage src={Investment} />
                                        <MDBCardBody>
                                            <MDBCardTitle>Investments</MDBCardTitle>
                                            <MDBCardText>
                                                Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue.
                                            </MDBCardText>
                                            <div className="rh-arrow-button">
                                                <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBCard className="rh-services-box">
                                        <MDBCardImage src={CreditDebitCard} />
                                        <MDBCardBody>
                                            <MDBCardTitle>Credit &amp; Debit Cards</MDBCardTitle>
                                            <MDBCardText>
                                                Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue.
                                            </MDBCardText>
                                            <div className="rh-arrow-button">
                                                <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBCard className="rh-services-box">
                                        <MDBCardImage src={Loan} />
                                        <MDBCardBody>
                                            <MDBCardTitle>Loans &amp; Financing</MDBCardTitle>
                                            <MDBCardText>
                                                Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue.
                                            </MDBCardText>
                                            <div className="rh-arrow-button">
                                                <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBCard className="rh-services-box">
                                        <MDBCardImage src={Foreign} />
                                        <MDBCardBody>
                                            <MDBCardTitle>Foreign Exchange</MDBCardTitle>
                                            <MDBCardText>
                                                Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue.
                                            </MDBCardText>
                                            <div className="rh-arrow-button">
                                                <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBCard className="rh-services-box">
                                        <MDBCardImage src={Insurance} />
                                        <MDBCardBody>
                                            <MDBCardTitle>Insurance</MDBCardTitle>
                                            <MDBCardText>
                                                Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue.
                                            </MDBCardText>
                                            <div className="rh-arrow-button">
                                                <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBCard className="rh-services-box">
                                        <MDBCardImage src={RateCalculator} />
                                        <MDBCardBody>
                                            <MDBCardTitle>Rate Calculator</MDBCardTitle>
                                            <MDBCardText>
                                                Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue.
                                            </MDBCardText>
                                            <div className="rh-arrow-button">
                                                <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="2" className="col-text-bottom">
                            <img src={PeopleMeeting} alt="group meeting" className="img-fluid" />
                        </MDBCol>
                    </MDBRow>
                    
                </MDBContainer>
            </div>        
        )
    }
}

export default ServicesContent;
