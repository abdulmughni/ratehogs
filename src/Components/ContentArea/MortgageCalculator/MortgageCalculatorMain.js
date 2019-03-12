import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import Banner from '../../../statics/images/mortage-calculator/mortgage-calc-banner.jpg';

class MortgageCalculatorMain extends Component {
    render() {
        return(
            <div className="section page-main-section">
                <MDBContainer>
                    <MDBRow className="col-middle">
                        <MDBCol md="6">
                            <div className="rh-heading-style">
                                <h3>Mortgage Calculator</h3>
                                <p className="banner-caption">Nam felis urna, cursus eget interdum ac, efficitur et quam. Suspendisse ut diam vel erat aliquet pellentesque a at tellus. Praesent eget faucibus mauris, sed dictum nibh. Donec cursus cursus erat, eu scelerisque justo laoreet non. Nunc tempor faucibus libero eget venenatis. Donec ac dolor porttitor, cursus nunc eu, porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eget accumsan leo. Mauris condimentum risus finibus risus pretium, efficitur molestie eros tincidunt.</p>
                                <p className="banner-caption">Nam felis urna, cursus eget interdum ac, efficitur et quam. Suspendisse ut diam vel erat aliquet pellentesque a at tellus. Praesent eget faucibus mauris, sed dictum nibh. Donec cursus cursus erat, eu scelerisque justo laoreet non. Nunc tempor faucibus libero eget venenatis. Donec ac dolor porttitor, cursus nunc eu, porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eget accumsan leo.</p>
                                <MDBBtn>Calculate Mortgage</MDBBtn>
                            </div>
                        </MDBCol>
                        <MDBCol md="6"><img src={Banner} alt="Calculate Mortgage" className="img-fluid" /></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>    
        )
    }
}

export default MortgageCalculatorMain;
