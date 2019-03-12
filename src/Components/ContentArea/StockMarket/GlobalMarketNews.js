import React, { Component } from 'react';
import { MDBNav, MDBNavItem, MDBNavLink, MDBAnimation } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import fastloan from '../../../statics/images/stock-market/fast-loan.png';

import './StockMarket.css';

class GlobalMarketNews extends Component {

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
            <div className="stockmarket-table">
                <div className="sm-tabs">
                    <MDBNav className="sm-pills-tabs">
                        <MDBNavItem>
                            <MDBNavLink to="#" className={activeItemPills==="1" ? "active" : "" } onClick={this.togglePills("1")}>
                            Main Market
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#" className={activeItemPills==="2" ? "active" : "" } onClick={this.togglePills("2")}>
                            Junior Market
                            </MDBNavLink>
                        </MDBNavItem>           
                        
                            <div className="sm-update-date">
                                    <p>November 22, 2019 2:21 PM</p>
                                    <p>(Rates are subject to change)</p>
                            </div>
                    </MDBNav>

                    { activeItemPills === '1' && 
                        <MDBAnimation type="fadeIn">
                            <div className="mainmarket-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Industry or Company</th>
                                            <th>
                                                <div>
                                                    <span colSpan="2">52 Week</span>    
                                                </div>
                                                <div>
                                                    <span className="float-left">HIGH</span>  
                                                    <span className="float-right">LOW</span>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>Close Price</p>    

                                                    <p>11-jan-19</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>Close Price</p>    

                                                    <p>4-jan-19</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>WoW $</p>    

                                                    <p>Change</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>WoW %</p>    

                                                    <p>Change</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>YTD $</p>    

                                                    <p>Change</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>Trailing</p>    

                                                    <p>His. EPS</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>Price</p>    
                                                    <p>Earnings</p>  
                                                    <p>Ratio (P/E)*</p>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr bgcolor="#f1f1f1" className="mainmarket-title">
                                            <td colSpan="9"><strong>Finance</strong></td>
                                        </tr>    
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Average</strong></td>
                                            <td>
                                                <div className="span-border">
                                                    <span>  </span>  
                                                    <span> </span>  
                                                </div>   
                                            </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td><strong>62.66</strong></td>
                                        </tr>
                                        <tr bgcolor="#f1f1f1" className="mainmarket-title">
                                            <td colSpan="9"><strong>Manufacturing</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </MDBAnimation>
                    }

                    { activeItemPills === '2' && 
                        <MDBAnimation type="fadeIn">
                            <div className="mainmarket-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Industry or Company</th>
                                            <th>
                                                <div>
                                                    <span colSpan="2">52 Week</span>    
                                                </div>
                                                <div>
                                                    <span className="float-left">HIGH</span>  
                                                    <span className="float-right">LOW</span>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>Close Price</p>    

                                                    <p>11-jan-19</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>Close Price</p>    

                                                    <p>4-jan-19</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>WoW $</p>    

                                                    <p>Change</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>WoW %</p>    

                                                    <p>Change</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>YTD $</p>    

                                                    <p>Change</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>Trailing</p>    

                                                    <p>His. EPS</p>  
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    <p>Price</p>    
                                                    <p>Earnings</p>  
                                                    <p>Ratio (P/E)*</p>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr bgcolor="#f1f1f1" className="mainmarket-title">
                                            <td colSpan="9"><strong>Finance</strong></td>
                                        </tr>    
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Average</strong></td>
                                            <td>
                                                <div className="span-border">
                                                    <span>  </span>  
                                                    <span> </span>  
                                                </div>   
                                            </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td><strong>62.66</strong></td>
                                        </tr>
                                        <tr bgcolor="#f1f1f1" className="mainmarket-title">
                                            <td colSpan="9"><strong>Manufacturing</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                        <tr>
                                            <td>Barita Invesments Ltd</td>
                                            <td>
                                                <div className="span-border">
                                                    <span>56.06</span>  
                                                    <span>7.00</span>  
                                                </div>   
                                            </td>
                                            <td>51.27</td>
                                            <td>53.05</td>
                                            <td>-1.78</td>
                                            <td>-3.36%</td>
                                            <td>-3.57%</td>
                                            <td>0.82</td>
                                            <td>62.66</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </MDBAnimation>
                    }

                </div> 
                <div className="sm-add">
                    <img src={fastloan} alt="Sm Coins" />
                </div> 
            </div>
            
        )
    }
}

export default GlobalMarketNews;
