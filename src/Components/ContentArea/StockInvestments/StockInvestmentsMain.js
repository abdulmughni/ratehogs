import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import Banner from '../../../statics/images/stock-investments/stock-invetments-banner.jpg';

class StockInvestmentsMain extends Component {
    render() {
        return(
            <div className="section page-main-section">
                <MDBContainer>
                    <MDBRow className="col-middle">
                        <MDBCol md="6">
                            <div className="rh-heading-style">
                                <h3>Stock Investments</h3>
                                <p className="banner-caption">Nam felis urna, cursus eget interdum ac, efficitur et quam. Suspendisse ut diam vel erat aliquet pellentesque a at tellus. Praesent eget faucibus mauris, sed dictum nibh. Donec cursus cursus erat, eu scelerisque justo laoreet non. Nunc tempor faucibus libero eget venenatis. Donec ac dolor porttitor, cursus nunc eu, porta urna.</p>
                                <MDBBtn>Learn More</MDBBtn>
                                <MDBBtn>Compare Stock Brokers</MDBBtn>
                            </div>
                        </MDBCol>
                        <MDBCol md="6"><img src={Banner} alt="Investments" className="img-fluid" /></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>    
        )
    }
}

export default StockInvestmentsMain;
