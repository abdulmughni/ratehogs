import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'

class MortgageInformation extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            amount: 3000000,
            peroid: 4,
        }
    }

    handleChangeStart = () => {
        console.log('Change event started')
    };
    
    handleChange = value => {
        this.setState({
            amount: value
        })
    };

    handleChangeComplete = () => {
        console.log('Change event completed')
    };

    ChangePeroidValue = value => {
        this.setState({
            peroid: value
        })
    };

    render() {
        const { amount, peroid } = this.state
        
        return(
            <div>
                <div className="rh-heading-style">
                    <h4>Mortage Information</h4>
                    <p className="banner-caption">Nam felis urna, cursus eget interdum ac, efficitur et quam. Suspendisse ut diam vel erat aliquet pellentesque a at tellus. Praesent eget faucibus mauris, sed dictum nibh. Donec cursus cursus erat, eu scelerisque justo laoreet non. Nunc tempor faucibus libero eget venenatis.</p>
                </div>
                
                <div className='range-slider mb-4'>
                    <h3>Loan Amount</h3>
                    <Slider
                        min={100000}
                        max={10000000}
                        value={amount}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChange}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    <div className='range-value'>
                        <span>$100,000</span>
                        <span className="float-right">$100,000,000</span>
                    </div>
                </div>

                <div className='range-slider mb-4'>
                    <h3>Repayment Peroid</h3>
                    <Slider
                        min={1}
                        max={12}
                        value={peroid}
                        orientation='horizontal'
                        onChange={this.ChangePeroidValue}
                    />
                    <div className='range-amount'>
                        <span>1 Year</span>
                        <span className="float-right">12 Years</span>
                    </div>
                </div>

                <MDBBtn>Find the best rate</MDBBtn>
            </div>            
        )
    }
}

export default MortgageInformation;
