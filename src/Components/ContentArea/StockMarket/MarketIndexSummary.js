import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import jamaica from '../../../statics/images/stock-market/jamaica-hospitality.png';

import './StockMarket.css';

class MarketIndexSummary extends Component {
    render() {
        return(
            <div className="stockmarket-table sm-indexsummary">
                <MDBTable borderless>
                    <MDBTableHead>
                        <tr>
                        <th colSpan="4">Market Index Summary</th>
                        <th className="clr-gold" colSpan="4"> Sponsor: <img src={jamaica} alt="Jamaica Hospitality" /> </th>
                        
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>Main Index</td>
                            <td className="clr-gold">Vol</td>
                            <td className="clr-gold">8,202,147</td>
                            <td className="clr-gold">388,144.15</td>
                            <td className="clr-gold">3,704.41</td>
                            <td className="clr-gold">1.00</td>
                        </tr>
                        <tr>
                            <td>JSE SELECT</td>
                            <td className="clr-gold">Vol</td>
                            <td className="clr-gold">1,377.442</td>
                            <td className="clr-gold">8,823.46</td>
                            <td className="clr-gold">74.03</td>
                            <td className="clr-gold">0.75</td>
                        </tr>
                        <tr>
                            <td>ALL JAMAICA</td>
                            <td className="clr-gold">Vol</td>
                            <td className="clr-gold">5,202,147</td>
                            <td className="clr-gold">401,854.52</td>
                            <td className="clr-gold">4,055.81</td>
                            <td className="clr-gold">1.02</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
                <div>
                    <p className="clr-gold">Last Update on October 25 2018 at 11.40am</p>
                </div>
            </div>
        )
    }
}

export default MarketIndexSummary;
