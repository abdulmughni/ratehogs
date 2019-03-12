import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol,  MDBNav, MDBNavItem, MDBNavLink, MDBAnimation } from "mdbreact";

import Recommended from './ProductSlides/Recommended';
import LowestInterest from './ProductSlides/LowestInterest';
import LowestFees from './ProductSlides/LowestFees';

class MortgagesProducts extends Component { 
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
                <div className="section grey-section">
                    <MDBContainer>
                        <div className="rh-heading-style pt-0 text-center">
                            <h3>Compare Mortgage Products</h3>
                            <p className="heading-caption">Per conubia nostra, per inceptos himenaeos curabitur eget accumsan leo mauris condimentum risus finibus risus pretium, efficitur molestie eros tincidunt.</p>
                        </div>
                        <MDBRow>
                            <MDBCol md="2" className="desktop-v">
                                <MDBRow className="col-middle rh-pricing-labels mortgage-table-label">
                                    <MDBCol md="12" className="p-table-product"> <span>Product</span> </MDBCol>
                                    <MDBCol md="12"> <span>Type</span> </MDBCol>
                                    <MDBCol md="12"> <span>Loan amount</span> </MDBCol>
                                    <MDBCol md="12"> <span>APR</span> </MDBCol>
                                    <MDBCol md="12"> <span>Tenure</span> </MDBCol>
                                    <MDBCol md="12"> <span>Interest Rate</span> </MDBCol>
                                    <MDBCol md="12" className="p-height-2"> <span>Pros</span> </MDBCol>
                                    <MDBCol md="12" className="p-height-2"> <span>Cons</span> </MDBCol>
                                    <MDBCol md="12"> <span>Rate Hogs Approved</span> </MDBCol>
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
                                        Lowest Interest
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#" className={activeItemPills==="3" ? "active" : "" } onClick={this.togglePills("3")}>
                                        Lowest Fees
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
                                        <LowestInterest />
                                    </MDBAnimation>
                                }

                                { activeItemPills === '3' && 
                                    <MDBAnimation type="fadeIn">
                                        <LowestFees />
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

export default MortgagesProducts;
