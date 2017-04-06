import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default data => createStore(
  rootReducer,
  data,
  compose(applyMiddleware(thunk, createLogger()))
);