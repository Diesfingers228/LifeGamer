import React from 'react';
import ReactDOM from 'react-dom/client';
import './AppMobile801px.css';
import './AppMobile800px.css';
import './AppMobile600px.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import  Store  from './Store/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
