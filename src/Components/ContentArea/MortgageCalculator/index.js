import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import MortgageCalculatorMain from './MortgageCalculatorMain';
import MortgageInformation from './MortgageInformation';
import BestSolution from './BestSolution';

class MortgageCalculator extends Component {
    render() {
        return(
            <div>
                <MortgageCalculatorMain />
                <div className="section">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                                <MortgageInformation />
                            </MDBCol>

                            <MDBCol md="6">
                                <BestSolution />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

export default MortgageCalculator;
