import { ACTIONS } from '../actions';
import { fromJS } from 'immutable';

const productsLoaded = (state, action) =>
  state.set('products', fromJS(action.products));

const updateQuantity = (products, prd, quantity) => {
  const index = products.findIndex(product => product.get('name') === prd.name);
  const prev = products.get(index);
  const next = prev.set('quantity', parseInt(quantity, 10));

  return products.set(index, next);
};

const quantityChanged = (state, action) =>
  state.update('products', products => updateQuantity(products, action.product, action.quantity));

export const productsContext = (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.PRODUCTS_LOADED:
      return productsLoaded(state, action);

    case ACTIONS.QUANTITY_CHANGED:
      return quantityChanged(state, action);

    default: return state;
  }
};
