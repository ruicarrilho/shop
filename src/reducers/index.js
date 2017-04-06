import { combineReducers } from 'redux';
import { cartsContext } from './CartsReducer';
import { productsContext } from './ProductsReducer';

export default combineReducers({
  cartsContext,
  productsContext
});