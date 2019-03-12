import React, { Component } from 'react';
import PointTarget from 'react-point'

class CalculatorKey extends Component {
    render() {
      const { onPress, className, ...props } = this.props
      
      return (
        <PointTarget onPoint={onPress}>
          <button className={`calculator-key ${className}`} {...props}/>
        </PointTarget>
      )
    }
  }

export default CalculatorKey;
