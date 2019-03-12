import React, { Component } from 'react';

import smpost from '../../../statics/images/stock-market/sm-post.png';
import smjamaicableaner from '../../../statics/images/stock-market/jamaica-bleaner.png';
import smwireadd from '../../../statics/images/stock-market/wire-add.png';
import smcoins from '../../../statics/images/stock-market/sm-coins.png';

import './ForeignExchange.css';

class StockMarketPost extends Component {

    

    render() {
        return(
               
            <div className="fe-widget">
                <div className="stockmarket-table">
                    <div className="gm-post-sec">
                        <div className="gm-lead">
                            <a href="#!">Lead Stories >> </a>
                        </div>    
                        <img src={smpost} alt="Gm Post" />
                        <h5><a href="#!">US$738 Million Corruption Cost - Metry Seaga Demands Action To Cure Disease Eating Away Heart Of Jamaica </a></h5>
                        <p>Jamaica continues to pay dearly for corruption, with an estimated five per cent of the gross domestic product lost each year to the practice, amounting to millions of dollars. This is a serious indication of the failure of successive administrations</p>
                    </div>
                    <div className="sm-add">
                        <img src={smjamaicableaner} alt="Sm Jamaica" />
                    </div>  
                    <div className="sm-add">
                        <img src={smwireadd} alt="Sm Add" />
                    </div> 
                    <div className="sm-add">
                        <img src={smcoins} alt="Sm Coins" />
                    </div>    
                </div>
            </div>
        )
    }
}

export default StockMarketPost;
