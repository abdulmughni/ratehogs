import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from "mdbreact";

import StarRatingComponent from 'react-star-rating-component';

import ScotiaBank from '../../../statics/images/scotiabank.png';
import SagicorBank from '../../../statics/images/sagicor-bank.png';
import JnBankVisaGold from '../../../statics/images/jn-bank-visa-gold.png';
import FirstGlobalVisaGold from '../../../statics/images/first-global-visa-gold.png';
import FirstCaribbeanVisaGold from '../../../statics/images/first-caribbean-visa-gold.png';
import ChinaBank from '../../../statics/images/bank-of-china.png';

import PriceTitleLabel from '../../../statics/images/label.png';
import LabelWithHeart from '../../../statics/images/label-with-heart.png';

class CompareCreditCards extends Component { 
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
            <div>
                <div className="section grey-section">
                    <MDBContainer>
                        <div className="rh-heading-style pt-0 text-center">
                            <h3>Compare Credit Cards</h3>
                            <p className="heading-caption">Per conubia nostra, per inceptos himenaeos curabitur eget accumsan leo mauris condimentum risus finibus risus pretium, efficitur molestie eros tincidunt.</p>
                        </div>
                        <MDBRow>
                            <MDBCol md="2" className="desktop-v">
                                <MDBRow className="col-middle rh-pricing-labels">
                                    <MDBCol md="12"> <span>Categories</span> </MDBCol>
                                    <MDBCol md="12" className="p-table-product"> <span>Product</span> </MDBCol>
                                    <MDBCol md="12"> <span>Provider</span> </MDBCol>
                                    <MDBCol md="12"> <span>Currency</span> </MDBCol>
                                    <MDBCol md="12"> <span>Type</span> </MDBCol>
                                    <MDBCol md="12"> <span>Annual Fee</span> </MDBCol>
                                    <MDBCol md="12"> <span>Interest Rate</span> </MDBCol>
                                    <MDBCol md="12"> <span>Min.Salary Required</span> </MDBCol>
                                    <MDBCol md="12"> <span>Cash Advance Fee</span> </MDBCol>
                                    <MDBCol md="12"> <span>Late Payment Fee</span> </MDBCol>
                                    <MDBCol md="12"> <span>Min. Payment%</span> </MDBCol>
                                    <MDBCol md="12"> <span>Over Limit Fee*</span> </MDBCol>
                                    <MDBCol md="12"> <span>Rewards Program</span> </MDBCol>
                                    <MDBCol md="12"> <span>Rate Hogs Approved</span> </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md="10">
                                <MDBRow className="col-middle rh-pricing-table">
                                    <MDBCol md="4" className="mb-3"> 
                                        <div className="rh-title"><img src={PriceTitleLabel} alt="Title Label" /> Featured Products</div> 
                                    </MDBCol>
                                    <MDBCol md="4" className="mb-3"> 
                                        <div className="rh-title grey-color">Lowest Interest</div> 
                                    </MDBCol>
                                    <MDBCol md="4" className="mb-3"> 
                                        <div className="rh-title grey-color">Rewards Cards</div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="rh-carousel-slider">
                                    <MDBCarouselInner>
                                        <MDBRow>
                                            <MDBCarouselItem itemId="1">
                                                <MDBCol md="4" className="clearfix d-md-block">
                                                    <MDBRow className="col-middle rh-pricing-table">    
                                                        <div className="rh-pricing-col">
                                                            <MDBCol md="12"> 
                                                                <div className="rh-pricing-product">
                                                                    <span className="p-m-lable mobile-v">Product</span>
                                                                    <img src={LabelWithHeart} alt="hear label" className="label-heart" />
                                                                    <img src={ScotiaBank} alt="Product" className="p-img mb-2" />
                                                                    <div className="p-title">
                                                                        Scotiabank Visa Gold
                                                                    </div>
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
                                                            <MDBCol md="12"> Visa <span className="p-m-lable mobile-v">Provider</span> </MDBCol>
                                                            <MDBCol md="12"> JMD/USD <span className="p-m-lable mobile-v">Currency</span> </MDBCol>
                                                            <MDBCol md="12"> Personal <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                                            <MDBCol md="12"> $4,500.00 JMD <span className="p-m-lable mobile-v">Annual Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 44.75% - 51.99% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                                            <MDBCol md="12"> - <span className="p-m-lable mobile-v">Min.Salary Required</span> </MDBCol>
                                                            <MDBCol md="12"> 7% - 10% <span className="p-m-lable mobile-v">Cash Advance Fee</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 <span className="p-m-lable mobile-v">Late Payment Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 5% <span className="p-m-lable mobile-v">Min. Payment%</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 JMD <span className="p-m-lable mobile-v">Over Limit Fee*</span> </MDBCol>
                                                            <MDBCol md="12"> No <span className="p-m-lable mobile-v">Rewards Program</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBBtn className="p-table-button">Apply Now</MDBBtn> </MDBCol>
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
                                                                    <img src={SagicorBank} alt="Product" className="p-img mb-2" />
                                                                    <div className="p-title">
                                                                        Sagicor Gold
                                                                    </div>
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
                                                            <MDBCol md="12"> Visa <span className="p-m-lable mobile-v">Provider</span> </MDBCol>
                                                            <MDBCol md="12"> JMD/USD <span className="p-m-lable mobile-v">Currency</span> </MDBCol>
                                                            <MDBCol md="12"> Personal <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                                            <MDBCol md="12"> $4,500.00 JMD <span className="p-m-lable mobile-v">Annual Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 44.75% - 51.99% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                                            <MDBCol md="12"> - <span className="p-m-lable mobile-v">Min.Salary Required</span> </MDBCol>
                                                            <MDBCol md="12"> 7% - 10% <span className="p-m-lable mobile-v">Cash Advance Fee</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 <span className="p-m-lable mobile-v">Late Payment Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 5% <span className="p-m-lable mobile-v">Min. Payment%</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 JMD <span className="p-m-lable mobile-v">Over Limit Fee*</span> </MDBCol>
                                                            <MDBCol md="12"> No <span className="p-m-lable mobile-v">Rewards Program</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBBtn className="p-table-button">Apply Now</MDBBtn> </MDBCol>
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
                                                                    <img src={JnBankVisaGold} alt="Product" className="p-img mb-2" />
                                                                    <div className="p-title">
                                                                        JN Bank Visa Gold
                                                                    </div>
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
                                                            <MDBCol md="12"> Visa <span className="p-m-lable mobile-v">Provider</span> </MDBCol>
                                                            <MDBCol md="12"> JMD/USD <span className="p-m-lable mobile-v">Currency</span> </MDBCol>
                                                            <MDBCol md="12"> Personal <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                                            <MDBCol md="12"> $4,500.00 JMD <span className="p-m-lable mobile-v">Annual Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 44.75% - 51.99% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                                            <MDBCol md="12"> - <span className="p-m-lable mobile-v">Min.Salary Required</span> </MDBCol>
                                                            <MDBCol md="12"> 7% - 10% <span className="p-m-lable mobile-v">Cash Advance Fee</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 <span className="p-m-lable mobile-v">Late Payment Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 5% <span className="p-m-lable mobile-v">Min. Payment%</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 JMD <span className="p-m-lable mobile-v">Over Limit Fee*</span> </MDBCol>
                                                            <MDBCol md="12"> No <span className="p-m-lable mobile-v">Rewards Program</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBBtn className="p-table-button">Apply Now</MDBBtn> </MDBCol>
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
                                                                    <img src={FirstGlobalVisaGold} alt="Product" className="p-img mb-2" />
                                                                    <div className="p-title">
                                                                        First Global Visa Gold
                                                                    </div>
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
                                                            <MDBCol md="12"> Visa <span className="p-m-lable mobile-v">Provider</span> </MDBCol>
                                                            <MDBCol md="12"> JMD/USD <span className="p-m-lable mobile-v">Currency</span> </MDBCol>
                                                            <MDBCol md="12"> Personal <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                                            <MDBCol md="12"> $4,500.00 JMD <span className="p-m-lable mobile-v">Annual Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 44.75% - 51.99% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                                            <MDBCol md="12"> - <span className="p-m-lable mobile-v">Min.Salary Required</span> </MDBCol>
                                                            <MDBCol md="12"> 7% - 10% <span className="p-m-lable mobile-v">Cash Advance Fee</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 <span className="p-m-lable mobile-v">Late Payment Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 5% <span className="p-m-lable mobile-v">Min. Payment%</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 JMD <span className="p-m-lable mobile-v">Over Limit Fee*</span> </MDBCol>
                                                            <MDBCol md="12"> No <span className="p-m-lable mobile-v">Rewards Program</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBBtn className="p-table-button">Apply Now</MDBBtn> </MDBCol>
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
                                                                    <img src={ChinaBank} alt="Product" className="p-img mb-2" />
                                                                    <div className="p-title">
                                                                        Bank of China Visa Gold
                                                                    </div>
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
                                                            <MDBCol md="12"> Visa <span className="p-m-lable mobile-v">Provider</span> </MDBCol>
                                                            <MDBCol md="12"> JMD/USD <span className="p-m-lable mobile-v">Currency</span> </MDBCol>
                                                            <MDBCol md="12"> Personal <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                                            <MDBCol md="12"> $4,500.00 JMD <span className="p-m-lable mobile-v">Annual Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 44.75% - 51.99% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                                            <MDBCol md="12"> - <span className="p-m-lable mobile-v">Min.Salary Required</span> </MDBCol>
                                                            <MDBCol md="12"> 7% - 10% <span className="p-m-lable mobile-v">Cash Advance Fee</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 <span className="p-m-lable mobile-v">Late Payment Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 5% <span className="p-m-lable mobile-v">Min. Payment%</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 JMD <span className="p-m-lable mobile-v">Over Limit Fee*</span> </MDBCol>
                                                            <MDBCol md="12"> No <span className="p-m-lable mobile-v">Rewards Program</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBBtn className="p-table-button">Apply Now</MDBBtn> </MDBCol>
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
                                                                    <img src={FirstCaribbeanVisaGold} alt="Product" className="p-img mb-2" />
                                                                    <div className="p-title">
                                                                        First Caribbean Visa Gold
                                                                    </div>
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
                                                            <MDBCol md="12"> Visa <span className="p-m-lable mobile-v">Provider</span> </MDBCol>
                                                            <MDBCol md="12"> JMD/USD <span className="p-m-lable mobile-v">Currency</span> </MDBCol>
                                                            <MDBCol md="12"> Personal <span className="p-m-lable mobile-v">Type</span> </MDBCol>
                                                            <MDBCol md="12"> $4,500.00 JMD <span className="p-m-lable mobile-v">Annual Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 44.75% - 51.99% <span className="p-m-lable mobile-v">Interest Rate</span> </MDBCol>
                                                            <MDBCol md="12"> - <span className="p-m-lable mobile-v">Min.Salary Required</span> </MDBCol>
                                                            <MDBCol md="12"> 7% - 10% <span className="p-m-lable mobile-v">Cash Advance Fee</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 <span className="p-m-lable mobile-v">Late Payment Fee</span> </MDBCol>
                                                            <MDBCol md="12"> 5% <span className="p-m-lable mobile-v">Min. Payment%</span> </MDBCol>
                                                            <MDBCol md="12"> $26,00.00 JMD <span className="p-m-lable mobile-v">Over Limit Fee*</span> </MDBCol>
                                                            <MDBCol md="12"> No <span className="p-m-lable mobile-v">Rewards Program</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBIcon icon="check" className="p-tik" /> <span className="p-m-lable mobile-v">Rate Hogs Approved</span> </MDBCol>
                                                            <MDBCol md="12"> <MDBBtn className="p-table-button">Apply Now</MDBBtn> </MDBCol>
                                                        </div>                                                        
                                                    </MDBRow>
                                                </MDBCol>
                                            </MDBCarouselItem>
                                        </MDBRow>
                                    </MDBCarouselInner>
                                </MDBCarousel>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>                
            </div>
        )
    }
}

export default CompareCreditCards;
