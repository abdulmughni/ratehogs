import React, { Component } from "react";

import BestCreditCard from './BestCreditCard';
import CompareCreditCards from './CompareCreditCards';
import SponsoredProducts from './SponsoredProducts';

class OurProducts extends Component {
    render() {
        return(
            <div>
                <BestCreditCard />
                <CompareCreditCards />
                <SponsoredProducts />
            </div>
        )
    }
}

export default OurProducts;
