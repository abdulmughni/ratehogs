import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

import forexusd from '../../../../../statics/images/stock-market/forex-usd.png';
import forexgbp from '../../../../../statics/images/stock-market/forex-gbp.png';
import smjamaicableaner from '../../../../../statics/images/stock-market/jamaica-bleaner.png';
import smwireadd from '../../../../../statics/images/stock-market/wire-add.png';
import smcoins from '../../../../../statics/images/stock-market/sm-coins.png';

import './CurrencyConverter.css';

class CurrencyConverter extends Component {
    
    render() {

      return (
        <div className="currency-converter">
          <MDBContainer>
              <MDBRow>
                <MDBCol md="5">
                  <div className="country-dropdown">
                  <img src={forexusd} alt="Forex USD" />
                  </div>
                  <div className="country-dropdown">
                    <p>From</p>
                    <select className="browser-default">
                      <option>USD</option>
                      <option value="1">AUD</option>
                      <option value="2">BGN</option>
                      <option value="3">BRL</option>
                      <option value="1">CAD </option>
                      <option value="2">CHF</option>
                      <option value="3">CNY</option>
                    </select>
                  </div>
                </MDBCol>
                <MDBCol md="2">
                      <div className="country-change">
                            <MDBIcon icon="sync" />
                        </div>
                </MDBCol>
                <MDBCol md="5">
                    <div className="country-dropdown">
                      <img src={forexgbp} alt="Forex USD" />
                    </div>
                    <div className="country-dropdown">
                        <p>TO</p>
                        <select className="browser-default">
                          <option>GBP</option>
                          <option value="1">AUD</option>
                          <option value="2">BGN</option>
                          <option value="3">BRL</option>
                          <option value="1">CAD </option>
                          <option value="2">CHF</option>
                          <option value="3">CNY</option>
                          <option value="4">USD</option>
                        </select>
                    </div>
                </MDBCol>
              </MDBRow>
          </MDBContainer>
        </div>
        
      )
    }
  }

export default CurrencyConverter;
  