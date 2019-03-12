import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

import StarRatingComponent from 'react-star-rating-component';

import JnBank from '../../../../statics/images/mortgage/dym.jpg';
import ScotiaBank from '../../../../statics/images/mortgage/scotia-bank.jpg';
import Inhalf from '../../../../statics/images/mortgage/inhalf.jpg';
import TheJambGroup from '../../../../statics/images/mortgage/jamb-group.jpg';

import LabelWithHeart from '../../../../statics/images/label-with-heart.png';

class LowestInterest extends Component {
    constructor() {
        super();
        
        this.state = {
            rating: 3,
            reviews: 0
        };
    }

    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ rating: nextValue, reviews: 1 });
    }

    render() {
        const { rating, reviews } = this.state;
        return(
            <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="rh-carousel-slider mortgage-p-slide">
                <MDBCarouselInner>
                    <MDBRow>
                        <MDBCarouselItem itemId="1">
                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">    
                                    <div className="rh-pricing-col">
                                        <MDBCol md="12"> 
                                            <div className="rh-pricing-product">

                                                <span className="p-m-lable mobile-v">Product</span>

                                                <img src={LabelWithHeart} alt="hear label" className="label-heart img-fluid" />

                                                <div className="p-title pb-2">
                                                    Jn Bank
                                                </div>

                                                <img src={JnBank} alt="Product" className="p-img mb-2 img-fluid" />                                                
                                                <div className="startsRating">
                                                    <span className="stars">
                                                    <StarRatingComponent 
                                                        name="rate1" 
                                                        starCount={5}
                                                        value={rating}
                                                        onStarClick={this.onStarClick}
                                                    />
                                                    </span>
                                                    <span className="starsNumbers">{reviews} Reviews</span>                                                                        
                                                </div>
                                            </div> 
                                        </MDBCol>
                                        <MDBCol md="12"> $10,000.00 USD <span className="p-m-lable mobile-v">Account Minimum</span> </MDBCol>
                                        <MDBCol md="12"> $0.99 volume discount <span className="p-m-lable mobile-v">Commission Fee</span> </MDBCol>
                                        <MDBCol md="12"> Long Term <span className="p-m-lable mobile-v">Best For</span> </MDBCol>
                                        <MDBCol md="12">
                                            <div className="span-block">
                                                <span>Stock</span>
                                                <span>Options</span>
                                                <span>Mutual Funds</span>
                                                <span>FOREX</span>
                                                <span>Futures</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Tradeable Securities</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Promotions</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Benefits</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Drawbacks</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button">OPEN AN ACCOUNT</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>
                            
                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <div className="rh-pricing-col">
                                        <MDBCol md="12"> 
                                            <div className="rh-pricing-product">
                                                <span className="p-m-lable mobile-v">Product</span>

                                                <img src={LabelWithHeart} alt="hear label" className="label-heart" />

                                                <div className="p-title pb-2">
                                                    Scotiabank
                                                </div>

                                                <img src={ScotiaBank} alt="Product" className="p-img mb-2 img-fluid" />
                                                
                                                <div className="startsRating">
                                                    <span className="stars">
                                                    <StarRatingComponent 
                                                        name="rate1" 
                                                        starCount={5}
                                                        value={rating}
                                                        onStarClick={this.onStarClick}
                                                    />
                                                    </span>
                                                    <span className="starsNumbers">{reviews} Reviews</span>                                                                        
                                                </div>
                                            </div> 
                                        </MDBCol>
                                        <MDBCol md="12"> $10,000.00 USD <span className="p-m-lable mobile-v">Account Minimum</span> </MDBCol>
                                        <MDBCol md="12"> $0.99 volume discount <span className="p-m-lable mobile-v">Commission Fee</span> </MDBCol>
                                        <MDBCol md="12"> Long Term <span className="p-m-lable mobile-v">Best For</span> </MDBCol>
                                        <MDBCol md="12">
                                            <div className="span-block">
                                                <span>Stock</span>
                                                <span>Options</span>
                                                <span>Mutual Funds</span>
                                                <span>FOREX</span>
                                                <span>Futures</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Tradeable Securities</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Promotions</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Benefits</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Drawbacks</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button">OPEN AN ACCOUNT</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>

                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <div className="rh-pricing-col">
                                        <MDBCol md="12"> 
                                            <div className="rh-pricing-product">
                                                <span className="p-m-lable mobile-v">Product</span>
                                                <img src={LabelWithHeart} alt="hear label" className="label-heart" />

                                                <div className="p-title pb-2">
                                                    Sagicor
                                                </div>

                                                <img src={Inhalf} alt="Product" className="p-img mb-2 img-fluid" />                                                

                                                <div className="startsRating">
                                                    <span className="stars">
                                                    <StarRatingComponent 
                                                        name="rate1" 
                                                        starCount={5}
                                                        value={rating}
                                                        onStarClick={this.onStarClick}
                                                    />
                                                    </span>
                                                    <span className="starsNumbers">{reviews} Reviews</span>                                                                        
                                                </div>
                                            </div> 
                                        </MDBCol>
                                        <MDBCol md="12"> $10,000.00 USD <span className="p-m-lable mobile-v">Account Minimum</span> </MDBCol>
                                        <MDBCol md="12"> $0.99 volume discount <span className="p-m-lable mobile-v">Commission Fee</span> </MDBCol>
                                        <MDBCol md="12"> Long Term <span className="p-m-lable mobile-v">Best For</span> </MDBCol>
                                        <MDBCol md="12">
                                            <div className="span-block">
                                                <span>Stock</span>
                                                <span>Options</span>
                                                <span>Mutual Funds</span>
                                                <span>FOREX</span>
                                                <span>Futures</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Tradeable Securities</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Promotions</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Benefits</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Drawbacks</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button">OPEN AN ACCOUNT</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <div className="rh-pricing-col">
                                        <MDBCol md="12"> 
                                            <div className="rh-pricing-product">
                                                <span className="p-m-lable mobile-v">Product</span>

                                                <img src={LabelWithHeart} alt="hear label" className="label-heart" />

                                                <div className="p-title pb-2">
                                                    The JAMB Group
                                                </div>

                                                <img src={TheJambGroup} alt="Product" className="p-img mb-2 img-fluid" />                                                
                                                
                                                <div className="startsRating">
                                                    <span className="stars">
                                                    <StarRatingComponent 
                                                        name="rate1" 
                                                        starCount={5}
                                                        value={rating}
                                                        onStarClick={this.onStarClick}
                                                    />
                                                    </span>
                                                    <span className="starsNumbers">{reviews} Reviews</span>                                                                        
                                                </div>
                                            </div> 
                                        </MDBCol>
                                        <MDBCol md="12"> $10,000.00 USD <span className="p-m-lable mobile-v">Account Minimum</span> </MDBCol>
                                        <MDBCol md="12"> $0.99 volume discount <span className="p-m-lable mobile-v">Commission Fee</span> </MDBCol>
                                        <MDBCol md="12"> Long Term <span className="p-m-lable mobile-v">Best For</span> </MDBCol>
                                        <MDBCol md="12">
                                            <div className="span-block">
                                                <span>Stock</span>
                                                <span>Options</span>
                                                <span>Mutual Funds</span>
                                                <span>FOREX</span>
                                                <span>Futures</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Tradeable Securities</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Promotions</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Benefits</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Drawbacks</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button">OPEN AN ACCOUNT</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>
                            
                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <div className="rh-pricing-col">
                                        <MDBCol md="12"> 
                                            <div className="rh-pricing-product">
                                                <span className="p-m-lable mobile-v">Product</span>

                                                <img src={LabelWithHeart} alt="hear label" className="label-heart" />

                                                <div className="p-title pb-2">
                                                    Scotiabank
                                                </div>

                                                <img src={ScotiaBank} alt="Product" className="p-img mb-2 img-fluid" />
                                                
                                                <div className="startsRating">
                                                    <span className="stars">
                                                    <StarRatingComponent 
                                                        name="rate1" 
                                                        starCount={5}
                                                        value={rating}
                                                        onStarClick={this.onStarClick}
                                                    />
                                                    </span>
                                                    <span className="starsNumbers">{reviews} Reviews</span>                                                                        
                                                </div>
                                            </div> 
                                        </MDBCol>
                                        <MDBCol md="12"> $10,000.00 USD <span className="p-m-lable mobile-v">Account Minimum</span> </MDBCol>
                                        <MDBCol md="12"> $0.99 volume discount <span className="p-m-lable mobile-v">Commission Fee</span> </MDBCol>
                                        <MDBCol md="12"> Long Term <span className="p-m-lable mobile-v">Best For</span> </MDBCol>
                                        <MDBCol md="12">
                                            <div className="span-block">
                                                <span>Stock</span>
                                                <span>Options</span>
                                                <span>Mutual Funds</span>
                                                <span>FOREX</span>
                                                <span>Futures</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Tradeable Securities</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Promotions</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Benefits</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Drawbacks</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button">OPEN AN ACCOUNT</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>

                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <div className="rh-pricing-col">
                                        <MDBCol md="12"> 
                                            <div className="rh-pricing-product">
                                                <span className="p-m-lable mobile-v">Product</span>
                                                <img src={LabelWithHeart} alt="hear label" className="label-heart" />

                                                <div className="p-title pb-2">
                                                    Sagicor
                                                </div>

                                                <img src={Inhalf} alt="Product" className="p-img mb-2 img-fluid" />                                                

                                                <div className="startsRating">
                                                    <span className="stars">
                                                    <StarRatingComponent 
                                                        name="rate1" 
                                                        starCount={5}
                                                        value={rating}
                                                        onStarClick={this.onStarClick}
                                                    />
                                                    </span>
                                                    <span className="starsNumbers">{reviews} Reviews</span>                                                                        
                                                </div>
                                            </div> 
                                        </MDBCol>
                                        <MDBCol md="12"> $10,000.00 USD <span className="p-m-lable mobile-v">Account Minimum</span> </MDBCol>
                                        <MDBCol md="12"> $0.99 volume discount <span className="p-m-lable mobile-v">Commission Fee</span> </MDBCol>
                                        <MDBCol md="12"> Long Term <span className="p-m-lable mobile-v">Best For</span> </MDBCol>
                                        <MDBCol md="12">
                                            <div className="span-block">
                                                <span>Stock</span>
                                                <span>Options</span>
                                                <span>Mutual Funds</span>
                                                <span>FOREX</span>
                                                <span>Futures</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Tradeable Securities</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Promotions</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Benefits</span> </MDBCol>
                                        <MDBCol md="12"> Suspendisse tincidunt hendrerit urna, nec consequat justo venenatis sit amet. <span className="p-m-lable mobile-v">Drawbacks</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button">OPEN AN ACCOUNT</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>
                        </MDBCarouselItem>
                    </MDBRow>
                </MDBCarouselInner>
            </MDBCarousel>
        )
    }
}

export default LowestInterest;
