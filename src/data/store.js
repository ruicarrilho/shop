import Immutable from 'immutable';

export const store = {
  productsContext: Immutable.fromJS({
    products: []
  }),
  cartsContext: Immutable.fromJS({
    cart: []
  })
};