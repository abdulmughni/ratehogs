import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

import ScotiaBank from '../../../statics/images/product-detail/scotia-bank.jpg';
import ScotiaBankCard from '../../../statics/images/product-detail/scotia-bank-card.jpg';

class ProductDetailMain extends Component {
    render() {
        return(
            <div className="section rh-product-detail">
                <MDBContainer>
                    <MDBRow className="col-middle">
                        <MDBCol md="6">
                            <MDBRow className="col-middle">
                                <MDBCol md="12">
                                    <img src={ScotiaBank} alt="Scotiabank" className="img-fluid card-logo mb-4" />
                                </MDBCol>

                                <MDBCol md="6">
                                    <img src={ScotiaBankCard} alt="Scotiabank Card" className="img-fluid card-look" />
                                </MDBCol>

                                <MDBCol md="6">
                                    <div className="card-with-detail">
                                        <h3 className="span-block">
                                            <span>ScotiaBank</span>
                                            <span>Gold Visa</span>
                                        </h3>

                                        <p>Earn 15,000 bonus points with your first $1000 in everyday purchase in the first 3 months 1</p>
                                    </div>
                                </MDBCol>
                            </MDBRow>                            
                        </MDBCol>

                        <MDBCol md="6">
                            <div className="product-rewards-box">
                                <div className="reward-desc span-block">
                                    <span>Earn 4 <i>Scotia</i></span>
                                    <span><i>Rewards</i> points on every $1 you spend at eligible gas stations, grocery stores, on dining and entertainments.</span>
                                </div>

                                <div className="reward-l-b">4X</div>

                                <div className="award-icon"><MDBIcon icon="award" /></div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>    
        )
    }
}

export default ProductDetailMain;
