import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import DreamPersonal from '../../../statics/images/dream-personal-banner.png';
import ApprovedIcon from '../../../statics/images/approved-icon.png';
import RateHogeLanding from '../../../statics/images/rate-hoge-landing.png';

class Slides extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="rh-carousel-slider rh-service-slider">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1" className="col-middle">
                                    <MDBCol md="6">
                                        <img src={DreamPersonal} alt="Dream Personal" className="img-fluid" />
                                    </MDBCol>
                                    
                                    <MDBCol md="6">
                                        <div className="rh-services-banner">
                                            <div className="row-style">
                                                <img src={RateHogeLanding} alt="Dream Personal" className="img-fluid w-25 mr-3" />
                                                <img src={ApprovedIcon} alt="Dream Personal" className="img-fluid w-25" />
                                            </div>
                                            
                                            <div className="row-style">
                                                <p className="service-caption">Get up to $15 Million in 30 minutes! It's simple. It's fast.</p>
                                            </div>

                                            <div className="row-style">
                                                <p className="service-caption">All you need is a minimum of $100,000 in your account and you can access up to 95% of your money in 30 minutes!</p>
                                            </div>

                                            <MDBBtn>Learn More</MDBBtn>
                                            <MDBBtn>Apply Now</MDBBtn>
                                        </div>
                                    </MDBCol>                                    
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2" className="col-middle">
                                    <MDBCol md="6">
                                        <img src={DreamPersonal} alt="Dream Personal" className="img-fluid" />
                                    </MDBCol>
                                    
                                    <MDBCol md="6">
                                        <div className="rh-services-banner">
                                            <div className="row-style">
                                                <img src={RateHogeLanding} alt="Dream Personal" className="img-fluid w-25 mr-3" />
                                                <img src={ApprovedIcon} alt="Dream Personal" className="img-fluid w-25" />
                                            </div>
                                            
                                            <div className="row-style">
                                                <p className="service-caption">Get up to $15 Million in 30 minutes! It's simple. It's fast.</p>
                                            </div>

                                            <div className="row-style">
                                                <p className="service-caption">All you need is a minimum of $100,000 in your account and you can access up to 95% of your money in 30 minutes!</p>
                                            </div>

                                            <MDBBtn>Learn More</MDBBtn>
                                            <MDBBtn>Apply Now</MDBBtn>
                                        </div>
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

export default Slides;
