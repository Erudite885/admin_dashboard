import React from 'react'
import { singleProduct } from '../../data';
import { Single } from '../../components';

import "./Product.scss";

const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
}

export default Product