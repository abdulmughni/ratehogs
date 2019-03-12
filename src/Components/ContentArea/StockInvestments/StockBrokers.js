import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol,  MDBNav, MDBNavItem, MDBNavLink, MDBAnimation } from "mdbreact";

import Recommended from './StockBrokerSlides/Recommended';
import LowestInterest from './StockBrokerSlides/LowestInterest';
import LowestFees from './StockBrokerSlides/LowestFees';

class StockBrokers extends Component { 
    constructor() {
        super();
        
        this.state = {
            activeItemPills: '1'
        };
    }
     
    togglePills = tab => () => {
        const { activePills } = this.state;

        if (activePills !== tab) {
        this.setState({ activeItemPills: tab });
        }
    }

    render() {
        const { activeItemPills } = this.state;

        return(
            <div>
                <div className="section">
                    <MDBContainer>
                        <div className="rh-heading-style pt-0 text-center">
                            <h3>Compare Stock Brokers</h3>
                            <p className="heading-caption">Per conubia nostra, per inceptos himenaeos curabitur eget accumsan leo mauris condimentum risus finibus risus pretium, efficitur molestie eros tincidunt.</p>
                        </div>
                        <MDBRow>
                            <MDBCol md="2" className="desktop-v">
                                <MDBRow className="col-middle rh-pricing-labels mortgage-table-label">
                                    <MDBCol md="12" className="p-table-product"> <span>Product</span> </MDBCol>
                                    <MDBCol md="12"> <span>Account Minimum</span> </MDBCol>
                                    <MDBCol md="12"> <span>Commission Fee</span> </MDBCol>
                                    <MDBCol md="12"> <span>Best For</span> </MDBCol>
                                    <MDBCol md="12" className="p-height-4"> <span>Tradeable Securities</span> </MDBCol>
                                    <MDBCol md="12" className="p-height-2"> <span>Promotions</span> </MDBCol>
                                    <MDBCol md="12" className="p-height-2"> <span>Benefits</span> </MDBCol>
                                    <MDBCol md="12" className="p-height-2"> <span>Drawbacks</span> </MDBCol>
                                    <MDBCol md="12"> <span>RateHogs Approved</span> </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md="10">
                                <MDBNav className="hs-pills-tabs">
                                    <MDBNavItem>
                                        <MDBNavLink to="#" className={activeItemPills==="1" ? "active" : "" } onClick={this.togglePills("1")}>
                                        Recommended for you
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#" className={activeItemPills==="2" ? "active" : "" } onClick={this.togglePills("2")}>
                                        Lowest Fees
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#" className={activeItemPills==="3" ? "active" : "" } onClick={this.togglePills("3")}>
                                        Lowest Interest
                                        </MDBNavLink>
                                    </MDBNavItem>                                                                        
                                </MDBNav>

                                { activeItemPills === '1' && 
                                    <MDBAnimation type="fadeIn">
                                        <Recommended />
                                    </MDBAnimation>
                                }

                                { activeItemPills === '2' && 
                                    <MDBAnimation type="fadeIn">
                                        <LowestFees />
                                    </MDBAnimation>
                                }

                                { activeItemPills === '3' && 
                                    <MDBAnimation type="fadeIn">
                                        <LowestInterest />
                                    </MDBAnimation>
                                }
                                
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>                
            </div>
        )
    }
}

export default StockBrokers;
