import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store/configStore';
import AppRouter from './router';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
