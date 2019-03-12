import React, { Component } from "react";

import AboutBanner from './AboutBanner';
import AboutBoxes from './AboutBoxes';

class AboutUs extends Component {
    render() {
        return(
            <div>
                <AboutBanner />
                <AboutBoxes />
            </div>
        )
    }
}

export default AboutUs;
