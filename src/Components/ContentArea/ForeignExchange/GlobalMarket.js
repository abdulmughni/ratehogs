import React, { Component } from 'react';
import { MDBNav, MDBNavItem, MDBNavLink, MDBAnimation } from "mdbreact";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { MDBProgress } from 'mdbreact';

import gmnews from '../../../statics/images/stock-market/gm-news.png';
import gmcash from '../../../statics/images/stock-market/gm-cash.png';
import jamaicastockexchange from '../../../statics/images/stock-market/jamaica-stockexchange.png';

import './ForeignExchange.css';

class GlobalMarket extends Component {

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
            <div className="fe-widget">
            <div className="stockmarket-table">
                <div className="gm-tabs">
                    <h5 className="text-center"><strong>Market News & More</strong></h5>
                    <MDBNav className="gm-pills-tabs">
                        <MDBNavItem>
                            <MDBNavLink to="#" className={activeItemPills==="1" ? "active" : "" } onClick={this.togglePills("1")}>
                            S&P
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#" className={activeItemPills==="2" ? "active" : "" } onClick={this.togglePills("2")}>
                            NASDAQ
                            </MDBNavLink>
                        </MDBNavItem>   
                        <MDBNavItem>
                            <MDBNavLink to="#" className={activeItemPills==="3" ? "active" : "" } onClick={this.togglePills("3")}>
                            DOW
                            </MDBNavLink>
                        </MDBNavItem>    
                        <MDBNavItem>
                            <MDBNavLink to="#" className={activeItemPills==="4" ? "active" : "" } onClick={this.togglePills("4")}>
                            EUR
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#" className={activeItemPills==="5" ? "active" : "" } onClick={this.togglePills("5")}>
                            ASIA
                            </MDBNavLink>
                        </MDBNavItem>   
                        <MDBNavItem>
                            <MDBNavLink to="#" className={activeItemPills==="6" ? "active" : "" } onClick={this.togglePills("6")}>
                            KENSHO
                            </MDBNavLink>
                        </MDBNavItem>                                    
                    </MDBNav>

                    { activeItemPills === '1' && 
                        <MDBAnimation type="fadeIn">
                            <div className="gm-detail-top">
                                <div className="gm-detail-tittle">
                                    <span>TOP</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>25%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.5%</span>
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>4.5%</span>
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>7.5%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.7%</span>
                                                    <MDBProgress material value={57} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                            <div className="gm-detail-bottom">
                                <div className="gm-detail-tittle">
                                    <span>BOTTOM</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>7.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>5.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>4.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={85} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>8.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>9.5%</span>
                                                    <MDBProgress material value={95} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                        </MDBAnimation>
                    }

                    { activeItemPills === '2' && 
                        <MDBAnimation type="fadeIn">
                            <div className="gm-detail-top">
                                <div className="gm-detail-tittle">
                                    <span>TOP</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>25%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.5%</span>
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>4.5%</span>
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>7.5%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.7%</span>
                                                    <MDBProgress material value={57} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                            <div className="gm-detail-bottom">
                                <div className="gm-detail-tittle">
                                    <span>BOTTOM</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>7.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>5.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>4.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={85} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>8.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>9.5%</span>
                                                    <MDBProgress material value={95} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                        </MDBAnimation>
                    }

                        { activeItemPills === '3' && 
                        <MDBAnimation type="fadeIn">
                            <div className="gm-detail-top">
                                <div className="gm-detail-tittle">
                                    <span>TOP</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>25%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.5%</span>
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>4.5%</span>
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>7.5%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.7%</span>
                                                    <MDBProgress material value={57} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                            <div className="gm-detail-bottom">
                                <div className="gm-detail-tittle">
                                    <span>BOTTOM</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>7.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>5.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>4.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={85} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>8.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>9.5%</span>
                                                    <MDBProgress material value={95} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                        </MDBAnimation>
                    }

                    { activeItemPills === '4' && 
                        <MDBAnimation type="fadeIn">
                            <div className="gm-detail-top">
                                <div className="gm-detail-tittle">
                                    <span>TOP</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>25%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.5%</span>
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>4.5%</span>
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>7.5%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.7%</span>
                                                    <MDBProgress material value={57} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                            <div className="gm-detail-bottom">
                                <div className="gm-detail-tittle">
                                    <span>BOTTOM</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>7.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>5.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>4.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={85} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>8.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>9.5%</span>
                                                    <MDBProgress material value={95} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                        </MDBAnimation>
                    }

                    { activeItemPills === '5' && 
                        <MDBAnimation type="fadeIn">
                            <div className="gm-detail-top">
                                <div className="gm-detail-tittle">
                                    <span>TOP</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>25%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.5%</span>
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>4.5%</span>
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>7.5%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.7%</span>
                                                    <MDBProgress material value={57} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                            <div className="gm-detail-bottom">
                                <div className="gm-detail-tittle">
                                    <span>BOTTOM</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>7.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>5.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>4.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={85} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>8.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>9.5%</span>
                                                    <MDBProgress material value={95} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                        </MDBAnimation>
                    }

                        { activeItemPills === '6' && 
                        <MDBAnimation type="fadeIn">
                            <div className="gm-detail-top">
                                <div className="gm-detail-tittle">
                                    <span>TOP</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>25%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.5%</span>
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>4.5%</span>
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>7.5%</span>
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>5.7%</span>
                                                    <MDBProgress material value={57} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                            <div className="gm-detail-bottom">
                                <div className="gm-detail-tittle">
                                    <span>BOTTOM</span>
                                </div>    
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={75} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>7.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={55} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>5.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={45} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>4.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    
                                                    <MDBProgress material value={85} height="20px">
                                                        
                                                    </MDBProgress>
                                                    <span>8.5%</span>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                                <div className="gm-detail">
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <a href="#!">AAL</a>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <p>Amercian Air...</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                                <div className="gm-progress">
                                                    <span>9.5%</span>
                                                    <MDBProgress material value={95} height="20px">
                                                        
                                                    </MDBProgress>
                                                </div>
                                        </MDBCol>
                                    </MDBRow>  
                                </div>
                            </div>
                        </MDBAnimation>
                    }


                </div> 
                <div className="gm-news-sec">
                    <MDBRow>
                        <MDBCol md="6">
                            <img src={gmnews} alt="Gm News" />
                        </MDBCol>
                        <MDBCol md="6">
                            <div className="gm-news">
                                <p>Black Friday Shopping pulled in a record $6.22 billion in online sales: Adobe </p>
                                <a href="#!"> JORDAN COOPER </a>
                                <i className="fa fa-angle-right float-right"></i>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <div className="gm-news-list">
                        <ul>
                            <li><a href="#!">Salad Food Jamaica Limited(SALF) - Declares Dividend </a> <i className="fa fa-angle-right float-right"></i></li>
                            <li><a href="#!">JSE Bond Indices as at November 23, 2018 </a>  <i className="fa fa-angle-right float-right"></i></li>
                            <li><a href="#!">JMMB Group Limited (JMMB) Trading in shares </a>  <i className="fa fa-angle-right float-right"></i></li>
                        </ul>
                    </div> 
                </div> 
                <div className="gm-cash">
                    <img src={gmcash} alt="Gm Cash" />
                </div>  
                <div className="gm-brands">
                    <img src={jamaicastockexchange} alt="Jamaica Stock Exchange" />
                </div>     
            </div>
            </div>
        )
    }
}

export default GlobalMarket;
