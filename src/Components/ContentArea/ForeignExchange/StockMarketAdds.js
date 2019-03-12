import React, { Component } from 'react';

import smjamaicableaner from '../../../statics/images/stock-market/jamaica-bleaner.png';
import smwireadd from '../../../statics/images/stock-market/wire-add.png';
import smcoins from '../../../statics/images/stock-market/sm-coins.png';

import './ForeignExchange.css';

class StockMarketAdds extends Component {

    

    render() {
        return(
               
            <div className="">
                <div className="stockmarket-table">
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

export default StockMarketAdds;
