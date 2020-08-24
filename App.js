import React from 'react';
import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer, composeWithDevTools());
import ShopNavigator from './navigation/shopNavigator';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};

export default App;
