import products from '../data/products';

export const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  REMOVE_CART_ROW: 'REMOVE_CART_ROW',
  PRODUCTS_LOADED: 'PRODUCTS_LOADED',
  QUANTITY_CHANGED: 'QUANTITY_CHANGED'
};

export const addToCart = product => ({
  type: ACTIONS.ADD_TO_CART,
  product
});

export const removeFromCart = product => ({
  type: ACTIONS.REMOVE_FROM_CART,
  product
});

const porductsLoaded = products => ({
  type: ACTIONS.PRODUCTS_LOADED,
  products
});

export const quantityChanged = (quantity, product) => ({
  type: ACTIONS.QUANTITY_CHANGED,
  quantity,
  product
});

export const loadProducts = () => dispatch => {
  dispatch(porductsLoaded(products));
};

export const removeCartRow = cartItem => ({
  type: ACTIONS.REMOVE_CART_ROW,
  cartItem
});