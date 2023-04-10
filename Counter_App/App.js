import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import CounterView from './CounterView';

export default function App() {
  return (
    <Provider store={store}>
      <CounterView/>
    </Provider>
  );
}