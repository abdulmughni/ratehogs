import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutUs from './AboutUs';
import OurServices from './OurServices';
import OurProducts from './OurProducts';
import Investment from './Investments';
import Mortgage from './Mortgages';
import MortgageCalculator from './MortgageCalculator';
import MortgageCalculator_2 from './MortgageCalculator-2';
import ProductDetail from './ProductDetail';
import StockInvestments from './StockInvestments';
import StockMarket from './StockMarket';
import ForeignExchange from './ForeignExchange';


import './ContentArea.css';

const ContentArea = () => (
  <Switch>
    <Route path="/about-us" component={AboutUs} />
    <Route path="/our-services" component={OurServices} />
    <Route path="/our-products" component={OurProducts} />
    <Route path="/investments" component={Investment} />
    <Route path="/mortgage" component={Mortgage} />
    <Route path="/mortgage-calculator" component={MortgageCalculator} />
    <Route path="/mortgage-calculator-2" component={MortgageCalculator_2} />
    <Route path="/product-detail" component={ProductDetail} />
    <Route path="/stock-investments" component={StockInvestments} />
    <Route path="/stock-market" component={StockMarket} />
    <Route path="/foreign-exchange" component={ForeignExchange} />
  </Switch>
);

export default ContentArea;
