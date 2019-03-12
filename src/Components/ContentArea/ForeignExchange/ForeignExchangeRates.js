import React, { Component } from 'react';

import forexusd from '../../../statics/images/stock-market/forex-usd.png';
import forexeur from '../../../statics/images/stock-market/forex-eur.png';
import forexgbp from '../../../statics/images/stock-market/forex-gbp.png';
import forexcad from '../../../statics/images/stock-market/forex-cad.png';
import forexcompany1 from '../../../statics/images/stock-market/forex-company1.png';
import forexcompany2 from '../../../statics/images/stock-market/forex-company2.png';
import forexcompany3 from '../../../statics/images/stock-market/forex-company3.png';
import forexcompany4 from '../../../statics/images/stock-market/forex-company4.png';


import './ForeignExchange.css';

class ForeignExchangeRates extends Component {

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
                <div className="foreignexchange-title">
                    <h2>Foeign Exchange Rates</h2>
                    <p>Effective Date: November 22, 2018 2:21 PM (Rate are subject to change)</p>
                </div>
                <div className="foreignexchange-table-wrapper">
                    <table className="table table-bordered mb-0">
                        <thead>
                            <tr>
                                <th className="fx-company-logo company-title">Company</th>
                                <th colSpan="3">
                                    <div>
                                        <span>USD  <img src={forexusd} alt="Forex USD" /></span>    
                                    </div>
                                </th>
                                <th colSpan="3">
                                    <div>
                                        <span>EUR  image <img src={forexeur} alt="Forex EUR" /></span>    
                                    </div>
                                </th>
                                <th colSpan="3">
                                    <div>
                                        <span>GBP  <img src={forexgbp} alt="Forex GBP" /></span>    
                                    </div>
                                </th>
                                <th colSpan="3">
                                    <div>
                                        <span>CAD <img src={forexcad} alt="Forex CAD" /></span>    
                                    </div>
                                </th>

                                <th colSpan="3">
                                    <div>
                                        <span>USD  <img src={forexusd} alt="Forex USD" /></span>    
                                    </div>
                                </th>
                                <th colSpan="3">
                                    <div>
                                        <span>EUR  image <img src={forexeur} alt="Forex EUR" /></span>    
                                    </div>
                                </th>
                                <th colSpan="3">
                                    <div>
                                        <span>GBP  <img src={forexgbp} alt="Forex GBP" /></span>    
                                    </div>
                                </th>
                                <th colSpan="3">
                                    <div>
                                        <span>CAD <img src={forexcad} alt="Forex CAD" /></span>    
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="fe-title">
                                <td className="fx-company-logo border-none"> </td>
                                <td>Sell</td>
                                <td>Buy(Cheque)</td>
                                <td>Buy(Cash)</td>
                                <td>Sell</td>
                                <td>Buy(Cheque)</td>
                                <td>Buy(Cash)</td>
                                <td>Sell</td>
                                <td>Buy(Cheque)</td>
                                <td>Buy(Cash)</td>
                                <td>Sell</td>
                                <td>Buy(Cheque)</td>
                                <td>Buy(Cash)</td>

                                <td>Sell</td>
                                <td>Buy(Cheque)</td>
                                <td>Buy(Cash)</td>
                                <td>Sell</td>
                                <td>Buy(Cheque)</td>
                                <td>Buy(Cash)</td>
                                <td>Sell</td>
                                <td>Buy(Cheque)</td>
                                <td>Buy(Cash)</td>
                                <td>Sell</td>
                                <td>Buy(Cheque)</td>
                                <td>Buy(Cash)</td>
                                
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany1} alt="Forex Company" /></td>
                                <td className="fe-green">-3.57%</td>
                                <td>0.82</td>
                                <td>62.66</td>
                                <td className="fe-green">53.05</td>
                                <td className="fe-green">-1.78</td>
                                <td className="fe-green">-3.36%</td>
                                <td className="fe-green">-3.57%</td>
                                <td className="fe-red">0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                
                                <td className="fe-green">-3.57%</td>
                                <td>0.82</td>
                                <td>62.66</td>
                                <td className="fe-green">53.05</td>
                                <td className="fe-green">-1.78</td>
                                <td className="fe-green">-3.36%</td>
                                <td className="fe-green">-3.57%</td>
                                <td className="fe-red">0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany2} alt="Forex Company" /></td>
                                <td className="fe-red">-3.57%</td>
                                <td>0.82</td>
                                <td>62.66</td>
                                <td className="fe-red">53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td>-3.36%</td>
                                <td className="fe-green">-3.57%</td>
                                <td className="fe-green">0.82</td>
                                <td>62.66</td>
                                <td className="fe-red">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td className="fe-red">-3.57%</td>
                                <td>0.82</td>
                                <td>62.66</td>
                                <td className="fe-red">53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td>-3.36%</td>
                                <td className="fe-green">-3.57%</td>
                                <td className="fe-green">0.82</td>
                                <td>62.66</td>
                                <td className="fe-red">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany3} alt="Forex Company" /></td>
                                <td className="fe-red">-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td>53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td>-3.36%</td>
                                <td className="fe-green">-3.57%</td>
                                <td className="fe-red">0.82</td>
                                <td>62.66</td>
                                <td>53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td>-3.36%</td>

                                <td className="fe-red">-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td>53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td>-3.36%</td>
                                <td className="fe-green">-3.57%</td>
                                <td className="fe-red">0.82</td>
                                <td>62.66</td>
                                <td>53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td>-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany4} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td className="fe-green">0.82</td>
                                <td>62.66</td>
                                <td className="fe-red">53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td className="fe-green">0.82</td>
                                <td>62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td className="fe-green">0.82</td>
                                <td>62.66</td>
                                <td className="fe-red">53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td className="fe-green">0.82</td>
                                <td>62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany1} alt="Forex Company" /></td>
                                <td className="fe-red">-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td>53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td>-3.36%</td>
                                <td className="fe-green">-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td className="fe-red">-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td>53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td>-3.36%</td>
                                <td className="fe-green">-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany2} alt="Forex Company" /></td>
                                <td className="fe-green">-3.57%</td>
                                <td className="fe-red">0.82</td>
                                <td className="fe-red">62.66</td>
                                <td className="fe-red">53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td className="fe-green">-3.36%</td>
                                <td>-3.57%</td>
                                <td className="fe-green">0.82</td>
                                <td>62.66</td>
                                <td className="fe-red">53.05</td>
                                <td className="fe-green">-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td className="fe-green">-3.57%</td>
                                <td className="fe-red">0.82</td>
                                <td className="fe-red">62.66</td>
                                <td className="fe-red">53.05</td>
                                <td className="fe-red">-1.78</td>
                                <td className="fe-green">-3.36%</td>
                                <td>-3.57%</td>
                                <td className="fe-green">0.82</td>
                                <td>62.66</td>
                                <td className="fe-red">53.05</td>
                                <td className="fe-green">-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany3} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany2} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany1} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany3} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany2} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany1} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany2} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany1} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany3} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany2} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany1} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany1} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                            <tr>
                                <td className="fx-company-logo"><img src={forexcompany1} alt="Forex Company" /></td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>

                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-green">62.66</td>
                                <td className="fe-green">53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                                <td>-3.57%</td>
                                <td>0.82</td>
                                <td className="fe-red">62.66</td>
                                <td>53.05</td>
                                <td>-1.78</td>
                                <td className="fe-red">-3.36%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        )
    }
}

export default ForeignExchangeRates;
