import React, { Component } from "react";

import Slides from './Slider';
import ServicesContent from './ServicesContent';

class OurServices extends Component {
    render() {
        return(
            <div>
                <Slides />
                <ServicesContent />
            </div>
        )
    }
}

export default OurServices;
