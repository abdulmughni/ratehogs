import React, { Component } from 'react';

import InvestmentMain from './InvestmentMain';
import GettingStarted from './GettingStarted';
import ReviewsAndMore from './ReviewsMore';
import FaqSlides from './FaqSlides';

class Investments extends Component {
    render() {
        return(
            <div>
                <InvestmentMain />
                <GettingStarted />
                <FaqSlides />
                <ReviewsAndMore />
            </div>
        )
    }
}

export default Investments;
