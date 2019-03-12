import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";

import MortgagesAdd from '../../../statics/images/mortgage/fgb-payday-load-banner.jpg';

class MortgagesBottomAdd extends Component {
    render() {
        return(
            <div className="section pt-3 grey-section text-center">
                <MDBContainer>
                    <img src={MortgagesAdd} alt="Add Banner" className="img-fluid" />
                </MDBContainer>
            </div>
        )
    }
}

export default MortgagesBottomAdd;
