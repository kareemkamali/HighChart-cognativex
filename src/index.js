import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>

    {/* BrowserRouter hight components to access whole app  */}
    <BrowserRouter>
     {/* provider hight components to pass all data in store to whole app */}
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);