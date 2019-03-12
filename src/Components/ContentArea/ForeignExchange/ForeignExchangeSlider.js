import React, { Component } from 'react';

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBNav, MDBNavItem, MDBNavLink, MDBAnimation } from "mdbreact";

import './ForeignExchange.css';

class ForeignExchangeSlider extends Component {

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
            <div className="foreignexchange-table">
                <div className="foreign-exchange-slider">
                    <MDBContainer fluid>
                        <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="rh-carousel-slider fe-carousel-slider">
                            <MDBCarouselInner>
                                <MDBRow>
                                    <MDBCarouselItem itemId="1">
                                        <MDBCol md="7" className="clearfix">
                                                <div className="fe-slide-box fe-slide-box-green">
                                                    <div className="fe-slide-box-top">
                                                        <p>NIKKEI</p>
                                                        <p>21694.05</p>
                                                    </div>
                                                    <div className="fe-slide-box-bot">
                                                        <p>+47.50</p>
                                                        <p>+0.5%</p>
                                                    </div>
                                                </div>    
                                           
                                                <div className="fe-slide-box">
                                                    <div className="fe-slide-box-top">
                                                        <p>NIKKEI</p>
                                                        <p>21694.05</p>
                                                    </div>
                                                    <div className="fe-slide-box-bot">
                                                        <p>+47.50</p>
                                                        <p>+0.5%</p>
                                                    </div>
                                                </div>    
                                            
                                                <div className="fe-slide-box">
                                                    <div className="fe-slide-box-top">
                                                        <p>NIKKEI</p>
                                                        <p>21694.05</p>
                                                    </div>
                                                    <div className="fe-slide-box-bot">
                                                        <p>+47.50</p>
                                                        <p>+0.5%</p>
                                                    </div>
                                                </div>    
                                            
                                                <div className="fe-slide-box fe-slide-box-red">
                                                    <div className="fe-slide-box-top">
                                                        <p>NIKKEI</p>
                                                        <p>21694.05</p>
                                                    </div>
                                                    <div className="fe-slide-box-bot">
                                                        <p>+47.50</p>
                                                        <p>+0.5%</p>
                                                    </div>
                                                </div>    
                                            
                                                <div className="fe-slide-box fe-slide-box-green">
                                                    <div className="fe-slide-box-top">
                                                        <p>NIKKEI</p>
                                                        <p>21694.05</p>
                                                    </div>
                                                    <div className="fe-slide-box-bot">
                                                        <p>+47.50</p>
                                                        <p>+0.5%</p>
                                                    </div>
                                                </div>    
                                        </MDBCol>

