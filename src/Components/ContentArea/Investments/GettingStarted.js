import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";

import StockIcon from '../../../statics/images/investments/stocks.jpg';
import BondsIcon from '../../../statics/images/investments/bonds.jpg';
import MutualFundsIcon from '../../../statics/images/investments/mutual-funds.jpg';
import UnitTrustIcon from '../../../statics/images/investments/unit-trust.jpg';

class GettingStarted extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <div className="rh-heading-style pt-0 text-center">
                        <h3>Getting Started</h3>
                        <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in. Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue. </p>
                    </div>                            
                    <MDBRow>
                        <MDBCol md="3">
                            <MDBCard className="rh-services-box">
                                <MDBCardImage src={StockIcon} />
                                <MDBCardBody>
                                    <MDBCardTitle>Stocks</MDBCardTitle>
                                    <MDBCardText>
                                        Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue.
                                    </MDBCardText>
                                    <div className="rh-arrow-button">
                                        <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md="3">
                            <MDBCard className="rh-services-box">
                                <MDBCardImage src={BondsIcon} />
                                <MDBCardBody>
                                    <MDBCardTitle>Bonds</MDBCardTitle>
                                    <MDBCardText>
                                        Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue.
                                    </MDBCardText>
                                    <div className="rh-arrow-button">
                                        <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md="3">
                            <MDBCard className="rh-services-box">
                                <MDBCardImage src={MutualFundsIcon} />
                                <MDBCardBody>
                                    <MDBCardTitle>Mutual Funds</MDBCardTitle>
                                    <MDBCardText>
                                        Phasellus ultrices ac tortor nec auctor. Nunc ultrices, turpis et pretium maximus, ante sapien pulvinar velit, in luctus quam est et augue.
                                    </MDBCardText>
                                    <div className="rh-arrow-button">
                                        <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md="3">
                            <MDBCard className="rh-services-box">
                                <MDBCardImage src={UnitTrustIcon} />
                                <MDBCardBody>
                                    <MDBCardTitle>Unit Trust</MDBCardTitle>
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
                </MDBContainer>
            </div>        
        )
    }
}

export default GettingStarted;
