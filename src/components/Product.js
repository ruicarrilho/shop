import React from 'react';
import { format } from '../util/util';

const Product = ({ product }) => (
  <div className='product-body'>
    <div className='product-name'>{product.name}</div>
    <span className='product-price-label'>Unit price:</span>
    <span className='product-price'>{format(product.price)}</span>
  </div>
);

Product.propTypes = {
  product: React.PropTypes.object.isRequired
};

export default Product;