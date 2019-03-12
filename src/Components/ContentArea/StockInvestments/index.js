import React, { Component } from 'react';

import StockInvestmentsMain from './StockInvestmentsMain';
import StockBrokers from './StockBrokers';
import BannerAdd from './BannerAdd';
import StockInvestmentsInfo from './StockInvestmentsInfo';

class StockInvestments extends Component {
    render() {
        return(
            <div>
                <StockInvestmentsMain />
                <StockInvestmentsInfo />
                <StockBrokers />
                <BannerAdd />
            </div>
        )
    }
}

export default StockInvestments;
