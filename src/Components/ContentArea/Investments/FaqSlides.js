import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";


class FaqSlides extends Component {
    render() {
        return(
            <div className="section faq-section pt-0">
                <MDBContainer>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="rh-carousel-slider">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>How to avoid frictional expenses that can destroy your profits ?</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>
                                    
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>How to invest your money in your 20's ?</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>
                                        
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>How to buy stocks ?</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>How to avoid frictional expenses that can destroy your profits ?</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>
                                    
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>How to invest your money in your 20's ?</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>
                                        
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>How to buy stocks ?</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
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

export default FaqSlides;
