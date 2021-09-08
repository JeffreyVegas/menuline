import React from 'react';
import Navigation from './routes/Navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
