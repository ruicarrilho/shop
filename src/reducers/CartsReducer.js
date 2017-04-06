import { ACTIONS } from '../actions';
import { fromJS } from 'immutable';

const getNewCart = (name, quantity, unitPrice, price, promotionCount) => {
  return { name, quantity, unitPrice, price, promotionCount };
};

const promotionCount = (quantity, hasPromotion) =>
  hasPromotion ? Math.floor( quantity / 3) : 0;

const computePrice = (quantity, unitPrice, hasPromotion) => {
  const module = promotionCount(quantity, hasPromotion);
  quantity -= module;
  return quantity * unitPrice;
};

const addElementsToCart = (cart, prd) => {
  const index = cart.findIndex(cartItem => cartItem.get('name') === prd.name);
  if (index > -1) {
    const prev = cart.get(index);
    const quantity = prev.get('quantity') + prd.quantity;
    const price = computePrice(quantity, prd.price, prd.promotion);
    const next = prev
                    .set('quantity', quantity)
                    .set('price', price)
                    .set('promotionCount', promotionCount(quantity, prd.promotion));
    return cart.set(index, next);
  } else {
    const price = computePrice(prd.quantity, prd.price, prd.promotion);
    return cart.push(fromJS(
      getNewCart(prd.name, prd.quantity, prd.price, price, promotionCount(prd.quantity, prd.promotion))));
  }
};

const removeElementsFromCart = (cart, prd) => {
  const index = cart.findIndex(cartItem => cartItem.get('name') === prd.name);
  if (index >- 1) {
    const prev = cart.get(index);
    const quantity = prev.get('quantity') - prd.quantity;
    const price = computePrice(quantity, prd.price, prd.promotion);
    if (quantity > 0) {
      const next = prev
                    .set('quantity', quantity)
                    .set('price', price)
                    .set('promotionCount', promotionCount(quantity, prd.promotion));
      return cart.set(index, next);
    } else {
      return cart.filter(cartItem => cartItem.get('name') !== prd.name);
    }
  }
  return cart;
};

const removeCartRowFromCart = (cart, item) =>
  cart.filter(cartItem => cartItem.get('name') !== item.name);

const addToCart = (state, action) =>
  state.update('cart', cart => addElementsToCart(cart, action.product));

const removeFromCart = (state, action) =>
  state.update('cart', cart => removeElementsFromCart(cart, action.product));

const removeCartRow = (state, action) =>
  state.update('cart', cart => removeCartRowFromCart(cart, action.cartItem));

export const cartsContext = (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return addToCart(state, action);

    case ACTIONS.REMOVE_FROM_CART:
      return removeFromCart(state, action);

    case ACTIONS.REMOVE_CART_ROW:
      return removeCartRow(state, action);

    default: return state;

  }
};
