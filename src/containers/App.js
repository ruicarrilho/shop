import React from 'react';
import ItemsList from './ItemsList';
import Cart from './Cart';

const App = () => (
  <div className='app-body'>
    <h2>Shop</h2>
    <hr />
    <ItemsList />
    <Cart />
  </div>
);

export default App;