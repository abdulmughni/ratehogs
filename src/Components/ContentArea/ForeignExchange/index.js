import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

import ForeignExchangeRates from './ForeignExchangeRates';
import StockMarketAdds from './StockMarketAdds';
import CurrencyConverter from './Calculator/CurrencyConverter/index';

import Calculator from './Calculator/index';

import './ForeignExchange.css';

class ForeignExchange extends Component {
    render() {
        return(
            <div className="stockmarket-page">
            <MDBContainer>
                <MDBRow>
                    
                    <MDBCol md="9">
                        <ForeignExchangeRates />
                    </MDBCol> 
                    <MDBCol md="3">
                        <div className="currency-calculator-main">
                            <CurrencyConverter />
                            <Calculator />
                        </div>
                        <StockMarketAdds />
                    </MDBCol> 
                </MDBRow>    
            </MDBContainer>                    
            </div>
        )
    }
}

export default ForeignExchange;
