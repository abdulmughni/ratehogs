import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBIcon, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";

import Capital from '../../../statics/images/investments/reviews_and_more/capital.jpg';
import MayBerry from '../../../statics/images/investments/reviews_and_more/mayberry.jpg';
import VictoriaMutial from '../../../statics/images/investments/reviews_and_more/victoria_mutial.jpg';
import ScotiaBank from '../../../statics/images/investments/reviews_and_more/scotiabank.jpg';
import JmmaInvetments from '../../../statics/images/investments/reviews_and_more/jmma_investments.jpg';

class GettingStarted extends Component {
    render() {
        return(
            <div className="section reviews-more pt-0">
                <MDBContainer>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="rh-carousel-slider">
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBRow className="col-middle">
                                    <MDBCol>
                                        <MDBCard className="rh-services-box">
                                            <MDBCardImage src={Capital} />
                                            <MDBCardBody>
                                                <ul className="rh-slides-list">
                                                    <li>Low Brokerage</li>
                                                    <li>International companies offered</li>
                                                    <li>JMD $7,500 annual fee</li>
                                                </ul>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCard className="rh-services-box">
                                            <MDBCardImage src={MayBerry} />
                                            <MDBCardBody>
                                                <ul className="rh-slides-list">
                                                    <li>Low Brokerage</li>
                                                    <li>International companies offered</li>
                                                    <li>JMD $7,500 annual fee</li>
                                                </ul>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCard className="rh-services-box">
                                            <MDBCardImage src={VictoriaMutial} />
                                            <MDBCardBody>
                                                <ul className="rh-slides-list">
                                                    <li>Low Brokerage</li>
                                                    <li>International companies offered</li>
                                                    <li>JMD $7,500 annual fee</li>
                                                </ul>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCard className="rh-services-box">
                                            <MDBCardImage src={ScotiaBank} />
                                            <MDBCardBody>
                                                <ul className="rh-slides-list">
                                                    <li>Low Brokerage</li>
                                                    <li>International companies offered</li>
                                                    <li>JMD $7,500 annual fee</li>
                                                </ul>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCard className="rh-services-box">
                                            <MDBCardImage src={JmmaInvetments} />
                                            <MDBCardBody>
                                                <ul className="rh-slides-list">
                                                    <li>Low Brokerage</li>
                                                    <li>International companies offered</li>
                                                    <li>JMD $7,500 annual fee</li>
                                                </ul>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>                        
                                </MDBRow>
                            </MDBCarouselItem>

                            <MDBCarouselItem itemId="2">
                                <MDBRow className="col-middle">
                                    <MDBCol>
                                        <MDBCard className="rh-services-box">
                                            <MDBCardImage src={Capital} />
                                            <MDBCardBody>
                                                <ul className="rh-slides-list">
                                                    <li>Low Brokerage</li>
                                                    <li>International companies offered</li>
                                                    <li>JMD $7,500 annual fee</li>
                                                </ul>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCard className="rh-services-box">
                                            <MDBCardImage src={MayBerry} />
                                            <MDBCardBody>
                                                <ul className="rh-slides-list">
                                                    <li>Low Brokerage</li>
                                                    <li>International companies offered</li>
                                                    <li>JMD $7,500 annual fee</li>
                                                </ul>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCard className="rh-services-box">
                                            <MDBCardImage src={VictoriaMutial} />
                                            <MDBCardBody>
                                                <ul className="rh-slides-list">
                                                    <li>Low Brokerage</li>
                                                    <li>International companies offered</li>
                                                    <li>JMD $7,500 annual fee</li>
                                                </ul>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCard className="rh-services-box">
                                            <MDBCardImage src={ScotiaBank} />
                                            <MDBCardBody>
                                                <ul className="rh-slides-list">
                                                    <li>Low Brokerage</li>
                                                    <li>International companies offered</li>
                                                    <li>JMD $7,500 annual fee</li>
                                                </ul>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBCard className="rh-services-box">
                                            <MDBCardImage src={JmmaInvetments} />
                                            <MDBCardBody>
                                                <ul className="rh-slides-list">
                                                    <li>Low Brokerage</li>
                                                    <li>International companies offered</li>
                                                    <li>JMD $7,500 annual fee</li>
                                                </ul>
                                                <div className="rh-arrow-button">
                                                    <span>Find our more <MDBIcon icon="arrow-right" className="float-right" /></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>                        
                                </MDBRow>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </div>        
        )
    }
}

export default GettingStarted;
