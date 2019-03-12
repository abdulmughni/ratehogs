import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";

import Banner from '../../../statics/images/stock-investments/first-global-bank-banner.jpg';

class BannerAdd extends Component {
    render() {
        return(
            <div className="section pt-0 text-center">
                <MDBContainer>
                    <img src={Banner} alt="Add Banner" className="img-fluid" />
                </MDBContainer>
            </div>
        )
    }
}

export default BannerAdd;
