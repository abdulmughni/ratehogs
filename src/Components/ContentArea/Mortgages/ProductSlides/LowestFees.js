import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

import StarRatingComponent from 'react-star-rating-component';

import JnBank from '../../../../statics/images/mortgage/dym.jpg';
import ScotiaBank from '../../../../statics/images/mortgage/scotia-bank.jpg';
import Inhalf from '../../../../statics/images/mortgage/inhalf.jpg';
import TheJambGroup from '../../../../statics/images/mortgage/jamb-group.jpg';

import LabelWithHeart from '../../../../statics/images/label-with-heart.png';

class LowestFee extends Component {
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
                                    <div className="rh-pricing-col rh-grey-theme">
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
                                        <MDBCol md="12"> Fixed <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                        <MDBCol md="12"> $1M - $40M* <span className="p-m-lable mobile-v">Loan amount</span> </MDBCol>
                                        <MDBCol md="12"> 25.99% <span className="p-m-lable mobile-v">APR</span> </MDBCol>
                                        <MDBCol md="12"> 36 months <span className="p-m-lable mobile-v">Tenure</span> </MDBCol>
                                        <MDBCol md="12"> 11% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle"> 
                                            <div className="span-block">
                                                <span>- 0% intro APR</span>
                                                <span>- One-time $150 cash bonus</span>
                                            </div>     
                                        <span className="p-m-lable mobile-v">Pros</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle">
                                            <div className="span-block">
                                                <span>- No rotating categories</span>
                                                <span>- No minimum to redeem for cash back</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Cons</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button rh-grey-theme">Apply Now</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>
                            
                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <div className="rh-pricing-col rh-grey-theme">
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
                                        <MDBCol md="12"> Fixed <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                        <MDBCol md="12"> $1M - $40M* <span className="p-m-lable mobile-v">Loan amount</span> </MDBCol>
                                        <MDBCol md="12"> 25.99% <span className="p-m-lable mobile-v">APR</span> </MDBCol>
                                        <MDBCol md="12"> 36 months <span className="p-m-lable mobile-v">Tenure</span> </MDBCol>
                                        <MDBCol md="12"> 11% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle"> 
                                            <div className="span-block">
                                                <span>- 0% intro APR</span>
                                                <span>- One-time $150 cash bonus</span>
                                            </div>     
                                        <span className="p-m-lable mobile-v">Pros</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle">
                                            <div className="span-block">
                                                <span>- No rotating categories</span>
                                                <span>- No minimum to redeem for cash back</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Cons</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button rh-grey-theme">Apply Now</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>

                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <div className="rh-pricing-col rh-grey-theme">
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
                                        <MDBCol md="12"> Fixed <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                        <MDBCol md="12"> $1M - $40M* <span className="p-m-lable mobile-v">Loan amount</span> </MDBCol>
                                        <MDBCol md="12"> 25.99% <span className="p-m-lable mobile-v">APR</span> </MDBCol>
                                        <MDBCol md="12"> 36 months <span className="p-m-lable mobile-v">Tenure</span> </MDBCol>
                                        <MDBCol md="12"> 11% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle"> 
                                            <div className="span-block">
                                                <span>- 0% intro APR</span>
                                                <span>- One-time $150 cash bonus</span>
                                            </div>     
                                        <span className="p-m-lable mobile-v">Pros</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle">
                                            <div className="span-block">
                                                <span>- No rotating categories</span>
                                                <span>- No minimum to redeem for cash back</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Cons</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button rh-grey-theme">Apply Now</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <div className="rh-pricing-col rh-grey-theme">
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
                                        <MDBCol md="12"> Fixed <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                        <MDBCol md="12"> $1M - $40M* <span className="p-m-lable mobile-v">Loan amount</span> </MDBCol>
                                        <MDBCol md="12"> 25.99% <span className="p-m-lable mobile-v">APR</span> </MDBCol>
                                        <MDBCol md="12"> 36 months <span className="p-m-lable mobile-v">Tenure</span> </MDBCol>
                                        <MDBCol md="12"> 11% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle"> 
                                            <div className="span-block">
                                                <span>- 0% intro APR</span>
                                                <span>- One-time $150 cash bonus</span>
                                            </div>     
                                        <span className="p-m-lable mobile-v">Pros</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle">
                                            <div className="span-block">
                                                <span>- No rotating categories</span>
                                                <span>- No minimum to redeem for cash back</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Cons</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button rh-grey-theme">Apply Now</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>
                            
                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <div className="rh-pricing-col rh-grey-theme">
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
                                        <MDBCol md="12"> Fixed <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                        <MDBCol md="12"> $1M - $40M* <span className="p-m-lable mobile-v">Loan amount</span> </MDBCol>
                                        <MDBCol md="12"> 25.99% <span className="p-m-lable mobile-v">APR</span> </MDBCol>
                                        <MDBCol md="12"> 36 months <span className="p-m-lable mobile-v">Tenure</span> </MDBCol>
                                        <MDBCol md="12"> 11% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle"> 
                                            <div className="span-block">
                                                <span>- 0% intro APR</span>
                                                <span>- One-time $150 cash bonus</span>
                                            </div>     
                                        <span className="p-m-lable mobile-v">Pros</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle">
                                            <div className="span-block">
                                                <span>- No rotating categories</span>
                                                <span>- No minimum to redeem for cash back</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Cons</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button rh-grey-theme">Apply Now</MDBBtn> </MDBCol>
                                    </div>                                                        
                                </MDBRow>
                            </MDBCol>

                            <MDBCol md="4" className="clearfix d-md-block">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <div className="rh-pricing-col rh-grey-theme">
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
                                        <MDBCol md="12"> Fixed <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                        <MDBCol md="12"> $1M - $40M* <span className="p-m-lable mobile-v">Loan amount</span> </MDBCol>
                                        <MDBCol md="12"> 25.99% <span className="p-m-lable mobile-v">APR</span> </MDBCol>
                                        <MDBCol md="12"> 36 months <span className="p-m-lable mobile-v">Tenure</span> </MDBCol>
                                        <MDBCol md="12"> 11% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle"> 
                                            <div className="span-block">
                                                <span>- 0% intro APR</span>
                                                <span>- One-time $150 cash bonus</span>
                                            </div>     
                                        <span className="p-m-lable mobile-v">Pros</span> </MDBCol>
                                        <MDBCol md="12" className="p-height-2 col-text-middle">
                                            <div className="span-block">
                                                <span>- No rotating categories</span>
                                                <span>- No minimum to redeem for cash back</span>
                                            </div>
                                        <span className="p-m-lable mobile-v">Cons</span> </MDBCol>
                                        <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                        <MDBCol md="12"> <MDBBtn className="p-table-button rh-grey-theme">Apply Now</MDBBtn> </MDBCol>
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

export default LowestFee;
