import React from 'react';
import { format } from '../util/util';
import Button from './Button';

const CartRow = ({ cartItem, handleClick }) => (
  <div className='cart-row-body'>
    <div className='cart-row'>
      <Button text='X' handleClick={() => handleClick(cartItem)} />
      <div className='cart-item-name'>{cartItem.name}</div>
      <div className='cart-item-quantity'>{cartItem.quantity}</div>
      <div className='cart-item-operator'>*</div>
      <div className='cart-item-unit-price'>{ format(cartItem.unitPrice) }</div>
      <div className='cart-item-operator'>=</div>
      <div className='cart-item-price'>{ format(cartItem.price) }</div>
    </div>
    { cartItem.promotionCount > 0 &&
      <div className='cart-item-promotion'>Applied promotion 3 for 2 ({cartItem.promotionCount} times)</div>
    }
  </div>
);

CartRow.propTypes = {
  cartItem: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default CartRow;