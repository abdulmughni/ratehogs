import React, { Component } from "react";
import { MDBRow, MDBCol, MDBNav, MDBNavItem, MDBNavLink, MDBIcon, MDBTooltip, MDBCollapse } from "mdbreact";
import { Bar } from "react-chartjs-2";

import DesignYourMortage from '../../../statics/images/mortage-calculator/design-your-mortage.jpg';

const years = ['2018', '2019', '2020', '2021'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

class BestSolution extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    state = {
        dataBar: {
          labels: ["2018", "", "2020", "", "2022", "", "2024", "", "2026", "", "2028", "", "2030", "", "2032", "", "2034", "", "2036", "", "2038", "", "2040", "", "2042", "", "2044", "", "2046", "", "2048"],
          datasets: [
            {
              label: "#1",
              data: [12, 39, 3, 50, 2, 32, 84, 12, 39, 3, 50, 2, 32, 84, 12, 39, 3, 50, 2, 32, 84, 32, 84, 12, 39, 3, 50, 2, 32, 84, 2, 32, 84],
              backgroundColor: "#c2e8de",
              borderWidth: 0
            },
            {
              label: "#2",
              data: [56, 24, 5, 16, 45, 24, 8, 56, 24, 5, 16, 45, 24, 8, 56, 24, 5, 16, 45, 24, 8, 56, 24, 5, 16, 45, 24, 8, 16, 45, 2, 32, 84],
              backgroundColor: "#99dff9",
              borderWidth: 0
            }
          ]
        },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
                {
                  barPercentage: 1,
                  gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                  }
                }
              ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      }

    render() {
        const { dataBar, barChartOptions, collapseID } = this.state;
        return(
            <div>
                <div className="rh-heading-style">
                    <h4>Best Solution</h4>
                </div>
                <MDBRow className="col-middle pb-4">
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
                
                <div className="circle-chart text-center mt-4 mb-4">
                    <Bar data={dataBar} options={barChartOptions} height={300} />
                </div>

                {
                    years.map(year => {
                        return(
                            <div>
                                <MDBRow className="col-middle row-payment-info" onClick={this.toggleCollapse(year)}>                    
                                    <MDBCol>
                                        <div className="pay-year text-left"><MDBIcon icon='angle-right' /> <span>{year}</span></div>
                                    </MDBCol>

                                    <MDBCol>
                                        <div className="pay-info-box"><small>Principal:</small> <span>$377.17</span></div>
                                    </MDBCol>

                                    <MDBCol>
                                        <div className="pay-info-box"><small>Interest:</small> <span>$1,020.83</span></div>
                                    </MDBCol>

                                    <MDBCol>
                                        <div className="pay-info-box"><small>Taxes &amp; Fees: 
                                        <MDBTooltip
                                        placement="top"
                                        componentClass="pay-tooltip"
                                        tooltipContent="Tootip Content Here">
                                        <MDBIcon icon='question-circle' />
                                        </MDBTooltip></small> <span>$516.67</span></div>
                                    </MDBCol>

                                    <MDBCol>
                                        <div className="pay-info-box"><small>Total Payment:</small> <span>$1,912.45</span></div>
                                    </MDBCol>

                                    <MDBCol>
                                        <div className="pay-info-box"><small>Loan Balance:</small> <span>$254,334,54</span></div>
                                    </MDBCol>
                                </MDBRow>

                                <MDBCollapse id={year} isOpen={collapseID} className="collapse-months">
                                    {
                                        months.map(month => {
                                            return (
                                                <MDBRow className="col-middle row-payment-info">                    
                                                    <MDBCol>
                                                        <div className="pay-year text-center"><span>{month}</span></div>
                                                    </MDBCol>

                                                    <MDBCol>
                                                        <div className="pay-info-box"><small>Principal:</small> <span>$377.17</span></div>
                                                    </MDBCol>

                                                    <MDBCol>
                                                        <div className="pay-info-box"><small>Interest:</small> <span>$1,020.83</span></div>
                                                    </MDBCol>

                                                    <MDBCol>
                                                        <div className="pay-info-box"><small>Taxes &amp; Fees: 
                                                        <MDBTooltip
                                                        placement="top"
                                                        componentClass="pay-tooltip"
                                                        tooltipContent="Tootip Content Here">
                                                        <MDBIcon icon='question-circle' />
                                                        </MDBTooltip></small> <span>$516.67</span></div>
                                                    </MDBCol>

                                                    <MDBCol>
                                                        <div className="pay-info-box"><small>Total Payment:</small> <span>$1,912.45</span></div>
                                                    </MDBCol>

                                                    <MDBCol>
                                                        <div className="pay-info-box"><small>Loan Balance:</small> <span>$254,334,54</span></div>
                                                    </MDBCol>
                                                </MDBRow>
                                            )                            
                                        })
                                    }                    
                                </MDBCollapse>
                            </div>    
                        )
                    })
                }                    
            </div>
        )
    }
}

export default BestSolution;
