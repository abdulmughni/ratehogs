import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from "mdbreact";

import ScotiaBank from '../../../statics/images/scotiabank.png';
import SagicorBank from '../../../statics/images/sagicor-bank.png';
import JnBankVisaGold from '../../../statics/images/jn-bank-visa-gold.png';
import FirstGlobalVisaGold from '../../../statics/images/first-global-visa-gold.png';
import FirstCaribbeanVisaGold from '../../../statics/images/first-caribbean-visa-gold.png';
import ChinaBank from '../../../statics/images/bank-of-china.png';


class SponsoredProducts extends Component {
    render() {
        return(
            <div className="section grey-section sponsored-products">
                <MDBContainer fluid>
                    <div className="rh-heading-style pt-0 text-center">
                        <h3>Sponsored Products</h3>
                    </div>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="rh-carousel-slider">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="2" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={ScotiaBank} />
                                            <MDBCardBody>
                                                <MDBCardTitle>Scotiabank Visa Gold</MDBCardTitle>
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
                                            <MDBCardImage src={SagicorBank} />
                                            <MDBCardBody>
                                                <MDBCardTitle>Sagicor Gold</MDBCardTitle>
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
                                            <MDBCardImage src={JnBankVisaGold} />
                                            <MDBCardBody>
                                                <MDBCardTitle>JN Bank Visa Gold</MDBCardTitle>
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
                                            <MDBCardImage src={FirstGlobalVisaGold} />
                                            <MDBCardBody>
                                                <MDBCardTitle>First Global Visa Gold</MDBCardTitle>
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
                                            <MDBCardImage src={ChinaBank} />
                                            <MDBCardBody>
                                                <MDBCardTitle>Bank of China Visa Gold</MDBCardTitle>
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
                                            <MDBCardImage src={FirstCaribbeanVisaGold} />
                                            <MDBCardBody>
                                                <MDBCardTitle>First Caribbean Visa Gold</MDBCardTitle>
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
                                            <MDBCardImage src={ScotiaBank} />
                                            <MDBCardBody>
                                                <MDBCardTitle>Scotiabank Visa Gold</MDBCardTitle>
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
                                            <MDBCardImage src={SagicorBank} />
                                            <MDBCardBody>
                                                <MDBCardTitle>Sagicor Gold</MDBCardTitle>
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
                                            <MDBCardImage src={JnBankVisaGold} />
                                            <MDBCardBody>
                                                <MDBCardTitle>JN Bank Visa Gold</MDBCardTitle>
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
                                            <MDBCardImage src={FirstGlobalVisaGold} />
                                            <MDBCardBody>
                                                <MDBCardTitle>First Global Visa Gold</MDBCardTitle>
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
                                            <MDBCardImage src={ChinaBank} />
                                            <MDBCardBody>
                                                <MDBCardTitle>Bank of China Visa Gold</MDBCardTitle>
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
                                            <MDBCardImage src={FirstCaribbeanVisaGold} />
                                            <MDBCardBody>
                                                <MDBCardTitle>First Caribbean Visa Gold</MDBCardTitle>
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

export default SponsoredProducts;