                                        <MDBCol md="5" className="clearfix d-md-block">
                                            <div className="gm-tabs fe-slider-tabs">
                                                <MDBNav className="gm-pills-tabs">
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="1" ? "active" : "" } onClick={this.togglePills("1")}>
                                                        ASIA
                                                        </MDBNavLink>
                                                    </MDBNavItem>
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="2" ? "active" : "" } onClick={this.togglePills("2")}>
                                                        US
                                                        </MDBNavLink>
                                                    </MDBNavItem>   
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="3" ? "active" : "" } onClick={this.togglePills("3")}>
                                                        EU
                                                        </MDBNavLink>
                                                    </MDBNavItem>    
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="4" ? "active" : "" } onClick={this.togglePills("4")}>
                                                        OIL
                                                        </MDBNavLink>
                                                    </MDBNavItem>
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="5" ? "active" : "" } onClick={this.togglePills("5")}>
                                                        GOLD
                                                        </MDBNavLink>
                                                    </MDBNavItem>   
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="6" ? "active" : "" } onClick={this.togglePills("6")}>
                                                        BONDS
                                                        </MDBNavLink>
                                                    </MDBNavItem>    
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="7" ? "active" : "" } onClick={this.togglePills("7")}>
                                                        FX
                                                        </MDBNavLink>
                                                    </MDBNavItem>   
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="8" ? "active" : "" } onClick={this.togglePills("8")}>
                                                        PRE-MKT
                                                        </MDBNavLink>
                                                    </MDBNavItem>                                   
                                                </MDBNav>

                                                { activeItemPills === '1' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                { activeItemPills === '2' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                    { activeItemPills === '3' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                { activeItemPills === '4' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                { activeItemPills === '5' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                    { activeItemPills === '6' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                    { activeItemPills === '7' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                    { activeItemPills === '8' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }


                                            </div> 
                                        </MDBCol>
                                    </MDBCarouselItem>

                                    <MDBCarouselItem itemId="2">
                                        <MDBCol md="7" className="clearfix">
                                                <div className="fe-slide-box fe-slide-box-green">
                                                    <div className="fe-slide-box-top">
                                                        <p>NIKKEI</p>
                                                        <p>21694.05</p>
                                                    </div>
                                                    <div className="fe-slide-box-bot">
                                                        <p>+47.50</p>
                                                        <p>+0.5%</p>
                                                    </div>
                                                </div>    
                                           
                                                <div className="fe-slide-box">
                                                    <div className="fe-slide-box-top">
                                                        <p>NIKKEI</p>
                                                        <p>21694.05</p>
                                                    </div>
                                                    <div className="fe-slide-box-bot">
                                                        <p>+47.50</p>
                                                        <p>+0.5%</p>
                                                    </div>
                                                </div>    
                                            
                                                <div className="fe-slide-box">
                                                    <div className="fe-slide-box-top">
                                                        <p>NIKKEI</p>
                                                        <p>21694.05</p>
                                                    </div>
                                                    <div className="fe-slide-box-bot">
                                                        <p>+47.50</p>
                                                        <p>+0.5%</p>
                                                    </div>
                                                </div>    
                                            
                                                <div className="fe-slide-box fe-slide-box-red">
                                                    <div className="fe-slide-box-top">
                                                        <p>NIKKEI</p>
                                                        <p>21694.05</p>
                                                    </div>
                                                    <div className="fe-slide-box-bot">
                                                        <p>+47.50</p>
                                                        <p>+0.5%</p>
                                                    </div>
                                                </div>    
                                            
                                                <div className="fe-slide-box fe-slide-box-green">
                                                    <div className="fe-slide-box-top">
                                                        <p>NIKKEI</p>
                                                        <p>21694.05</p>
                                                    </div>
                                                    <div className="fe-slide-box-bot">
                                                        <p>+47.50</p>
                                                        <p>+0.5%</p>
                                                    </div>
                                                </div>    
                                        </MDBCol>

                                        <MDBCol md="5" className="clearfix d-md-block">
                                            <div className="gm-tabs fe-slider-tabs">
                                                <MDBNav className="gm-pills-tabs">
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="1" ? "active" : "" } onClick={this.togglePills("1")}>
                                                        ASIA
                                                        </MDBNavLink>
                                                    </MDBNavItem>
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="2" ? "active" : "" } onClick={this.togglePills("2")}>
                                                        US
                                                        </MDBNavLink>
                                                    </MDBNavItem>   
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="3" ? "active" : "" } onClick={this.togglePills("3")}>
                                                        EU
                                                        </MDBNavLink>
                                                    </MDBNavItem>    
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="4" ? "active" : "" } onClick={this.togglePills("4")}>
                                                        OIL
                                                        </MDBNavLink>
                                                    </MDBNavItem>
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="5" ? "active" : "" } onClick={this.togglePills("5")}>
                                                        GOLD
                                                        </MDBNavLink>
                                                    </MDBNavItem>   
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="6" ? "active" : "" } onClick={this.togglePills("6")}>
                                                        BONDS
                                                        </MDBNavLink>
                                                    </MDBNavItem>    
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="7" ? "active" : "" } onClick={this.togglePills("7")}>
                                                        FX
                                                        </MDBNavLink>
                                                    </MDBNavItem>   
                                                    <MDBNavItem>
                                                        <MDBNavLink to="#" className={activeItemPills==="8" ? "active" : "" } onClick={this.togglePills("8")}>
                                                        PRE-MKT
                                                        </MDBNavLink>
                                                    </MDBNavItem>                                   
                                                </MDBNav>

                                                { activeItemPills === '1' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                { activeItemPills === '2' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                    { activeItemPills === '3' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                { activeItemPills === '4' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                { activeItemPills === '5' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                    { activeItemPills === '6' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                    { activeItemPills === '7' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }

                                                    { activeItemPills === '8' && 
                                                    <MDBAnimation type="fadeIn">
                                                        <div className="fe-tab-info">
                                                            <p><a href="#!">Asia markets mixed; oil prices attempt to stage a recovery</a></p>
                                                        </div>
                                                    </MDBAnimation>
                                                }


                                            </div> 
                                        </MDBCol>
                                    </MDBCarouselItem>
                                </MDBRow>
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </MDBContainer>
                </div>
            </div>
            
        )
    }
}

export default ForeignExchangeSlider;
