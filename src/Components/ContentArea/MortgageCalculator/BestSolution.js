import React, { Component } from "react";
import { MDBRow, MDBCol, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { Doughnut } from "react-chartjs-2";

import DesignYourMortage from '../../../statics/images/mortage-calculator/design-your-mortage.jpg';

class BestSolution extends Component {
    state = {
        dataDoughnut: {
          datasets: [
            {
              data: [300, 50, 100, 40, 120],
              backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
              hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#FFC870",
                "#A8B3C5",
                "#616774"
              ]
            }
          ]
        }
    }

    render() {
        return(
            <div>
                <div className="rh-heading-style">
                    <h4>Best Solution</h4>
                </div>
                <MDBRow className="pb-4">
                    <MDBCol md="5">
                        <img src={DesignYourMortage} alt="image" className="img-fluid" />
                    </MDBCol>
                    <MDBCol md="7">
                        JN Bank 'DYM' Mortgage is a beneficial option targeted to assist you with managing your payments.
                        <MDBNav>
                            <MDBNavItem>
                                <MDBNavLink to="#">See More Details</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="#">See Next Offer</MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="col-middle mt-4">
                    <MDBCol md="6">
                        <div className="circle-chart text-center">
                            <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} height="250" />
                            <MDBNavLink to="#">See loan breakdown</MDBNavLink>
                        </div>                        
                    </MDBCol>
                    <MDBCol md="6">
                        <div className="calc-total-payment">
                            <p className="pay-head"><strong>Total monthly payment (JMD)</strong></p>
                            <p className="payment green-pay">$ 124,220.23</p>
                        </div>

                        <div className="calc-total-payment">
                            <p className="pay-head">Total monthly payment (JMD)</p>
                            <p className="payment">$ 124,220.23</p>
                        </div>

                        <div className="calc-total-payment">
                            <p className="pay-head">Total monthly payment (JMD)</p>
                            <p className="payment">$ 124,220.23</p>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="col-middle mt-4">
                    <MDBCol md="12">
                        <div className="calc-monthly-payment">
                            <h3>Monthly Payment</h3>
                            <div className="row-two-col">
                                <span>Principal &amp; Interest</span>
                                <span className="text-right">$ 12,003.02</span>
                            </div>

                            <div className="row-two-col">
                                <span>Property Taxes</span>
                                <span className="text-right">$ 12,003.02</span>
                            </div>

                            <div className="row-two-col">
                                <span>Homeowner's Insurance</span>
                                <span className="text-right">$ 12,003.02</span>
                            </div>

                            <div className="row-two-col">
                                <span>PMI</span>
                                <span className="text-right">$ 12,003.02</span>
                            </div>
                        </div>
                    </MDBCol>                    
                </MDBRow>

                <MDBRow className="col-middle mt-4">
                    <MDBCol md="12">
                        <div className="border-box">
                            <h3>More Details</h3>
                            <p>Nullam laoreet, neque eu blandit rutrum, ipsum dolor laoreet odio, vel sagittis erat velit vitae velit. Sed bibendum nibh massa, porta porttitor tellus sollicitudin at. Curabitur id varius nulla. Sed quis ornare felis. Praesent luctus massa est, vel faucibus leo lobortis in.</p>
                        </div>
                    </MDBCol>                    
                </MDBRow>
            </div>
        )
    }
}

export default BestSolution;
