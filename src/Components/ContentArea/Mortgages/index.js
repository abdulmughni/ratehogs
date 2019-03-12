import React, { Component } from 'react';

import MortgagesMain from './MortgagesMain';
import MortgagesProducts from './MortgagesProducts';
import MortgagesBottomAdd from './MortgagesButtonAdd';

class Mortgages extends Component {
    render() {
        return(
            <div>
                <MortgagesMain />
                <MortgagesProducts />
                <MortgagesBottomAdd />
            </div>
        )
    }
}

export default Mortgages;
