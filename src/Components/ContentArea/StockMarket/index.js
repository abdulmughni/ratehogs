import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

import MarketIndexSummary from './MarketIndexSummary';
import GlobalMarketNews from './GlobalMarketNews';
import GlobalMarket from './GlobalMarket';
import StockMarketPost from './StockMarketPost';

import './StockMarket.css';

class StockMarket extends Component {
    render() {
        return(
            <div className="stockmarket-page">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3">
                        <div className="sm-widget">
                            <MarketIndexSummary />
                            <GlobalMarket />
                        </div>
                    </MDBCol> 
                    <MDBCol md="7">
                            <GlobalMarketNews />
                    </MDBCol> 
                    <MDBCol md="2">
                        <div className="sm-widget">
                            <StockMarketPost />
                        </div>
                    </MDBCol> 
                </MDBRow>    
            </MDBContainer>                    
            </div>
        )
    }
}

export default StockMarket;
