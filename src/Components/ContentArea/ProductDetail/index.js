import React, { Component } from 'react';

import ProductDetailMain from './ProductDetailMain';
import GreatReasonList from './GreatReasonList';
import AdditionalInformation from './AdditionalInformation';
import RelatedSponsoredProducts from './RelatedSponsoredProducts';
import OtherProducts from './OtherProducts';
import CustomerReviews from './CustomerReviews';

class ProductDetail extends Component {
    render() {
        return(
            <div>
                <ProductDetailMain />
                <GreatReasonList />
                <AdditionalInformation />
                <CustomerReviews />
                <RelatedSponsoredProducts />
                <OtherProducts />                
            </div>
        )
    }
}

export default ProductDetail;
