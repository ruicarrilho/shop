import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './stores/Store';
import App from './containers/App';
import { store as data } from './data/store';

const Main = () => (
  <Provider store={configureStore(data)}>
    <App />
  </Provider>
);

export default Main;