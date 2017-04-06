import React from 'react';

const Quantity = ({ handleChange, product }) => (
  <div className='quantity-body'>
    <label className='quantity-label'>Quantity:</label>
    <input
      className='quantity-input'
      type='number'
      value={product.quantity}
      onChange={ e => handleChange(e.target.value, product)} />
  </div>
);

Quantity.propTypes = {
  product: React.PropTypes.object.isRequired,
  handleChange: React.PropTypes.func.isRequired
};

export default Quantity;