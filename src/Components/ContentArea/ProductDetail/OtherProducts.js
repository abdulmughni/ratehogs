import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from "mdbreact";

import ScotiabankTransport from '../../../statics/images/product-detail/scotiabank-black-transport.jpg';
import ScotiabankScene from '../../../statics/images/product-detail/scotiabank-black-scene.jpg';
import Scotiabankmagna from '../../../statics/images/product-detail/scotiabank-black-magna.jpg';
import ScotiabankAdvantage from '../../../statics/images/product-detail/scotiabank-black-advantage.jpg';
import ScotiabankGrey from '../../../statics/images/product-detail/scotiabank-black-gery.jpg';


class OtherProducts extends Component {
    render() {
        return(
            <div className="section sponsored-products pt-0">
                <MDBContainer fluid>
                    <div className="rh-heading-style pt-0 text-center">
                        <h3>Other Products From Scotiabank</h3>
                    </div>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="rh-carousel-slider">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiabankTransport} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>Cash Bank Rewards</li>
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiabankScene} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>Cash Bank Rewards</li>
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Scotiabankmagna} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>Cash Bank Rewards</li>
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiabankAdvantage} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>Cash Bank Rewards</li>
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiabankGrey} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiabankGrey} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiabankTransport} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>Cash Bank Rewards</li>
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiabankScene} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>Cash Bank Rewards</li>
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Scotiabankmagna} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>Cash Bank Rewards</li>
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiabankAdvantage} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>Cash Bank Rewards</li>
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiabankGrey} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiabankGrey} />
                                            <MDBCardBody>
                                                <MDBCardTitle>ScotiaBank Black Visa</MDBCardTitle>
                                                <MDBCardText>
                                                    <ul className="rh-slides-list">
                                                        <li>46.99% Interest Rate</li>
                                                        <li>JMD $7,500 annual fee</li>
                                                    </ul>
                                                </MDBCardText>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBCarouselItem>
                            </MDBRow>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </div>
        )
    }
}

export default OtherProducts;
