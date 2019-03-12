import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class AdditionalInformation extends Component {
    render() {
        return(
            <div className="section pt-0 pb-0">
                <MDBContainer>
                    <div className="rh-heading-style pt-0 mb-3">
                        <h2>Additional Information</h2>
                    </div>

                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="rh-carousel-slider">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>Smart Use of Credit</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>
                                    
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>Advice</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>
                                        
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>More Detials</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>Smart Use of Credit</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>
                                    
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>Advice</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>
                                        
                                    <MDBCol md="4" className="clearfix d-md-block">
                                        <div className="border-box">
                                            <h3>More Detials</h3>
                                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                                        </div>
                                    </MDBCol>                                    
                                </MDBCarouselItem>
                            </MDBRow>
                        </MDBCarouselInner>
                    </MDBCarousel>

                    <div className="rh-heading-style mt-4 mb-3">
                        <h2>Security in Mind</h2>
                        <p className="banner-caption">Donec dapibus, dui eget venenatis pretium, ligula mauris convallis nibh, non egestas enim nunc quis urna. Duis sed mi pulvinar, imperdiet purus sit amet, finibus nisl. Nunc ac hendrerit lorem, in imperdiet ante.</p>
                    </div>
                </MDBContainer>
            </div>    
        )
    }
}

export default AdditionalInformation;
