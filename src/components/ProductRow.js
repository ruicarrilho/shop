import React from 'react';
import Product from './Product';
import Button from './Button';
import Quantity from './Quantity';

const ProductRow = ({ product, addToCart, removeFromCart, quantityChanged }) => (
  <div className='productrow-body'>
    <Product product={product} />

    <Quantity
      handleChange={quantityChanged}
      product={product} />

    <Button
      text='Add'
      handleClick={() => addToCart(product)} />

    <Button
      text='Remove'
      handleClick={() => removeFromCart(product)} />

  </div>
);

ProductRow.propTypes = {
  product: React.PropTypes.object.isRequired,
  addToCart: React.PropTypes.func.isRequired,
  removeFromCart: React.PropTypes.func.isRequired,
  quantityChanged: React.PropTypes.func.isRequired
};

export default ProductRow;