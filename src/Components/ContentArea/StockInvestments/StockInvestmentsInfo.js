import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import UnderstandingMarket from '../../../statics/images/stock-investments/understanding-market.jpg';
import TradingStretegies from '../../../statics/images/stock-investments/trading-stretegies.jpg';
import Booker from '../../../statics/images/stock-investments/booker.jpg';

class StockInvestmentsInfo extends Component {
    render() {
        return(
            <div className="section page-main-section stock-invest-info">
                <MDBContainer>
                    <MDBRow className="col-middle">
                        <MDBCol md="6">
                            <div className="rh-heading-style">
                                <h3>Understanding the market</h3>
                                <p className="banner-caption">Nam felis urna, cursus eget interdum ac, efficitur et quam. Suspendisse ut diam vel erat aliquet pellentesque a at tellus. Praesent eget faucibus mauris, sed dictum nibh. Donec cursus cursus erat, eu scelerisque justo laoreet non. Nunc tempor faucibus libero eget venenatis. Donec ac dolor porttitor, cursus nunc eu, porta urna.</p>
                            </div>
                        </MDBCol>
                        <MDBCol md="6"><img src={UnderstandingMarket} alt="Stock Investments" className="img-fluid" /></MDBCol>
                    </MDBRow>

                    <MDBRow className="col-middle">
                        <MDBCol md="6"><img src={TradingStretegies} alt="Stock Investments" className="img-fluid float-left" /></MDBCol>
                        <MDBCol md="6">
                            <div className="rh-heading-style">
                                <h3>Trading strategies</h3>
                                <p className="banner-caption">Nam felis urna, cursus eget interdum ac, efficitur et quam. Suspendisse ut diam vel erat aliquet pellentesque a at tellus. Praesent eget faucibus mauris, sed dictum nibh. Donec cursus cursus erat, eu scelerisque justo laoreet non. Nunc tempor faucibus libero eget venenatis. Donec ac dolor porttitor, cursus nunc eu, porta urna.</p>
                            </div>
                        </MDBCol>                        
                    </MDBRow>

                    <MDBRow className="col-middle">
                        <MDBCol md="6">
                            <div className="rh-heading-style">
                                <h3>Investment Brokers</h3>
                                <p className="banner-caption">Nam felis urna, cursus eget interdum ac, efficitur et quam. Suspendisse ut diam vel erat aliquet pellentesque a at tellus. Praesent eget faucibus mauris, sed dictum nibh. Donec cursus cursus erat, eu scelerisque justo laoreet non. Nunc tempor faucibus libero eget venenatis. Donec ac dolor porttitor, cursus nunc eu, porta urna.</p>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" className="text-center"><img src={Booker} alt="Stock Investments" className="img-fluid w-auto float-none" /></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>    
        )
    }
}

export default StockInvestmentsInfo;
